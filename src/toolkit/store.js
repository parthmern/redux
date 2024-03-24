import { combineReducers, createReducer } from "@reduxjs/toolkit";
import profileSlice from "./slices/profileSlice";
import authSlice from "./slices/authSlice";
import counterSlice from "./slices/counterSlice";

const rootReducer = combineReducers({
    profile : profileSlice ,
    auth : authSlice ,
    counter : counterSlice, 
})

export default rootReducer ;
