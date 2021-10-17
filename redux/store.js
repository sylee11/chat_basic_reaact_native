import { combineReducers, createStore } from "@reduxjs/toolkit";
import reducer from './reducer';

const newRootReducer = combineReducers({
  testReducer: reducer,
});

const store = createStore(newRootReducer);

export default store;
