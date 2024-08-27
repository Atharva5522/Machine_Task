import { createSlice } from "@reduxjs/toolkit";

const editSlice = createSlice({
    name : "edit",
    initialState : {
        edit : [{
            name : "",
            email : "",
            password : ""
        }]
    },
    edit : {
            feedback : {},
            isEdit : false,
        },
    reducers : {
        // Add

        add : (state,action) => {
            return {
                ...state,
                edit : [action.payload, ...state.edit]
            }
        },

        // Delete

        remove : (state,action) => {
            return {
                ...state,
                edit : state.edit.filter(item => item.id !== action.payload)
            }
        },

        edit : (state,action) => {
            return {
                ...state,
                edit : {edit:action.payload , isEdit:true}
            };
    

    
    }
}
});

export const {add,remove,edit} = editSlice.actions

export default editSlice.reducer