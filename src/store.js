
import { combineReducers, createStore } from 'redux';
import reducer from './reducer'; 
import shoeReducer from './shoeReducer'; 
import cartReducer from './cartReducer';

export const rootReducer = combineReducers({
    reducer,
    shoeReducer,
    cartReducer
});

const store = createStore(
    rootReducer,
)

export default store;