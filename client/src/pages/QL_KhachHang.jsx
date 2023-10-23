import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut,getAllUser } from "../redux/apiRequest.js";
//import jwt_decode from "jwt-decode";
//import { createAxios } from "../../createInstance";
//import axios from "axios";


//import { loginSuccess } from "../redux/User_Status_Slice.js";

const GetAllUser = () => {

    // get Token from store
    const user = useSelector((state) => state.user_status.login?.currentUser);
    const userList = useSelector((state) => state.users.users?.allUsers);
//const msg = useSelector((state) => state.users?.msg);
const dispatch = useDispatch();
const navigate = useNavigate();

useEffect(() => {
        if (user == null || user?.Admin == false) { navigate("/home/login");}
        if (user?.accessToken){
          getAllUser(user?.accessToken, dispatch);
        }
     
    }, []);

  return (
    <main className="home-container">
      <div className="home-title">User List</div>
      <div className="home-role">
        {/* {`Your role: ${user?.admin ? `Admin` : `User`}`} */}
      </div>
      <div className="home-userlist">
        {userList?.map((user) => {
          return (
            <div className="user-container">
              <div className="home-user">{user.TenDangNhap}</div>
              <div
                className="delete-user"
                //onClick={() => handleDelete(user._id)}
              >
                {" "}
                Delete{" "}
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="errorMsg">{msg}</div> */}
    </main>
  );
};




export default GetAllUser;
