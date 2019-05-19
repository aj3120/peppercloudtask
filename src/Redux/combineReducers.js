import {combineReducers} from 'redux'
import TestReducer from './Reducers/TestReducer';
import SearchReducer from './Reducers/SearchReducer'
import { connectRouter } from 'connected-react-router';

export default (history)=>combineReducers({
    router:connectRouter(history),
    testReducer:TestReducer,
    searchReducer:SearchReducer
})