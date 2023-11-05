import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AoA            from "../pages/AoA";
import Home           from "../pages/Home";
import Cart           from "../pages/Cart";
import Login          from "../pages/Login";
import Adidas         from "../pages/Adidas";
import Register       from "../pages/Register";
import GeEditUser     from "../pages/EditUser";
import DetailUser     from "../pages/DetailUser";
import GetAllUser     from "../pages/QL_KhachHang";
import DetailProduct  from "../pages/DetailProduct";
import { products }   from "../assets/productdata/product";

import Gucci          from "../pages/Gucci";
import Mlb            from "../pages/Mlb";
import Nike           from "../pages/Nike";
import Checkout       from "../pages/Checkout";
import Donhang        from "../pages/Donhang";
import Lichsu         from "../pages/Lichsu";

import GetEditByUser       from "../pages/Caidat";
// import Tintuc      from "../pages/Tintuc";
// import Yeuthich    from "../pages/Yeuthich";
// import Lienhe      from "../pages/Lienhe";
// import Gioithieu    from "../pages/Gioithieu";


const Routers = () => {
  return (
    <Routes>
      <Route path="/"                    element={<Navigate to="/Home" />} />
      <Route path="/home"                element={<Home />} />
      <Route path="/Home/register"       element={<Register />} />
      <Route path="/Home/login"          element={<Login />} />
      <Route path="/User/GetAllUser"     element={<GetAllUser />} />
      <Route path="/User/EditUser/:id"   element={<GeEditUser />} />
      <Route path="/User/DetailUser/:id" element={<DetailUser />} />
      <Route path="/adidas"              element={<Adidas />} />
      <Route path="/cart"                element={<Cart />} />
      <Route path="/aoa"                 element={<AoA />} />
      <Route path="/User/Caidat/:id"     element={<GetEditByUser />} />
      <Route path="/User/DiaChi"     element={<GetEditByUser />} />
      <Route
        path="/detailproduct/:productId"
        element={<DetailProduct products={products} />}/>
    </Routes>
  );
};

export default Routers;
