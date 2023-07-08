import { combineReducers } from '@reduxjs/toolkit';
import navigationReducer from './features/NavigationSlice.js';


export const rootReducer = combineReducers ({
    navigation: navigationReducer,
});
