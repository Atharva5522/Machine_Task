import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./AuthService";

const authSlice = createSlice({
    name : "auth",
    initialState : {
        user : null,
        isLoading : false,
        isError : false,
        isSuccess : false,
        message : ""
    },

    reducers : {},

    extraReducers : (builder) => {
        builder.addCase(registerUser.pending, (state,action) => {
            state.isLoading = true,
            state.isError = false,
            state.isSuccess = false,
            state.message = ''
        }).addCase(registerUser.rejected, (state,action) => {
            state.isLoading = false,
            state.isError = true,
            state.isSuccess = false,
            state.message = action.payload
        }).addCase(registerUser.fulfilled, (state,action) => {
            state.isLoading = false,
            state.isError = false,
            state.isSuccess = true,
            state.user = action.payload,
            state.message = ""
        }).addCase(loginUser.pending , (state,action) => {
            state.isLoading = true,
            state.isError = false,
            state.isSuccess = false,
            state.message = ""
        }).addCase(loginUser.rejected , (state,action) => {
            state.isLoading = false,
            state.isError = true,
            state.isSuccess = false,
            state.message = action.payload
        }).addCase(loginUser.fulfilled, (state,action) => {
            state.isLoading = false,
            state.isError = false,
            state.isSuccess = true,
            state.user = action.payload
        })
    }

})

export default authSlice.reducer

// Register User
export const registerUser = createAsyncThunk("AUTH/REGISTER", async(FormData) =>{
    try {
        return await authService.register(FormData)
    } catch (error) {
        console.log(error)
    };
})

// login User
export const loginUser = createAsyncThunk("AUTH/LOGIN", async(login) => {
    try {
        return authService.signin(login)
    } catch (error) {
        console.log(error)
    }
})