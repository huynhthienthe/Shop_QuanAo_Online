import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";
//import fakeUsers from "../assets/fake-data/account";
//import { Profile } from "../lib/curent-profile";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/apiRequest";
//import { Container } from "reactstrap";

const Login = () => {

  const [getTenDangNhap, setTenDangNhap] = useState("");
  const [getMatKhau,         setMatKhau] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  
  const handleLogin = (e) => {
    // fix: reload_page
    e.preventDefault();

    const newUser = {
    TenDangNhap: getTenDangNhap,
    MatKhau:     getMatKhau,
    };
    console.log(">>> user: ",newUser);
    loginUser(newUser, dispatch, navigate);

    const tenDangNhap = newUser.TenDangNhap;
    localStorage.setItem("tenDangNhap", tenDangNhap);
  };

  // code: kim phụng
  
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { email, password } = formData;
  //   const user = fakeUsers.find(
  //     (user) => user.email === email && user.password === password
  //   );

    // if (user) {
    //   navigate("/home");
    //   Profile.loggedIn = true;
    // } else {
    //   alert("Đăng nhập thất bại. Kiểm tra lại thông tin đăng nhập.");
    // }
  

  return (
    <div className="login-container">
      <div className="icon__login">
        <i class="ri-ghost-2-fill"></i>
      </div>
      <div className="form-container">
        <h2>ĐĂNG NHẬP</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Tên Đăng Nhập:</label>
            <input
              type="text"
              name="TenDangNhap"
              //value={formData.email}
              onChange={(e) => setTenDangNhap(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Mật khẩu:</label>
            <input
              type="password"
              name="setMatKhau"
              //value={formData.password}
              onChange={(e) => setMatKhau(e.target.value)}
              required
            />
          </div>
          <button type="submit">ĐĂNG NHẬP</button>
          <p>
            Bạn chưa có tài khoản ?{" "}
            <Link to="/Home/register" className="link-to-register">
              ĐĂNG KÝ
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
