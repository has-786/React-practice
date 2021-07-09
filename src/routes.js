import React from "react";
import { Switch, Route} from "react-router-dom";
import CounterComponent from './components/counter/CounterComponent';
import HomeComponent from "./components/home/HomeComponent";
import ProductsPage from "./containers/products/ProductsPage";
import ManageProductPage from "./containers/products/ManageProductPage";
import FileUpload from "./components/fileupload";
import FormComponent from "./components/formComponent.js";


export default (
    <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/counter" component={CounterComponent} />        
        <Route path="/products" component={ProductsPage} />
        <Route path="/product/:id" component={ManageProductPage} />
        <Route path="/product" component={ManageProductPage} />
        <Route path="/fileupload" component={FileUpload} />
        <Route path="/form" component={FormComponent} />
    </Switch>
);