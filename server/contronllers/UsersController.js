import { UserModel } from "../models/UserModel.js";

//


// lấy danh sách người dùng
export const DS_NguoiDung_Action = async (req,res) =>{
    try{
        // lấy tất cả user
      const user = await UserModel.find(); 
      res.status(200).json(user);
    } catch(err){
        // console.log(">>> lỗi đã xẩy ra: ",Check_user);
        return res.status(500).json(err);
    }
};

// xóa người dùng
export const Xoa_NguoiDung_Action = async (req,res) =>{
    try{
        // lấy id người dùng
    //const user = await UserModel.findByIdAndDelete(req.params.id);
      const user = await UserModel.findById(req.params.id);
      res.status(200).json(">>> đã xóa thành công user");
    } catch(err){
        // console.log(">>> lỗi đã xẩy ra: ",Check_user);
        return res.status(500).json(err);
    }
};
