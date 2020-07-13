import businessReducer from './Business';
import categoryReducer from './Category';
import productsReducer from './Products';
import recieptsReducer from './Reciepts';
import reviewsReducer from './Reviews';
import userReducer from './user' ;
import {combineReducers} from 'redux';

const allReducers= combineReducers({
    businessReducer,
    categoryReducer,
    productsReducer,
    reviewsReducer,
    userReducer,
    recieptsReducer,
});