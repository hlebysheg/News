import {combineReducers, createStore, applyMiddleware} from "redux";
import {newsReducer} from "./news-reducer.js";
import {aboutReducer} from "./about-reducer";
import {authReducer} from "./auth-reducer";
import { reducer as formReducer } from 'redux-form'
import thunk from "redux-thunk";

const reducers = combineReducers({
    news : newsReducer,
    about: aboutReducer,
    auth: authReducer,
    form: formReducer,
})

let store = createStore(reducers, applyMiddleware(thunk));
//TEST ONLI!!!!!!!!!!!!!!!
window.store = store;
export default  store;