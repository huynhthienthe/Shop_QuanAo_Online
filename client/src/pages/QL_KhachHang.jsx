import React, { useEffect}          from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate }              from "react-router-dom";
import { deleteUser, getAllUser }   from "../redux/apiRequest.js";
import "../styles/quanlykhachhang.css";

const GetAllUser = () => {

  // value:
  const userList = useSelector((state) => state.users.users?.allUsers);
  const user = useSelector((state) => state.user_status.login?.currentUser);
  const deleteUserFailedState = useSelector((state) => state.Users_Reducer?.deleteUserFailed);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user == null || user?.Admin == false) {
      navigate("/home");
    }
    if (user?.accessToken) {
      console.log(">>> user accessToken ", user?.accessToken)
      getAllUser(user?.accessToken, dispatch);
    }
  }, []);

  const handleDelete = (id) => {
    deleteUser(id, dispatch, user?.accessToken);
  };

  const handleDetail = (id) => {
    navigate("/User/DetailUser/"+id);
  };

  if (deleteUserFailedState) {
    const error = deleteUserFailedState.error;
    // Thực hiện xử lý thông tin lỗi, ví dụ:
    console.log("\nkhông thể xóa người dùng:", error);
  };

  return (
    <main className="home-container">
      <div className="home-title">Danh sách người dùng</div>
      <div className="home-role">{/* Your role: Admin/User */}</div>
      <div className="user-table">
        <table>
          <thead>
            <tr>
              <th>Tên người dùng</th>
              <th>Email</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {userList?.map((user) => (
              <tr key={user.id}>
                <td>{user.TenDangNhap}</td>
                <td>{user.Email}</td>
                <td>
                  <button className="edit-button" onClick={() => handleDetail(user._id)}>Chi Tiết</button>
                  <button className="delete-button" onClick={() => handleDelete(user._id)}> Xóa </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <div className="errorMsg">{msg}</div> */}
    </main>
  );
};

export default GetAllUser;
