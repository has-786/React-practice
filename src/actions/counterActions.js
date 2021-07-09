import * as actionTypes from './ActionTypes';

// Action creators

export function addCounter(data = 1){
    return {type:actionTypes.ADD_COUNTER,payload:data};
}
export function removeCounter(data = 1){
    return {type:actionTypes.REMOVE_COUNTER,payload:data};
}