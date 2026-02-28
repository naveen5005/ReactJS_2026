import {legacy_createStore as createStore, combineReducers} from 'redux';
import { reducerFunction } from './reducer';
import { productReducer } from './productReducer';

const rootReducers = combineReducers({
    userDetails : reducerFunction,
    productDetails: productReducer,
})
export const store = createStore(rootReducers); 