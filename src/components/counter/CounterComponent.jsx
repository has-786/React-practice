import React,{useState,useRef} from 'react';
import Counter from '../../containers/Counter';
import {useLocation} from 'react-router-dom'

const CounterComponent = () => {
    
    const query=new URLSearchParams(useLocation().search)
    const people=['Hasnain','Syed Hasnain','Syed Hussaini','Imam Khomeini','Imam Khamenei']
    const [selectedPeople,setSelectedPeople]=useState(people)
    const searchRef=useRef(null)


    function searchPeople(){
        let timer
        let context=this
        return function() {
            console.log(arguments)
            if(timer)clearTimeout(timer)
            
            timer=setTimeout(() => {
            
            filterPeople.apply(context,arguments)

             /*   const search=searchRef.current.value.trim()
                    if(search==="")setSelectedPeople(people)
                   else setSelectedPeople(people.filter(p=>p.includes(search)))*/
            },2000);
        }
    }
      

    const filterPeople=(search)=>{
       search=search.trim()
       if(search==="")setSelectedPeople(people)
       else setSelectedPeople(people.filter(p=>p.includes(search)))   
    }


   

    return (
        <div>
        {query.get('name')}
            <Counter></Counter>
            <input type='text' ref={searchRef} onChange={(evt)=>searchPeople()(evt.target.value)}/>
            <div>
            {
                (!selectedPeople.length)?<p>No results found</p>:
                <ul>
                   { selectedPeople.map(p=><li>{p}</li>)}
                </ul>
            }
            </div>
        </div>
    );
}

export default CounterComponent;