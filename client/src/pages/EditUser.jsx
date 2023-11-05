import React, { useEffect, useState } from "react";
import { useDispatch, useSelector }   from "react-redux";
import { useParams }                  from "react-router-dom";
import { useNavigate }                from "react-router-dom";
import { editUser,  getAllUser }      from "../redux/apiRequest.js"; 

const GetEditUser = () => {

  // get id:
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // get value:
  const userList = useSelector((state) => state.users.users?.allUsers);
  const detailUser = userList?.find((user) => user._id === id);
  const user = useSelector((state) => state.user_status.login?.currentUser);

  const [getTenDangNhap, setTenDangNhap]  = useState(detailUser?.TenDangNhap);
  const [getSDT,         setSDT]          = useState(detailUser?.SDT);
  const [getHo_TenDem,   setHo_TenDem]    = useState(detailUser?.Ho_TenDem);
  const [getEmail,       setEmail]        = useState(detailUser?.Email);
  const [getTuoi,        setTuoi]         = useState(detailUser?.Tuoi);
  const [getGioiTinh,    setGioiTinh]     = useState(detailUser?.GioiTinh);
  //const [getTenND, setTenND] = useState(detailUser?.TenND);

  useEffect(() => {
    if (user == null){
      navigate("/home/err:ChuaDangNhap");
    }
  else if (user?.Admin === false){
    navigate("/home/err:koPhaiAdmin");
  }else if (!user?.accessToken){
  //console.log(">>> token access: ",user?.accessToken);
  navigate("/home/err:kocoToken");
  }}, []);

  const handleEditUser = async (e) => {
    e.preventDefault();
    if (detailUser) {
      const edit = {
        TenDangNhap: getTenDangNhap,
        // TenND: getTenND,
        SDT: getSDT,
        Ho_TenDem: getHo_TenDem,
        Email: getEmail,
        Tuoi: getTuoi,
        GioiTinh: getGioiTinh,
      };
      console.log("Dữ liệu được gửi đi:", edit);
        editUser(dispatch, edit, detailUser._id, navigate, user?.accessToken);
        getAllUser (user?.accessToken, dispatch);
        navigate("/User/DetailUser/" + detailUser._id);
    }
  };

  return (
    <main className="home-container">
      <div className="home-title">Thông Tin Tài Khoản</div>
      <div className="user-table">

        <form onSubmit={handleEditUser}>
          <label>
            Tài Khoản:
            <input
              type="text"
              name="TenDangNhap"
              value={getTenDangNhap}
              onChange={(e) => setTenDangNhap(e.target.value)}
            />
          </label>

          {/* <label>
          Tên Người Dùng:
            <input
              type="text"
              name="TenND"
              value={getTenND}
              onChange={(e) => setTenND(e.target.value)}
            />
          </label> */}
          
          <label>
          Họ, Tên Đệm:
            <input
              type="text"
              name="Ho_TenDem"
              value={getHo_TenDem}
              onChange={(e) => setHo_TenDem(e.target.value)}
            />
          </label>

          <label>
            Số Điện Thoại:
            <input
              type="number"
              name="SDT"
              value={getSDT}
              onChange={(e) => setSDT(e.target.value)}
            />
          </label>

          <label>
          Email:
            <input
              type="email"
              name="Email"
              value={getEmail}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label>
            Tuoi:
            <input
              type="number"
              name="Tuoi"
              value={getTuoi}
              onChange={(e) => setTuoi(e.target.value)}
            />
          </label>

          <label>
          Giới Tính:
            <input
              type="text"
              name="GioiTinh"
              value={getGioiTinh}
              onChange={(e) => setGioiTinh(e.target.value)}
            />
          </label>

          <button type="submit">Cập nhật</button>
        </form>

      </div>
    </main>
  );
};

export default GetEditUser;