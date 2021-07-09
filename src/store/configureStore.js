// import { createStore } from "redux";
// import rootReducer from "../reducers";

// export default function configureStore(initialState) {
//     return createStore(rootReducer, initialState);
// }

// To Configure REDUX with middleware
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import promise from 'redux-promise-middleware'
import thunk from "redux-thunk";

import createSagaMiddleware from 'redux-saga'
import rootSaga from '../actions/clickSaga'

const sagaMiddleware=createSagaMiddleware()

export default function configureStore(initialState) {
    const store=createStore(rootReducer, initialState,applyMiddleware(sagaMiddleware,promise));
    sagaMiddleware.run(rootSaga)
    return store
}
