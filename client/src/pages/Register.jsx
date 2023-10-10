import React, { useState } from "react";
import "../styles/register.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../redux/apiRequest";
//import fakeUsers from "../assets/fake-data/account";

// gacon start
const Register = () => {

  const [getTenDangNhap, setTenDangNhap] = useState("");
  const [getMatKhau,     setMatKhau]     = useState("");
  const [getTuoi,        setTuoi]        = useState("");
  const [getSDT,         setSDT]         = useState("");
  const [getHo_TenDem,   setHo_TenDem]   = useState("");
  const [getTen_ND,      setTen_ND]      = useState("");
  const [getEmail,       setEmail]       = useState("");
  const [getGioiTinh,    setGioiTinh]    = useState("");
  //const [ChucVu,      setChucVu]      = userState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleRegister= (e)=>{
    // fix: reload_page
    e.preventDefault();
    const newUser = {
    TenDangNhap: getTenDangNhap,
    MatKhau:     getMatKhau,
    Tuoi:        getTuoi,
    SDT:         getSDT,
    Ho_TenDem:   getHo_TenDem,
    Ten_ND:      getTen_ND,
    Email:       getEmail,
    GioiTinh:    getGioiTinh,
  };
  // call api
  console.log(">>> user đăng ký: ", newUser);
  registerUser(newUser,dispatch,navigate);

  //  todo code của kim phụng: //

  // const [message, setMessage] = useState(null);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  
  //   // Kiểm tra xem formData có trùng với bất kỳ người dùng nào trong danh sách fakeUsers không
  //   const isRegistered = fakeUsers.some((user) => {
  //     return (
  //       user.email === formData.email && user.password === formData.password
  //     );
  //   });
  
  //   if (isRegistered) {
  //     setMessage("Đăng ký thành công !");
  //   } else {
  //     setMessage("Đăng ký thất bại. Kiểm tra lại thông tin đăng ký.");
  //   }
  // };
}

  return (
    <div className="register-container">
      <h2>ĐĂNG KÝ</h2>
      <form onSubmit={handleRegister}>


         <div className="form-group">
          <label htmlFor="firstName">Tên Đăng Nhập: </label>
          <input
            type="text"
            placeholder="Tên Đăng Nhập của bạn !"
            //id="firstName"
            //name="firstName"
            //value={formData.TenDangNhap}
            onChange={(e)=>setTenDangNhap(e.target.value)}
            required
          />
        </div>
       

        <div className="form-group">
          <label htmlFor="firstName">Mật Khẩu: </label>
          <input
            type="password"
            placeholder="Mật Khẩu của bạn !"
            //id="firstName"
            //name="firstName"
            // value={formData.MatKhau}
            onChange={(e)=>setMatKhau(e.target.value)}
            required
          />
        </div>


        <div className="form-group">
          <label htmlFor="firstName">Tuổi: </label>
          <input
            type="number"
            placeholder="Tuổi của bạn !"
            //id="firstName"
            //name="firstName"
            //value={formData.Tuoi}
            onChange={(e)=>setTuoi(e.target.value)}
            required
          />
        </div>
        

        <div className="form-group">
          <label htmlFor="firstName">SĐT: </label>
          <input
            type="number"
            placeholder="Số Điện Thoại của bạn !"
            //id="firstName"
            //name="firstName"
            //value={formData.SDT}
            onChange={(e)=>setSDT(e.target.value)}
            required
          />
        </div>


        <div className="form-group">
          <label htmlFor="firstName">Họ & Tên Đệm: </label>
          <input
            type="text"
            placeholder="Họ và Tên Đệm của bạn !"
            //id="firstName"
            //name="firstName"
            //value={formData.Ho_TenDem}
            onChange={(e)=>setHo_TenDem(e.target.value)}
            required
          />
        </div>


        <div className="form-group">
          <label htmlFor="firstName">Tên: </label>
          <input
            type="text"
            placeholder="Tên của bạn !"
            //id="firstName"
            //name="firstName"
            //value={formData.Ten_ND}
            onChange={(e)=>setTen_ND(e.target.value)}
            required
          />
        </div>
        

        <div className="form-group">
          <label htmlFor="firstName">Email: </label>
          <input
            type="email"
            placeholder="Gmail của bạn !"
            //id="firstName"
            //name="firstName"
            //value={formData.Email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
        </div>


        <div className="form-group">
          <label htmlFor="firstName">Giới Tính: </label>
          <input
            type="text"
            placeholder="Giới Tính của bạn !"
            //id="firstName"
            //name="firstName"
            //value={formData.GioiTinh}
            onChange={(e)=>setGioiTinh(e.target.value)}
            required
          />
        </div>
        

        {/* <div className="form-group">
          <label htmlFor="firstName">Chức Vụ: </label>
          <input
            type="text"
            placeholder="Tên của bạn !"
            //id="firstName"
            //name="firstName"
            //value={formData.firstName}
            onChange={(e)=>setChucVu(e.target.value)}
            required
          />
        </div> */}
        
        <button type="submit">ĐĂNG KÝ</button>
      </form>

      {/* Hiển thị thông báo chính giữa màn hình */}
      {/* {message && <div className="message">{message}</div>} */}
    </div>
  );
};
export default Register;
//  gacon end




