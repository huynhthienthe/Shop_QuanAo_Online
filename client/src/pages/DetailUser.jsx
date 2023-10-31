import React, { useEffect } from "react";
import {useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/quanlykhachhang.css";

const GetDetailUser = () => {

  // get id user:
  const { id } = useParams();

  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate("/User/EditUser/" + id);
  };

  // get value:
  const userList = useSelector((state) => state.users.users?.allUsers);
  const user = useSelector((state) => state.user_status.login?.currentUser);
  const detailUser = userList?.find((user) => user._id === id); // Tìm người dùng dựa trên id


  return (
    <main className="home-container">
      <div className="home-title">Thông Tin Tài Khoản</div>
      <div className="user-table">
        <table>
        <thead>
            <tr>
              <th colSpan={2}>Tài Khoản: {detailUser?.TenDangNhap}</th>
            </tr>
            <tr>
              <th >Họ Tên Đệm: {detailUser?.Ho_TenDem}</th>
              <th>Tuổi: {detailUser?.Tuoi}</th>
            </tr>
            <tr>
              <th>SĐT: {detailUser?.SDT}</th>
              <th>Email: {detailUser?.Email}</th>
            </tr>
            <tr>
              <th>Giới Tính: {detailUser?.GioiTinh}</th>
              <th>Quyền truy cập ở mức độ: {detailUser?.ChucVu}</th>
            </tr>
            <tr >
              <td colSpan={2}>
                  <button className="edit-button" onClick={() => handleEdit(detailUser?._id)}>Cập Nhật</button>
              </td>
            </tr>
          </thead>
        </table>
      </div>
    </main>
  );
};

export default GetDetailUser;