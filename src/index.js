import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from "react-router-dom";

import Root from './components/Root';

import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

const store = configureStore();

ReactDOM.render(
    // react-redux library whose sole purpose is to seamlessly 
    // integrate redux’s state management into a React application.
    
    // If we want to link our React application with the redux 
    // store,we first have to let our app know that this store 
    // exists. This is where we come to the first major part of
    // the react-redux library, which is the Provider.

    // Provider is a React component given to us by the “react-redux”
    // library. It serves just one purpose : to “provide” the 
    // store to its child components.
    <Provider store={store}>
        <BrowserRouter>
            <Root />
        </BrowserRouter>
    </Provider>, document.getElementById("root"));