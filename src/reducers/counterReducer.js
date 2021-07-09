import * as actionTypes from '../actions/ActionTypes';
import inititalState from './inititalState';

const counterReducer = (state = inititalState.count, action) =>
{
    let newState;
    switch (action.type) {
        case actionTypes.ADD_COUNTER:
            return newState = state + action.payload;
        case actionTypes.REMOVE_COUNTER:
            return newState = state - action.payload;
        default:
            return state;
    }
}
export default counterReducer;