import { createSlice } from "@reduxjs/toolkit";

const RoleSlice = createSlice({
    name: "roles",
    initialState:{
        Roles: {
            allRole:null,
            isFetching:false,
            error:false
        }, 
    },
    reducers:{
        getRolesStart: (state)=>{
            state.Roles.isFetching = true;
        },
        getRolesSuccess: (state,action) =>{
            state.Roles.isFetching = false;
            state.Roles.allRole = action.payload;
        },
        getRolesFailed: (state) => {
            state.Roles.isFetching = false;
            state.Roles.error = true;
        },
    },
});

export const {
    getRolesStart,
    getRolesSuccess,
    getRolesFailed,
} = RoleSlice.actions;

export default RoleSlice.reducer;