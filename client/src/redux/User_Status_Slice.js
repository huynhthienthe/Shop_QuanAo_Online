import { createSlice } from "@reduxjs/toolkit";

const User_Status_Slice = createSlice({
    name: "User_Status",
    initialState:{
        login:{
            // người dùng
            currentUser:null,
            // login
            isFetching: false,
            error:false
        },
        register:{
            isFetching: false,
            error:false,
            success:false
        },
    },

    reducers:{
        loginStart: (state) =>{
            // bắt đầu đăng nhập loading...
            state.login.isFetching = true;
        },
        // login thành công:
        loginSuccess: (state,action) => {
            // loading thành công
            state.login.isFetching = false;
            // trả về thông tin người dùng
            state.login.currentUser = action.payload;
            state.login.error = false;
        },
        // login thất bại:
        loginFailed: (state) =>{
             // loading thành công
            state.login.isFetching = false;
             // ghi nhận lỗi
            state.login.error = true;
        },
        registerStart: (state) =>{
            state.register.isFetching = true;
        },
        registerSuccess: (state) => {
            state.register.isFetching = false;
            state.register.error = false;
            state.register.success = true;
        },
        registerFailed: (state) =>{
            state.register.isFetching = false;
            state.register.error = true;
            state.register.success = false;
        },


     
    },
});

export const {
    loginStart,
    loginFailed,
    loginSuccess,
    registerStart,
    registerSuccess,
    registerFailed,
} = User_Status_Slice.actions;

export default User_Status_Slice.reducer;

