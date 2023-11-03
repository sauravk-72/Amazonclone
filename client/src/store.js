import { applyMiddleware } from "redux";
//import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import rootreducers from "./components/redux/reducers/Main";
import {legacy_createStore as createStore} from 'redux'

const middleware = [thunk];

const store = createStore(
    rootreducers,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;