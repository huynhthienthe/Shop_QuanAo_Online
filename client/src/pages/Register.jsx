import React, { useState } from "react";
import { useDispatch }     from "react-redux";
import { useNavigate }     from "react-router-dom";
import { registerUser }    from "../redux/apiRequest";
import "../styles/register.css";

const Register = () => {
  const [getTenDangNhap, setTenDangNhap]   = useState("");
  const [getMatKhau,     setMatKhau]       = useState("");
  const [getSDT,         setSDT]           = useState("");
  const [getHo_TenDem,   setHo_TenDem]     = useState("");
  const [getTen_ND,      setTen_ND]        = useState("");
  const [getEmail,       setEmail]         = useState("");
  const [usernameError, setUsernameError]  = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (getTenDangNhap.length < 6 || getTenDangNhap.length > 10) {
      setUsernameError("Tên đăng nhập phải có từ 6 đến 10 ký tự.");
    } else {
      setUsernameError("");
      const newUser = {
        TenDangNhap: getTenDangNhap,
        MatKhau: getMatKhau,
        SDT: getSDT,
        Ho_TenDem: getHo_TenDem,
        Ten_ND: getTen_ND,
        Email: getEmail,
      };
      console.log(">>> user đăng ký: ", newUser);
      registerUser(newUser, dispatch, navigate);
  }};

  return (
    <div className="register-container2">
      <h2>ĐĂNG KÝ</h2>
      <form onSubmit={handleRegister} className="form-container2">
        {/* Hàng 2: Input */}
        <div className="form-row">
          <div className="form-column2">
            <div className="form-group2">
              <label2 htmlFor="username">
                <i class="ri-user-3-fill"></i>
              </label2>
              <input
                type="text"
                placeholder="Tên đăng nhập"
                onChange={(e) => setTenDangNhap(e.target.value)}
                required
              />
              {usernameError && (
                <div className="error-message2">{usernameError}</div>
              )}
            </div>

            <div className="form-group2">
              <label2 htmlFor="password">
                <i class="ri-lock-fill"></i>
              </label2>
              <input
                type="password"
                placeholder="Mật khẩu"
                onChange={(e) => setMatKhau(e.target.value)}
                required
              />
            </div>

            <div className="form-group2">
              <label2 htmlFor="sdt">
                <i class="ri-phone-fill"></i>
              </label2>
              <input
                type="number"
                placeholder="Số điện thoại"
                onChange={(e) => setSDT(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-column2">
            <div className="form-group2">
              <label2 htmlFor="hoten">
                <i class="ri-user-3-fill"></i>
              </label2>
              <input
                type="text"
                placeholder="Họ"
                onChange={(e) => setHo_TenDem(e.target.value)}
                required
              />
            </div>

            <div className="form-group2">
              <label2 htmlFor="firstName">
                <i class="ri-user-3-fill"></i>
              </label2>
              <input
                type="text"
                placeholder="Tên"
                onChange={(e) => setTen_ND(e.target.value)}
                required
              />
            </div>

            <div className="form-group2">
              <label2 htmlFor="firstName">
                <i class="ri-mail-fill"></i>
              </label2>
              <input
                type="email"
                placeholder="Gmail"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
        </div>

        {/* Hàng 3: Nút Đăng ký */}
        <div className="form-row">
          <div className="form-group3">
            <button type="submit">ĐĂNG KÝ</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Register;
