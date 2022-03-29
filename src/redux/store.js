import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// reducers
import login from './reducers/login';
import home from './reducers/home';
import upload from './reducers/upload';
// rootReducer
const rootReducer = combineReducers({
  login,
  home,
  upload,
});
// store (main storage)
const store = configureStore({
  reducer: rootReducer,
});
export default store;
