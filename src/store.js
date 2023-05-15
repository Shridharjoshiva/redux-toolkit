import { combineReducers,configureStore } from "@reduxjs/toolkit";
import ResourceSlices from "./reduxResource/ResourceSlice/ResourceSlices";
import userSlice from './reduxApplication/slice/actionReducer';


const rootReducer=combineReducers({
    users:userSlice,
    resource:ResourceSlices,
})
export const store=configureStore({
    reducer:rootReducer
});