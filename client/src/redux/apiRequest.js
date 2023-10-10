import axios from "axios";
import {
  loginFailed,
  loginStart,
  loginSuccess,
  registerFailed,
  registerStart,
  registerSuccess,
} from "./User_Status_Slice";

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
    console.log(">>> đây là res.data của bạn: ",user);
    navigate("/home");
  } catch (err) {
    dispatch(loginFailed());
  }
};

export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    await axiosInstance.post("/Home/Register", user);
    dispatch(registerSuccess());
    navigate("/home/Login");
  } catch (err) {
    dispatch(registerFailed());
  }
};
