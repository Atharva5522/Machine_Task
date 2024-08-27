import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slice/AuthSlice"
import editReducer from "../Slice/EditSlice"

const store = configureStore({

    reducer : {
        auth : authReducer,
        edit : editReducer
        
    }
})

export default store