
  import React, { useEffect, useState } from "react";
  import { useDispatch, useSelector }   from "react-redux";
  import { useNavigate }                from "react-router-dom";

  import { 
    editByUser, 
    getAllAddresses, 
    createNewAddress, 
    updateAddress, 
    deleteAddress,
    getThanhPho,  
  }from "../redux/apiRequest.js"; 


  const GetEditByUser = () => {
  
    // get id:
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    // get value:
    const user = useSelector((state) => state.user_status.login?.currentUser);
    const addresses = useSelector((state) => state.address.DiaChi?.listDiaChi);
    const City = useSelector((state) => state.City.ThanhPho?.listCity);
  
    const [getTenDangNhap, setTenDangNhap]  = useState(user?.TenDangNhap);
    const [getSDT,         setSDT]          = useState(user?.SDT);
    const [getHo_TenDem,   setHo_TenDem]    = useState(user?.Ho_TenDem);
    const [getEmail,       setEmail]        = useState(user?.Email);
    const [getTuoi,        setTuoi]         = useState(user?.Tuoi);
    const [getGioiTinh,    setGioiTinh]     = useState(user?.GioiTinh);
    //const [getTenND, setTenND] = useState(detailUser?.TenND);
  
    // list address:
    const [getTenDiaChi,   setTenDiaChi]   = useState("");
    const [getTenDuong,    setTenDuong]    = useState("");
    const [getSoNha,       setSoNha]       = useState("");
    const [getQuan,        setQuan]        = useState("");
    const [getHuyen,       setHuyen]       = useState("");
    const [getid_ThanhPho, setid_ThanhPho] = useState("");
    const [getid_Tinh,     setid_Tinh]     = useState("");

    // edit address:
    const [getEdit_id,         setEdit_id]         = useState("");
    const [getEditTenDiaChi,   setEditTenDiaChi]   = useState("");
    const [getEditTenDuong,    setEditTenDuong]    = useState("");
    const [getEditSoNha,       setEditSoNha]       = useState("");
    const [getEditQuan,        setEditQuan]        = useState("");
    const [getEditHuyen,       setEditHuyen]       = useState("");
    const [getEditid_ThanhPho, setEditid_ThanhPho] = useState("");
    const [getEditid_Tinh,     setEditid_Tinh]     = useState("");

    // form create:
    const [showAddressForm, setShowAddressForm] = useState(false);
    // form edit:
    const [showEditAddressForm, setShowEditAddressForm] = useState(false);

    useEffect(() => {
      if (user) {
      
      getAllAddresses (dispatch, user._id, user.accessToken);
      getThanhPho     (dispatch, user.accessToken);
      }
      if (user == null){
        navigate("/home/err:ChuaDangNhap");
      }
      if (user._id == null){
        navigate("/home/err:ChuaCo_id");
      }
      if (!user?.accessToken){
    navigate("/home/err:kocoToken");
    }}, [dispatch,navigate, user]);
    
    // setup form create:
    const handleEditUser = async (e) => {
      e.preventDefault();
      if (user) {
        const edit = {
          TenDangNhap: getTenDangNhap,
          // TenND: getTenND,
          SDT: getSDT,
          Ho_TenDem: getHo_TenDem,
          Email: getEmail,
          Tuoi: getTuoi,
          GioiTinh: getGioiTinh,
        };
        editByUser(dispatch, edit, user._id, navigate, user?.accessToken);
        navigate("/");
      }
    };

    const handleFormEditDiaChi = async (id) => {
    setShowEditAddressForm(true);
    const editAddress = addresses?.find((address) => address._id === id);
    // danh sách thành phố 
    const DSCity = City?.find((city) => city._id === editAddress.id_ThanhPho);
    //console.log(">>> địa chỉ cần sửa: ",editAddress.TenDiaChi);
      if (editAddress) {
        setEdit_id(editAddress._id)
        setEditTenDiaChi(editAddress.TenDiaChi);
        setEditTenDuong(editAddress.TenDuong);
        setEditSoNha(editAddress.SoNha);
        setEditQuan(editAddress.Quan);
        setEditHuyen(editAddress.Huyen);
        if(DSCity)
        {
          setEditid_Tinh(DSCity);
        }
        setEditid_Tinh(editAddress.id_Tinh);
      }
    };
  
    const handleDelete = (id) => {
      deleteAddress(id, dispatch, user?.accessToken);
      getAllAddresses(dispatch, user._id, user.accessToken);
    };

    const handleEditDiaChi = async (e) => {
      e.preventDefault();
      if (user) {
        // id địa chỉ:
        const id = getEdit_id;
        const updated = {
          TenDiaChi:   getEditTenDiaChi,
          TenDuong:    getEditTenDuong,
          SoNha:       getEditSoNha,
          Quan:        getEditQuan,
          Huyen:       getEditHuyen,
          id_ThanhPho: getEditid_ThanhPho,
          id_Tinh:     getEditid_Tinh,
        };
        console.log(">>> id: ",id);
        console.log(">>> địa chỉ cần cập nhật: ", updated);
        // Gọi hàm để cập nhật địa chỉ
        updateAddress(dispatch, updated, id, user._id, user.accessToken);
        getAllAddresses(dispatch, user._id, user.accessToken);
        navigate("/")
        setShowEditAddressForm(false);
        }
    };

    const handleCreateDiaChi = async (e) => {
      e.preventDefault();
      if (user) {
        const newDiaChi = {
          TenDiaChi: getTenDiaChi,
          TenDuong: getTenDuong,
          SoNha: getSoNha,
          Quan: getQuan,
          Huyen: getHuyen,
          id_ThanhPho: getid_ThanhPho,
          id_Tinh: getid_Tinh,
          id_ND: user._id,
        };
        //console.log(">>> new address: ",newDiaChi);
        //console.log(">>> dispatch: ",dispatch);
        createNewAddress(dispatch, newDiaChi, user.accessToken);
        setShowAddressForm(false);
      }
    };

  
    return (
      <main className="home-container">
        <div className="home-title">Thông Tin Tài Khoản</div>
        <div className="user-table">
  
          <form onSubmit={handleEditUser}>
            <label>
              xin chào: {user.TenDangNhap}
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

        <div className="home-title">Địa Chỉ:</div>
      <div className="user-table">
        <table>
          <tbody>


         {/* phần này của chat gpt thệ (gàcon) ko biết j hết. */}

         {addresses?.map((diachi) => {
            // danh sách thành phố 
            const DSCity = City?.find((city) => city._id === diachi.id_ThanhPho);
            return (
              <tr key={diachi._id}>
                <td>{diachi.TenDiaChi}</td>
                <td>
                  Nhà Số: {diachi.SoNha}, Đường {diachi.TenDuong}, TP.{DSCity.TenThanhPho}, Tỉnh {diachi.id_Tinh}.
                </td>
                <td>
                  <button className="edit-button" onClick={() => handleFormEditDiaChi(diachi._id)}>sửa</button>
                  <button className="delete-button" onClick={() => handleDelete(diachi._id)}>Xóa</button>
                </td>
              </tr>
            );
        })}
         
         {/* phần này của chat gpt thệ (gàcon) ko biết j hết. */}
         

          </tbody>
        </table>
      </div>

      <button className="edit-button" onClick={() => setShowAddressForm(true)}> Thêm địa chỉ</button>

      {/* đây là form thêm địa chỉ: */}
      {showAddressForm && (
              <div className="register-container2">
                <button className="edit-button" onClick={() => setShowAddressForm(false) }> đóng</button>
              <form onSubmit={handleCreateDiaChi} className="form-container2">
                {/* Hàng 2: Input */}
                <div className="form-row">
                  <div className="form-column2">
                    <div className="form-group2">
                      <label2 htmlFor="username">
                        <i class="ri-user-3-fill"></i>
                      </label2>
                      <input
                        type="text"
                        placeholder="Tên Địa Chỉ: "
                        onChange={(e) => setTenDiaChi(e.target.value)}
                        required
                      />
                      {/* {usernameError && (
                        <div className="error-message2">{usernameError}</div>
                      )} */}
                    </div>
        
                    <div className="form-group2">
                      <label2 htmlFor="Tên Đường: ">
                        <i class="ri-phone-fill"></i>
                      </label2>
                      <input
                        type="text"
                        placeholder="Tên Đường: "
                        onChange={(e) => setTenDuong(e.target.value)}
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
                        placeholder="Số Nhà"
                        onChange={(e) => setSoNha(e.target.value)}
                        required
                      />
                    </div>
        
                    <div className="form-group2">
                      <label2 htmlFor="firstName">
                        <i class="ri-user-3-fill"></i>
                      </label2>
                      <input
                        type="text"
                        placeholder="Quận"
                        onChange={(e) => setQuan(e.target.value)}
                      />
                    </div>
        
                    <div className="form-group2">
                      <label2 htmlFor="firstName">
                        <i class="ri-mail-fill"></i>
                      </label2>
                      <input
                        type="text"
                        placeholder="Huyen"
                        onChange={(e) => setHuyen(e.target.value)}
                      />
                    </div>
        
                    <div className="form-group2">
                      <label2 htmlFor="firstName">
                        <i class="ri-user-3-fill"></i>
                      </label2>
                      <input
                        type="text"
                        placeholder="Thành Phố"
                        onChange={(e) => setid_ThanhPho(e.target.value)}
                        required
                      />
                    </div>
        
        
                    <div className="form-group2">
                      <label2 htmlFor="firstName">
                        <i class="ri-user-3-fill"></i>
                      </label2>
                      <input
                        type="text"
                        placeholder="Tỉnh Thành"
                        onChange={(e) => setid_Tinh(e.target.value)}
                        required
                      />
                    </div>
        
        
        
                  </div>
                </div>
        
                {/* Hàng 3: Nút Đăng ký */}
                <div className="form-row">
                  <div className="form-group3">
                    <button type="submit" >Thêm</button>
                  </div>
                </div>
              </form>
            </div>
      )}

      {/* đây là form chỉnh sửa địa chỉ: */}
      {showEditAddressForm && (
              <div className="register-container2">
               
              <button className="edit-button" onClick={() => setShowEditAddressForm(false) }> chỉnh sửa đóng</button>
              
              <form onSubmit={handleEditDiaChi} className="form-container2">
                {/* Hàng 2: Input */}
                <div className="form-row">
                  <div className="form-column2">
                    <div className="form-group2">
                      <label2 htmlFor="username">
                        <i class="ri-user-3-fill"></i>
                      </label2>
                      <input
                        type="text"
                        placeholder="Tên Địa Chỉ: "
                        value={getEditTenDiaChi}
                        onChange={(e) => setEditTenDiaChi(e.target.value)}
                        required
                      />
                      {/* {usernameError && (
                        <div className="error-message2">{usernameError}</div>
                      )} */}
                    </div>
        
                    <div className="form-group2">
                      <label2 htmlFor="Tên Đường: ">
                        <i class="ri-phone-fill"></i>
                      </label2>
                      <input
                        type="text"
                        placeholder="Tên Đường: "
                        value={getEditTenDuong}
                        onChange={(e) => setEditTenDuong(e.target.value)}
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
                        placeholder="Số Nhà"
                        value={getEditSoNha}
                        onChange={(e) => setEditSoNha(e.target.value)}
                        required
                      />
                    </div>
        
                    <div className="form-group2">
                      <label2 htmlFor="firstName">
                        <i class="ri-user-3-fill"></i>
                      </label2>
                      <input
                        type="text"
                        placeholder="Quận"
                        value={getEditQuan}
                        onChange={(e) => setEditQuan(e.target.value)}
                      />
                    </div>
        
                    <div className="form-group2">
                      <label2 htmlFor="firstName">
                        <i class="ri-mail-fill"></i>
                      </label2>
                      <input
                        type="text"
                        placeholder="Huyen"
                        value={getEditHuyen}
                        onChange={(e) => setEditHuyen(e.target.value)}
                      />
                    </div>
        
                    <div className="form-group2">
                      <label2 htmlFor="firstName">
                        <i class="ri-user-3-fill"></i>
                      </label2>
                      <input
                        type="text"
                        placeholder="Thành Phố"
                        value={getEditid_ThanhPho}
                        onChange={(e) => setEditid_ThanhPho(e.target.value)}
                        required
                      />
                    </div>
        
        
                    <div className="form-group2">
                      <label2 htmlFor="firstName">
                        <i class="ri-user-3-fill"></i>
                      </label2>
                      <input
                        type="text"
                        placeholder="Tỉnh Thành"
                        value={getEditid_Tinh}
                        onChange={(e) => setEditid_Tinh(e.target.value)}
                        required
                      />
                    </div>
        
        
        
                  </div>
                </div>
        
                {/* Hàng 3: Nút Đăng ký */}
                <div className="form-row">
                  <div className="form-group3">
                    <button type="submit" >Cập Nhật</button>
                  </div>
                </div>
              </form>

            </div>
      )}

      </main>


    );
  };
  
  export default GetEditByUser;