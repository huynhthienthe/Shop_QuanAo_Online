import { UserModel } from "../models/UserModel.js";

// lấy danh sách người dùng - xong
export const DS_NguoiDung_Action = async (req, res) => {
  try {
    // lấy tất cả user
    let user = await UserModel.find();
    return res.status(200).json(user);
  } catch (err) {
   console.log(">>> lỗi đã xẩy ra: ",err);
    return res.status(500).json(err);
  }
};

// xóa người dùng - xong
export const Xoa_NguoiDung_Action = async (req, res) => {
  try {
    // lấy id người dùng
    const user = await UserModel.findByIdAndDelete(req.params.id);
    //let user = await UserModel.findById(req.params.id); // tìm id ko xóa
    return res.status(200).json(">>> đã xóa thành công user");
  } catch (err) {
    // console.log(">>> lỗi đã xẩy ra: ",err);
    return res.status(500).json(err);
  }
};

// lấy thông tin người dùng - xong
export const CT_NguoiDung_Action = async (req, res) => {
  try {
    // lấy id người dùng
    let user = await UserModel.findById(req.params.id);
    return res.status(200).json(user);
  } catch (err) {
    // console.log(">>> lỗi đã xẩy ra: ",err);
    return res.status(500).json(err);
  }
};

// lấy thông tin người dùng - đang fix
export const CapNhat_NguoiDung_Action = async (req, res) => {
  try {
    const update = { 
      TenDangNhap: req.body.TenDangNhap,
      //TenND:req.body.TenND,
      Tuoi: req.body.Tuoi,
      SDT: req.body.SDT,
      Ho_TenDem: req.body.Ho_TenDem,
      Email: req.body.Email,
      GioiTinh: req.body.GioiTinh,
    };
    console.log(">>> dữ liệu được update: ",update);
    const id_user = req.params.id;
    console.log(">>> id của người dùng: ",id_user);

    /*
    -- --------------------- Kiểm tra user đã tồn tại - update sau --------------------- --

    //const Check_NameUser = await UserModel.find(req.body.TenDangNhap);

    // kiểm tra tên đăng nhập đã tồn tại ?
     if(!Check_NameUser){
       // báo lỗi/chuyển về home
       navigate("/User/EditUser/" + id_user);
    }
    -- --------------------- Kiểm tra user đã tồn tại - update sau --------------------- --
    */

      let user = await UserModel.findByIdAndUpdate(id_user, update);
      navigate("/User/detaile/" + id_user);
      return res.status(200).json(user);
    
  } catch (err) {
    return res.status(500).json(err);
  }
};
