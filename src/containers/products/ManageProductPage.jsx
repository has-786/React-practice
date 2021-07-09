import React, {useState,useEffect} from 'react';
import { useSelector,useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import {updateProduct,saveProduct}  from "../../actions/productActions";
import ProductForm from '../../components/products/ProductForm';

const ManageProductPage=(props)=>{
    const [state,setState]=useState({
        id: "",
        name: "",
        description: "",
        status: ""
    })
    
    const dispatch=useDispatch()
    const productReducer=useSelector(state=>state.productReducer)
    let ptext=""

    useEffect(()=>{
            
        const productId = props.match.params.id;
        let product = {
            id: "",
            name: "",
            description: "",
            status: ""
        };

    
        if (productId && productReducer.length > 0) {
            product = getProductById(productReducer, productId);
        }
        setState({product})

        ptext = state.product?.id == "" ? "Create Product" : "Edit Product";

    },[])
   
    
    const updateProductState=(e)=>{
        const field = e.target.name;
        let product = state.product;
        product[field] = e.target.value;
        setState({ product: product });
    }

   const saveProductState=(e)=>{
        e.preventDefault();
        if (state.product.id)
            updateProduct(state.product,dispatch);
        else
            saveProduct(state.product,dispatch);
        props.history.push("/products");
    }

        return (
            <div>
                {(state.product)? <ProductForm
                    pageText={ptext}
                    product={state.product}
                    onChange={updateProductState}
                    onSave={saveProductState} />
                    :null
                }
                
            </div>
        );
}

ManageProductPage.contextTypes = {
    router: PropTypes.shape({
        history: PropTypes.object.isRequired
    })
}

function getProductById(products, id) {
    const product = products.filter(product => product.id == id);
    if (product) return product[0];
    return null;
}


export default ManageProductPage