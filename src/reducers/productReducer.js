import * as actionTypes from "../actions/ActionTypes";
import inititalState from "./inititalState";

const productReducer = (state = inititalState.products, action) => {
    switch (action.type) {
        case actionTypes.LOAD_PRODUCTS_SUCCESS:
            return action.products;
        case actionTypes.CREATE_PRODUCT_SUCCESS:
            return [...state, Object.assign({}, action.product)];
        case actionTypes.UPDATE_PRODUCT_SUCCESS:
            return [
                ...state.filter(p => p.id != action.product.id),
                Object.assign({}, action.product)
            ];
        case actionTypes.DELETE_PRODUCT_SUCCESS:
            return [
                ...state.filter(p => p.id != action.product.id)
            ];
  /*      case 'CLICK_NOW_ASYNC_PENDING':
            console.log('pending')
            console.log(action.payload)
            return state 
            case 'CLICK_NOW_ASYNC_FULFILLED':
                console.log('accepted')

                console.log(action.payload.data)
                return state 
                case 'CLICK_NOW_ASYNC_REJECTED':
                    console.log('rejected')

                    console.log(action.payload)
                    return state          */
                    case 'LOAD_FP_ASYNC':
                        //console.log(action.payload)
                        return action.payload

                    case 'CLICK_ASYNC':
                        console.log(action.payload)
                        return state;
    
        default:
            return state;
    }
}

export default productReducer;