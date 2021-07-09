import React, { useState,useEffect } from 'react';
import { useSelector,useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { withRouter } from "react-router-dom";

import {loadProducts,deleteProduct} from "../../actions/productActions";
import ProductList from '../../components/products/ProductList';

const ProductsPage=(props)=>{
  
    const products=useSelector(state=>state.productReducer)
    const dispatch=useDispatch()


    const deleteClick=(p, e)=>{
        e.preventDefault();
        deleteProduct(p,dispatch);
    }

    useEffect(()=>{
        loadProducts(dispatch);
    },[])

        return (
            <div>
                <h1>Products Page</h1>
                <RedirectButton />
                {/* <button className="btn btn-primary" onClick={this.loadClick}>Load</button> */}
                <ProductList products={products} onDelete={deleteClick} />
            </div>
        )
    
}

const RedirectButton = withRouter(({ history }) => (
    <button type="button" className="btn btn-primary"
        onClick={() => {
            history.push("/product");
        }}>Add Product</button>
));


export default ProductsPage