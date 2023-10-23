import axios from "axios";
import {
 // clearUserList,
  loginFailed,
  loginStart,
  loginSuccess,
  registerFailed,
  registerStart,
  registerSuccess,
  // logOutStart,
  // logOutSuccess,
  // logOutFailed,
} from "./User_Status_Slice";
import { getUsersFailed, getUsersStart, getUsersSuccess } from "./UserSlice";

// localhost setting port:
const axiosInstance = axios.create({
    baseURL: "http://[::1]:8080" || "http://[::1]:3000",
  });
 

export const loginUser = async (user, dispatch, navigate) => {
// user = thông tin user
// dispatch = newUser ở page
// navigate = đường link
  dispatch(loginStart());
  try {
    const res = await axiosInstance.post("/Home/Login", user);
    // đăng nhập thành công 
    dispatch(loginSuccess(res.data));
    console.log(">>> đây là res.data của bạn: ",res.data);
    navigate("/Home");
    //navigate("/User/GetAllUser");
  } catch (err) {
    dispatch(loginFailed());
  }
};

export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    await axiosInstance.post("/home/Register", user);
    dispatch(registerSuccess());
    navigate("/home");
  } catch (err) {
    dispatch(registerFailed());
  }
};

// export const logOut = async (dispatch, navigate) => {
//   dispatch(logOutStart());
//   try {
//     await axiosInstance.post("/Home/logout");
//     dispatch(logOutSuccess());
//     //dispatch(clearUserList());
//     navigate("/home/Login");
//   } catch (err) {
//     dispatch(logOutFailed());
//   }
// };

export const getAllUser = async (accessToken, dispatch) => {
  dispatch(getUsersStart());
  try {
    const res = await axiosInstance.get("/User/GetAllUser",{
      headers: {token: `Gacon ${accessToken}`},
    });
    dispatch(getUsersSuccess(res.data));
  } 
  catch (err) {
    dispatch(getUsersFailed());
  }
};
