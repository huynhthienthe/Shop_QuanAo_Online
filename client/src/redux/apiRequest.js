import axios from "axios";
import {
  //clearUserList,
  loginFailed,
  loginStart,
  loginSuccess,
  registerFailed,
  registerStart,
  registerSuccess,
  logOutStart,
  logOutSuccess,
  logOutFailed,
} from "./User_Status_Slice";

import { 
  getUsersFailed,
  getUsersStart,
  getUsersSuccess,
  deleteUserStart,
  deleteUsersSuccess,
  deleteUserFailed,
  geteditUserStart,
  geteditUserSuccess,
  geteditUserFailed,
} from "./UserSlice";

import { 
  getRolesStart,
  getRolesSuccess,
  getRolesFailed,
} from "./RoleSlice";

import {
  getAddressStart,
  getAddressSuccess,
  getAddressFailed,
  createAddressStart,
  createAddressSuccess,
  createAddressFailed,
  geteditAddressStart,
  geteditAddressSuccess,
  geteditAddressFailed,
  deleteAddressStart,
  deleteAddressSuccess,
  deleteAddressFailed,
} from "./addressSlice";

import { 
  getCityStart,
  getCitySuccess,
  getCityFailed,
} from "./CitySlice";


// localhost setting port:
const axiosInstance = axios.create({
  baseURL: "http://[::1]:8080" || "http://[::1]:3000",
});

//
export const getThanhPho = async (dispatch, accessToken) => {
  dispatch(getCityStart());
  try {
    const res = await axiosInstance.get("/ThanhPho/DSThanhPho/", {
      headers: { token: `Gacon ${accessToken}` },
    });
    dispatch(getCitySuccess(res.data));
  } catch (err) {
    dispatch(getCityFailed(err.response.data));
  }
};

//
export const deleteAddress = async (id, dispatch, token) => {
  console.log("delete");
  dispatch(deleteAddressStart());
  try {
    console.log(id);
    const res = await axiosInstance.delete("/User/deleteDiaChi/" + id, {
      headers: { token: `Gacon ${token}` },
    });
    dispatch(deleteAddressSuccess(res.data));
  } catch (err) {
    dispatch(deleteAddressFailed(err.response.data));
  }
};

//
export const updateAddress = async (dispatch, updated, id_address, id_user, accessToken) => {
  dispatch(geteditAddressStart());
  try {
    const res = await axiosInstance.post(`/User/EditDiaChi/${id_address}`, updated, {
      headers: { token: `Gacon ${accessToken}` }
    });
    dispatch(geteditAddressSuccess(res.data));
    getAllAddresses(dispatch, id_user, accessToken);
  } catch (err) {
    dispatch(geteditAddressFailed(err.response.data));
  }
};

//
export const createNewAddress = async (dispatch, newAddress, accessToken) => {
  dispatch(createAddressStart());
  try {
    const res = await axiosInstance.post("/User/DiaChi", newAddress);
    dispatch(createAddressSuccess(res.data));
    getAllAddresses(dispatch, newAddress.id_ND, accessToken);
  } catch (err) {
    dispatch(createAddressFailed());
  }
};

//
export const getAllAddresses = async (dispatch, id_User, accessToken) => {
  dispatch(getAddressStart());
  try {
    const res = await axiosInstance.get(`/User/DSDiaChi/${id_User}`, {
      headers: { token: `Gacon ${accessToken}` },
    });
    dispatch(getAddressSuccess(res.data));
  } catch (err) {
    dispatch(getAddressFailed(err.response.data));
  }
};

//
export const editUser = async (dispatch, edit, id_User, navigate, accessToken) => {
    dispatch(geteditUserStart());
    try {
      const res = await axiosInstance.post(`/User/EditUser/${id_User}`, edit, {
        headers: { token: `Gacon ${accessToken}` }
      });
      dispatch(geteditUserSuccess(res.data));
      getAllUser(accessToken, dispatch);
      navigate("/User/DetailUser/" + id_User);
    } catch (err) {
      dispatch(geteditUserFailed(err.response.data));
    }
};

export const editByUser = async (dispatch, edit, id_User, navigate, accessToken) => {
  dispatch(geteditUserStart());
  try {
    const res = await axiosInstance.post(`/User/Caidat/${id_User}`, edit, {
      headers: { token: `Gacon ${accessToken}` }
    });
    dispatch(geteditUserSuccess(res.data));
    getAllUser(accessToken, dispatch);
    navigate("/User/DetailUser/" + id_User);
  } catch (err) {
    dispatch(geteditUserFailed(err.response.data));
  }
};

export const logOut = async (dispatch, navigate, id, accessToken) => {
    dispatch(logOutStart());
    try {
      //console.log(">>> accessToken ",accessToken);
      await axiosInstance.post("/Home/logout", id, {
        headers: {token: `Gacon ${accessToken}`},
      });
      dispatch(logOutSuccess());
      navigate("/Home/Login");
    } catch (err) {
      dispatch(logOutFailed());
    }
};

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

export const getAllRole = async (dispatch) => {
    dispatch(getRolesStart());
    try {
      const res = await axiosInstance.get("/Role/GetAllRole");
      //console.log(">>>>> dữ liệu Role: ",res.data);
      dispatch(getRolesSuccess(res.data));
     
    } catch (err) {
      dispatch(getRolesFailed(err)); // Truyền thông tin lỗi vào action payload
    }
};

export const deleteUser = async (id, dispatch, token) => {
      console.log("delete");
      dispatch(deleteUserStart());
      try {
        console.log(id);
        const res = await axiosInstance.delete("/User/delete/" + id, {
          headers: { token: `Gacon ${token}` },
        });
        dispatch(deleteUsersSuccess(res.data));
      } catch (err) {
        dispatch(deleteUserFailed(err.response.data));
      }
};

export const loginUser = async (user, dispatch, navigate) => {
  // user = thông tin user
  // dispatch = newUser ở page
  // navigate = đường link
    dispatch(loginStart());
    try {
      const res = await axiosInstance.post("/Home/Login", user);
      // đăng nhập thành công 
      dispatch(loginSuccess(res.data));
      //console.log(">>> đây là res.data của bạn: ",res.data);
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

// bản cũ
// export const getDetailUser = async (id, accessToken, dispatch) => {
//   dispatch(getDetailUserStart());
//   try {
//     const res = await axiosInstance.get("/User/DetailUser/" + id,{
//       headers: {token: `Gacon ${accessToken}`},
//     });
//     dispatch(getDetailUserSuccess(res.data));
//   } 
//   catch (err) {
//     dispatch(getDetailUserFailed());
//   }
// };


// // bản cũ
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


// export const editUser = async (edit, id, dispatch, navigate) => {
//   console.log("edit user");
//   dispatch(editUserStart());
//   try {
//     console.log(id);
//     const res = await axiosInstance.post("/User/EditUser/" + id, edit);
//     dispatch(editUserSuccess(res.data));
//     navigate("/home/login");
//   } catch (err) {
//     dispatch(editUserFailed());
//   }
// };

// export const editUser = async (dispatch, edit, id_User, navigate, accessToken) => {
//   dispatch(geteditUserStart());
//   try {
//     const res = await axiosInstance.post("/User/EditUser/${id_User}", edit, {
//       headers: {token: `Gacon ${accessToken}`},
//     });
//     dispatch(geteditUserSuccess());
//   } 
//   catch (err) {
//     dispatch(geteditUserFailed(err.response.data));
//   }
// };