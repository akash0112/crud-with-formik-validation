import { combineReducers } from "@reduxjs/toolkit";
import formReducer from "./formreducer";


const rootReducer = combineReducers({
    users : formReducer
})

export default rootReducer;