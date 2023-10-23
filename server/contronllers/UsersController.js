import { UserModel } from "../models/UserModel.js";

//


// lấy danh sách người dùng - xong
export const DS_NguoiDung_Action = async (req,res) =>{
    try{
        // lấy tất cả user
      const user = await UserModel.find(); 
      return res.status(200).json(user);
    } catch(err){
        // console.log(">>> lỗi đã xẩy ra: ",Check_user);
        return res.status(500).json(err);
    }
};

// xóa người dùng - xong
export const Xoa_NguoiDung_Action = async (req,res) =>{
    try{
        // lấy id người dùng
      const user = await UserModel.findByIdAndDelete(req.params.id);
      //const user = await UserModel.findById(req.params.id);
      return res.status(200).json(">>> đã xóa thành công user");
    } catch(err){
        // console.log(">>> lỗi đã xẩy ra: ",Check_user);
        return res.status(500).json(err);
    }
};

// lấy thông tin người dùng - xong
export const CT_NguoiDung_Action = async (req,res) =>{
    try{

    // lấy id người dùng
    const user = await UserModel.findById(req.params.id);
    return res.status(200).json(user);

    } catch(err){
    // console.log(">>> lỗi đã xẩy ra: ",Check_user);
    return res.status(500).json(err);
    }
};

// lấy thông tin người dùng - đang fix
export const CapNhat_NguoiDung_Action = async (req,res) =>{
    try{
        
           // TenDangNhap: req.body.TenDangNhap,
           // MatKhau: req.params.MatKhau,
           // Tuoi: req.body.Tuoi,
           // SDT: req.body.SDT,
           // Ho_TenDem: req.body.Ho_TenDem,
           // Email: req.body.Email,
           // GioiTinh: req.body.GioiTinh,
           // ChucVu:  req.params.ChucVu,
        const update = { TenDangNhap: req.body.TenDangNhap,};
        const fillter = req.params.id;
        let user = await UserModel.findByIdAndUpdate(fillter,update);
    return res.status(200).json(user);
    } catch(err){
    return res.status(500).json(err);
    }
};
