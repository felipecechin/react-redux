import React from 'react'
import ReactDOM from 'react-dom'
import {applyMiddleware, createStore} from "redux";
import {Provider} from 'react-redux'
import promise from 'redux-promise'
import App from './main/app'
import rootReducer from "./main/reducers";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(promise)(createStore)(rootReducer, devTools)
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('app'))