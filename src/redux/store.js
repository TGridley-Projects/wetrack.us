import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from "redux-promise-middleware";
import rootReducer from './reducers';

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));