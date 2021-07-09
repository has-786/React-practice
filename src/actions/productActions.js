import * as actionTypes from "./ActionTypes";
import ProductsAPI from "../api/ProductsAPI";

export function loadProductSuccess(products) {
    return { type: actionTypes.LOAD_PRODUCTS_SUCCESS, products };
}

export function createProductSuccess(product) {
    return { type: actionTypes.CREATE_PRODUCT_SUCCESS , product };
}

export function updateProductSuccess(product) {
    return { type: actionTypes.UPDATE_PRODUCT_SUCCESS, product };
}

export function deleteProductSuccess(product) {
    return { type: actionTypes.DELETE_PRODUCT_SUCCESS, product };
}

export function loadProducts(dispatch) {
   // return function (dispatch) {
        return ProductsAPI.getAllProducts()
            .then(products => {
                dispatch(loadProductSuccess(products));
            })
            .catch(err => { throw err; })
  //  }
}

export function saveProduct(product,dispatch) {
  //  return function (dispatch) {
        return ProductsAPI.saveProduct(product)
            .then(savedProduct => {
                dispatch(createProductSuccess(savedProduct));
            })
            .catch(err => { throw err; })
  //  }
}

export function updateProduct(product,dispatch) {
   // return function (dispatch) {
        return ProductsAPI.updateProduct(product)
            .then(updatedProduct => {
                dispatch(updateProductSuccess(updatedProduct));
            })
            .catch(err => { throw err; })
   // }
}

export function deleteProduct(product,dispatch) {
   // return function (dispatch) {
        return ProductsAPI.deleteProduct(product)
            .then(response => {
                dispatch(deleteProductSuccess(product));
            })
            .catch(err => { throw err; })
    //}
}