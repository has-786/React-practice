import {all, fork, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

function *loadfpAsync()
{
    const response=yield axios.get("http://localhost:8000/products")

    yield put({type:'LOAD_FP_ASYNC',payload:response.data})
}

function *clickAsync()
{
    yield axios.get("http://localhost:8000/products")
    yield put({type:'CLICK_ASYNC',payload:{value:"Hasnain clicks the button"}})
}

function  *loadfp() {
    yield takeEvery('LOAD_FP',loadfpAsync)
}

function  *clickfp() {
    yield takeEvery('CLICK',clickAsync)
}

export default function *rootSaga(){
   
  yield all([fork(loadfp),fork(clickfp)])

}

