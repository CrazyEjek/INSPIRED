import { combineReducers } from '@reduxjs/toolkit';
import navigationReducer from './features/navigationSlice.js';
import colorsReducer from './features/colorsSlice.js';
import goodsReducer from './features/goodsSlice.js';
import productReducer from './features/productSlice.js';

export const rootReducer = combineReducers ({
    navigation: navigationReducer,
    color: colorsReducer,
    goods: goodsReducer,
    product: productReducer,
});
