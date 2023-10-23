import { createSlice } from "@reduxjs/toolkit";

// các chức năng liên quan tới phân quyền
// đăng nhập
// đăng ký
// đăng xuất


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
        // đăng nhập:
        loginStart: (state) =>{
            // bắt đầu đăng nhập loading...
            state.login.isFetching = true;
        },
        // login thành công:
        loginSuccess: (state,action) => {
            state.login.isFetching = false;// loading thành công
            state.login.currentUser = action.payload; // trả về thông tin người dùng
            state.login.error = false;
        },
        // login thất bại:
        loginFailed: (state) =>{
            state.login.isFetching = false; // loading thành công
            state.login.error = true; // ghi nhận lỗi
        },
        // đăng ký:
        registerStart: (state) =>{
            //...
            state.register.isFetching = true;
        },
        registerSuccess: (state) => {
            //...
            state.register.isFetching = false;
            state.register.error = false;
            state.register.success = true;
        },
        registerFailed: (state) =>{
            //...
            state.register.isFetching = false;
            state.register.error = true;
            state.register.success = false;
        },
        // // đăng xuất:
        // logOutSuccess: (state) => {
        //     //...
        //     state.login.isFetching = false;
        //     state.login.currentUser = null;
        //     state.login.error = false;
        // },
        // logOutFailed: (state) =>{
        //     //...
        //     state.login.isFetching = false;
        //     state.login.error = true;
        // },
        // logOutStart: (state) =>{
        //     //...
        //     state.login.isFetching = true;
        // },

     
    },
});

export const {
    loginStart,
    loginFailed,
    loginSuccess,
    registerStart,
    registerSuccess,
    registerFailed,
    // logOutStart,
    // logOutSuccess,
    // logOutFailed,
} = User_Status_Slice.actions;

export default User_Status_Slice.reducer;

