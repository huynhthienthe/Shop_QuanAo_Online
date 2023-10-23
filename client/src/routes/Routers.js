import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
// import Adidas from "../pages/Adidas";
// import Caidat from "../pages/Caidat";
// import Checkout from "../pages/Checkout";
// import Donhang from "../pages/Donhang";
// import Lichsu from "../pages/Lichsu";
import Login from "../pages/Login";
// import Gucci from "../pages/Gucci";
// import Mlb from "../pages/Mlb";
// import Nike from "../pages/Nike";
import Register from "../pages/Register";
// import Tintuc from "../pages/Tintuc";
// import Yeuthich from "../pages/Yeuthich";
// import Lienhe from "../pages/Lienhe";
// import Gioithieu from "../pages/Gioithieu";

import GetAllUser from "../pages/QL_KhachHang";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/Home/register" element={<Register />} />
      <Route path="/Home/login" element={<Login />} />
      <Route path="/User/GetAllUser" element={<GetAllUser />} /> 
      <Route path="/User/CT_NguoiDung_Action" element={<GetAllUser />} /> 
    </Routes>
  );
};

export default Routers;
