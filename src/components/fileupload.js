import React,{useState,useRef} from "react";
import axios from 'axios'
import ProgressBar from 'react-bootstrap/ProgressBar'
import './fileupload.css'

const FileUpload = () => {
    let [progress,setProgress]=useState(-1)
    const [imgSrc,setImgSrc]=useState([])
    const [files,setFiles]=useState([])
    const filesRef=useRef(null)


    const handleChange=()=>{

        const selectedFiles=filesRef.current.files

        if(!selectedFiles)return
        const numofFiles=selectedFiles.length

        for(let i=0;i<numofFiles;i++)
        {
            let binaryData = [];
            binaryData.push(selectedFiles[i]);
           
            setFiles(files=>[...files,selectedFiles[i]])
            setImgSrc(imgSrc=>[...imgSrc,window.URL.createObjectURL(new Blob(binaryData, {type: "application/zip"}))])
        }
    }

    const removeImg=(ind)=>{
        console.log('Deleted',ind)
        let tempImgSrc=[...imgSrc]
        let tempFiles=[...files]

        tempImgSrc.splice(ind,1)
        tempFiles.splice(ind,1)

        setImgSrc([...tempImgSrc])
        setFiles([...tempFiles])
    }

    const submit=(evt)=>{
        evt.preventDefault()
        console.log('submitted',files)
        if(!files.length)return

        let formData=new FormData()
        const numofFiles=files.length
        
        for(let i=0;i<numofFiles;i++)formData.append('files',files[i])
               
        formData.append('name','Hasnain')
        formData.append('age',23)

        setProgress(0)
        
        axios.post('http://localhost:5000/uploadFile',formData,{headers:{'content-type':'multipart/form-data'},
                                                        onUploadProgress:progressEvent=>{
                                                            const {loaded,total}=progressEvent
                                                            setProgress(parseInt(loaded*100/total))
                                                        }
        })
        .then(_=>{
                    console.log(progress)
                    setProgress(101)  
                        
                    setTimeout(()=>{
                        setImgSrc([]); setProgress(-1); setFiles([]);
                        document.querySelector("input[name='files']").value=null;
                    },2000)

        })
        .catch(err=>console.log(err))

    
}


    return <div>
        <h5 class='heading'>Upload File</h5>
        <div class='box container p-5' >
            <form method='post' onSubmit={submit}>
                <div class="image-upload">
                    <label for="file-input" class='flex'>
                        <i  className="glyphicon glyphicon-plus" style={{color:'darkblue',fontSize:'30px'}}/>
                        <span class='text-primary load-images'>Add Images</span>
                    </label>
                    <input type='file' id='file-input' accept="image/*" name='files' onChange={handleChange} ref={filesRef} multiple/>
                </div>    
                <div class='flexImg mt-5'>
                    {imgSrc.map((img,ind)=><div class='contain'><img src={img} class='img img-rounded' width='200px' height='200px'/><i className="glyphicon glyphicon-remove icon-cross" onClick={removeImg.bind(this,ind)}/></div>)}
                </div> 
                <br />
               {(files.length)?<input type='submit' value='Upload' class='btn btn-primary'/>:null}
                <div class='div-center'>{(progress!=-1 && progress!=101)?<ProgressBar animated label={`${progress}%`} now={progress} />:<p class='label label-success' >{(progress===101)?`Uploaded Successfully`:null}</p>}</div>
            </form>
        </div>
        <br />
        <br />
    </div>
}

export default FileUpload;