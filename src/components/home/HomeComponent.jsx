import React from "react";
import {Switch,Route,BrowserRouter,Link} from 'react-router-dom'
import { useDispatch,useSelector } from "react-redux";

import AboutComponent from '../about/AboutComponent'
import CounterComponent from '../counter/CounterComponent'


//import {clickAsync} from '../../actions/clickSaga'
import './home.css'

const HomeComponent = (props) => {
    const dispatch=useDispatch()
    const fp=useSelector(state=>state.productReducer[0])
  
    return <div>
                <BrowserRouter>

            <Link to="/A?name=Hasnain">Hasnain</Link>
            <Link to="/A?name=Saqlain">Saqlain</Link>
                <Switch>
                    <Route path='/A' component={CounterComponent}/>
                    <Route path='/B' component={AboutComponent}/>
                </Switch>
            </BrowserRouter>

     {/*   <h1>Home Component</h1>
        <p>This is a simple React Redux Application</p>
        <div class='flex'>
            <div class='flex-items'><p class='flex-text'>First Box</p></div>
            <div class='flex-items'><p class='flex-text'>Second Box</p></div>
            <div class='flex-items'><p class='flex-text'>Third Box</p></div>
            <div class='flex-items'><p class='flex-text'>Fourth Box</p></div>
            <div class='flex-items'><p class='flex-text'>Fifth Box</p></div>
            <div class='flex-items'><p class='flex-text'>Sixth Box</p></div>
            <div class='flex-items'><p class='flex-text'>Seventh Box</p></div>
        </div>
   
        <div class='grid'>
            <div class='grid-items'>1</div><div  class='grid-items'>2</div><div  class='grid-items'>3</div>
            <div class='grid-items'>4</div><div  class='grid-items'>5</div><div  class='grid-items'>6</div>
            <div class='grid-items'>7</div><div  class='grid-items'>8</div><div  class='grid-items'>9</div>
        </div>

        <button class='btn btn-primary' onClick={()=>dispatch({type:'LOAD_FP'}) }>Load the first product</button>
        <div class='py-2'>{fp?.name} {fp?.status} {fp?.description}</div>

        <button class='btn btn-secondary' onClick={()=>dispatch({type:'CLICK'}) }>Just click Async</button>
        <Link to="/A">A</Link>
        <Link to="/B">B</Link>
     
        <p>{JSON.stringify(props.match)}</p>*/}
  
    </div>
}

export default HomeComponent;