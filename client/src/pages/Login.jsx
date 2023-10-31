import React, { useState }   from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch }       from "react-redux";
import { loginUser }         from "../redux/apiRequest";
import "../styles/login.css";

const Login = () => {
  const [getTenDangNhap, setTenDangNhap] = useState("");
  const [getMatKhau,     setMatKhau]     = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const newUser = {
      TenDangNhap: getTenDangNhap,
      MatKhau: getMatKhau,
    };
    loginUser(newUser, dispatch, navigate);

    const tenDangNhap = newUser.TenDangNhap;
    localStorage.setItem("tenDangNhap", tenDangNhap);
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <h2>ĐĂNG NHẬP</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <i className="ri-user-3-fill icon"></i>
            <input
              type="text"
              placeholder="Tên đăng nhập"
              name="TenDangNhap"
              onChange={(e) => setTenDangNhap(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <i className="ri-lock-fill icon"></i>
            <input
              type="password"
              placeholder="Mật khẩu"
              name="setMatKhau"
              onChange={(e) => setMatKhau(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            ĐĂNG NHẬP
          </button>

          <div className="link__regi">
            <p>
              Bạn chưa có tài khoản ?{" "}
              <Link to="/Home/register" className="link-to-register">
                ĐĂNG KÝ
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
