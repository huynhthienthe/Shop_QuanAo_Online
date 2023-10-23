import React, { useState } from "react";
import "../../src/styles/caidat.css";

const CaiDat = () => {
  // const [users, setUsers] = useState([
  //   { id: 1, username: "user1", password: "pass1", role: "admin" },
  //   { id: 2, username: "user2", password: "pass2", role: "user" },
  //   // Thêm các dòng dữ liệu khác ở đây
  // ]);

  // const [editUserId, setEditUserId] = useState(null); // Sử dụng để xác định người dùng đang được chỉnh sửa
  // const [editedUser, setEditedUser] = useState(null); // Lưu trạng thái người dùng đang chỉnh sửa
  // const [isAddingUser, setIsAddingUser] = useState(false); // Trạng thái hiển thị form thêm người dùng

  // // Xử lý xóa người dùng
  // const handleDeleteUser = (id) => {
  //   const updatedUsers = users.filter((user) => user.id !== id);
  //   setUsers(updatedUsers);
  // };

  // // Xử lý chỉnh sửa người dùng
  // const handleEditUser = (id) => {
  //   setEditUserId(id);
  //   const userToEdit = users.find((user) => user.id === id);
  //   setEditedUser({ ...userToEdit });
  // };

  // // Hủy chỉnh sửa
  // const handleCancelEdit = () => {
  //   setEditUserId(null);
  //   setEditedUser(null);
  // };

  // // Lưu thay đổi khi người dùng chỉnh sửa xong
  // const handleSaveEdit = () => {
  //   // Cập nhật thông tin người dùng và kết thúc chỉnh sửa
  //   const updatedUsers = users.map((user) =>
  //     user.id === editedUser.id ? editedUser : user
  //   );
  //   setUsers(updatedUsers);
  //   setEditUserId(null);
  //   setEditedUser(null);
  // };

  // // Xử lý hiển thị form thêm người dùng
  // const handleAddUser = () => {
  //   setIsAddingUser(true);
  // };

  // // Xử lý hủy thêm người dùng
  // const handleCancelAddUser = () => {
  //   setIsAddingUser(false);
  // };

  // // Xử lý lưu thêm người dùng
  // const handleSaveAddUser = () => {
  //   // Thực hiện logic lưu người dùng mới vào danh sách users
  //   // Ví dụ:
  //   const newUser = {
  //     id: users.length + 1,
  //     username: editedUser.username,
  //     password: editedUser.password,
  //     role: editedUser.role,
  //   };

  //   setUsers([...users, newUser]);
  //   setIsAddingUser(false);
  //   setEditedUser(null);
  // };

  return (
    <div>
      <div className="list__user">
        <h2>Quản lý người dùng</h2>
        {!isAddingUser ? (
          <button onClick={handleAddUser}>Thêm</button>
        ) : (
          <button onClick={handleCancelAddUser}>Hủy</button>
        )}
      </div>
      {isAddingUser && (
        <div className="add-user-form">
          <input
            type="text"
            placeholder="Tên đăng nhập"
            value={editedUser ? editedUser.username : ""}
            onChange={(e) =>
              setEditedUser({ ...editedUser, username: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            value={editedUser ? editedUser.password : ""}
            onChange={(e) =>
              setEditedUser({ ...editedUser, password: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Chức vụ"
            value={editedUser ? editedUser.role : ""}
            onChange={(e) =>
              setEditedUser({ ...editedUser, role: e.target.value })
            }
          />
          <button onClick={handleSaveAddUser}>Thêm</button>
        </div>
      )}
      <div className="user-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên đăng nhập</th>
              <th>Mật khẩu</th>
              <th>Chức vụ</th>
              <th>Chỉnh sửa</th>
              <th>Xóa</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  {editUserId === user.id ? (
                    <input
                      type="text"
                      value={editedUser.username}
                      onChange={(e) =>
                        setEditedUser({
                          ...editedUser,
                          username: e.target.value,
                        })
                      }
                    />
                  ) : (
                    user.username
                  )}
                </td>
                <td>
                  {editUserId === user.id ? (
                    <input
                      type="text"
                      value={editedUser.password}
                      onChange={(e) =>
                        setEditedUser({
                          ...editedUser,
                          password: e.target.value,
                        })
                      }
                    />
                  ) : (
                    user.password
                  )}
                </td>
                <td>
                  {editUserId === user.id ? (
                    <input
                      type="text"
                      value={editedUser.role}
                      onChange={(e) =>
                        setEditedUser({ ...editedUser, role: e.target.value })
                      }
                    />
                  ) : (
                    user.role
                  )}
                </td>
                <td>
                  {editUserId === user.id ? (
                    <div>
                      <button
                        className="cancel-button"
                        onClick={handleCancelEdit}
                      >
                        Hủy
                      </button>
                      <button className="save-button" onClick={handleSaveEdit}>
                        Lưu
                      </button>
                    </div>
                  ) : (
                    <button
                      className="edit-button"
                      onClick={() => handleEditUser(user.id)}
                    >
                      Chỉnh sửa
                    </button>
                  )}
                </td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CaiDat;
