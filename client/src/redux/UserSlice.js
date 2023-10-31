import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "Users",
    initialState: {
        users: {
            allUsers: null,
            isFetching: false,
            error: false
        },
    },
    reducers: {
        getUsersStart: (state) => {
            state.users.isFetching = true;
        },
        getUsersSuccess: (state, action) => {
            state.users.isFetching = false;
            state.users.allUsers = action.payload;
            state.users.error = false;
        },
        getUsersFailed: (state) => {
            state.users.isFetching = false;
            state.users.error = true;
        },
        deleteUserStart: (state) => {
            state.users.isFetching = true;
        },
        deleteUsersSuccess: (state, action) => {
            state.users.isFetching = false;
            state.msg = action.payload;
        },
        deleteUserFailed: (state, action) => {
            state.users.isFetching = false;
            state.users.error = true;
            state.msg = action.payload;
        },
        geteditUserStart: (state) => {
            state.users.isFetching = true;
        },
        geteditUserSuccess: (state, action) => {
            state.users.isFetching = false;
            state.msg = action.payload;
            state.users.allUsers = action.payload;
        },
        geteditUserFailed: (state, action) => {
            state.users.isFetching = false;
            state.users.error = true;
            state.msg = action.payload;
        },
    },
});

export const {
    getUsersStart,
    getUsersSuccess,
    getUsersFailed,
    deleteUserStart,
    deleteUsersSuccess,
    deleteUserFailed,
    geteditUserStart,
    geteditUserSuccess,
    geteditUserFailed,
} = userSlice.actions;

export default userSlice.reducer;