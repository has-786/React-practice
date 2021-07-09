import React,{useRef,useState} from "react";
import {useFormik,Formik,Field,Form,  ErrorMessage
} from 'formik'
import * as Yup from 'yup'
import './fileupload.css'
import { validate } from "@babel/types";
import { convertToObject } from "typescript";


function FormComponent() {
  
    const initialValues={name:'',email:'',password:'',file:null}
    
    const onSubmit=(values,submitProps)=>{
        console.log('Form submitted',values)
        console.log(submitProps)
        submitProps.resetForm()
        submitProps.setSubmitting(false)

        // This will run when the form is submitted
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Required!'),
        email: Yup.string().email('Invalid email format!').required('Required!'),
        password: Yup.string().required('Required!').length(6),
    })

    const validateFile=value=>{
          let error;
          if(!value?.length)error="Required!"
          return error
    }
    
    return <div className="container card p-3 box" style={{background:'#fffcb7'}}>
            <Formik initialValues={initialValues} validationSchema={validationSchema}  onSubmit={onSubmit}>
                {
                    formik=>{
                        console.log(formik)
                    //    console.log(fileRef.current)
                        const {setFieldValue}=formik
                        return    <Form>
                        <div className="py-3">
                            <label htmlFor="name">Name</label>
                            <Field type='text' name='name' id='name' className='form-control' />
                            <ErrorMessage name='name'>
                                {
                                    errorMessage=><div className="text-danger">{errorMessage}</div>
                                }
                            </ErrorMessage>                    
                        </div>
                        <div className="py-3">
                            <label htmlFor="email">Email</label>
                            <Field type='email' name='email' id='email' className='form-control'/>
                            <ErrorMessage name='email'>
                                {
                                    errorMessage=><div className="text-danger">{errorMessage}</div>
                                }
                            </ErrorMessage>
                        </div>
                        <div className="py-3">
                            <label htmlFor="password">Password</label>
                            <Field type='password' name='password' id='password' className='form-control'/>
                            <ErrorMessage name='password'>
                                {
                                    errorMessage=><div className="text-danger">{errorMessage}</div>
                                }
                            </ErrorMessage>
                        </div>
                        <div className="py-3">
                            <label htmlFor="file">Upload File</label>
                            <input type='file' name='file' id='file' className='form-control' onChange={evt=>setFieldValue('file',evt.currentTarget.files[0])}/>
                            <ErrorMessage name='file' >
                                {
                                    errorMessage=><div className="text-danger">{errorMessage}</div>
                                }
                            </ErrorMessage>
                        </div>
                        <button type='submit' className='btn btn-primary mt-4' disabled={ !formik.isValid || formik.isSubmitting}>Submit</button> 
                    </Form>
                    }
                }
            </Formik>
            </div>

}

export default FormComponent;