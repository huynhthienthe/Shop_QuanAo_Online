import { ChucVuModel } from "../models/ChucVuModel.js";

// Đăng Ký - xong
export const Tao_ChucVu_Action = async (req, res) =>{
    try{

      // Create user account
      const newRole = await new ChucVuModel ({  
        TenChucVu: req.body.TenChucVu,
      });

      console.log(">>> newRole: ",newRole);
        // save User to db
        const role = await newRole.save(); 
        return res.status(200).json(role);
    }
    catch(err){
        return res.status(500).json(err);
    }
};

// lấy danh sách chức vụ - xong
export const DS_ChucVu_Action = async (req,res) =>{
    try{
        // lấy tất cả user
      const roles = await ChucVuModel.find(); 
      return res.status(200).json(roles);
    } catch(err){
        // console.log(">>> lỗi đã xẩy ra: ",Check_user);
        return res.status(500).json(err);
    }
};

// xóa người dùng - xong
export const Xoa_ChucVu_Action = async (req,res) =>{
    try{
      // lấy id người dùng
      //const user = await UserModel.findByIdAndDelete(req.params.id);
      const roles = await ChucVuModel.findById(req.params.id);
      return res.status(200).json(">>> đã xóa thành công user");
    } catch(err){
        // console.log(">>> lỗi đã xẩy ra: ",Check_user);
        return res.status(500).json(err);
    }
};

// lấy thông tin người dùng - xong
export const CT_ChucVu_Action = async (req,res) =>{
    try{

    // lấy id người dùng
    const roles = await ChucVuModel.findById(req.params.id);
    return res.status(200).json(roles);

    } catch(err){
    // console.log(">>> lỗi đã xẩy ra: ",Check_user);
    return res.status(500).json(err);
    }
};

// lấy thông tin người dùng - xong
export const CapNhat_ChucVu_Action = async (req,res) =>{
    try{
        const update = { TenChucVu: req.body.TenChucVu,};
        const fillter = req.params.id;
        let roles = await ChucVuModel.findByIdAndUpdate(fillter,update);
    return res.status(200).json(roles);
    } catch(err){
    return res.status(500).json(err);
    }
};
