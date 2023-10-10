import { UserModel } from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import { Model } from "mongoose";

// Đăng Ký
export const DangKyAction = async (req, res) =>{
    try{
        // hash password users
      const salt = await bcrypt.genSalt(10);
      const hash_Pass = await bcrypt.hash(req.body.MatKhau, salt);
      const Defaul_Role = "khách hàng";
      // Create user account
      const newUser = await new UserModel ({  
        TenDangNhap: req.body.TenDangNhap,
        MatKhau: hash_Pass,
        Tuoi: req.body.Tuoi,
        SDT: req.body.SDT,
        Ho_TenDem: req.body.Ho_TenDem,
        Email: req.body.Email,
        GioiTinh: req.body.GioiTinh,
        ChucVu: Defaul_Role,
        //Admin: req.body.Admin,
      });
      console.log(">>> newUser: ",newUser);
        // save User to db
        const user = await newUser.save(); 
        return res.status(200).json(user);

    }
    catch(err){
        return res.status(500).json(err);
    }
};


// Đăng Nhập
export const DangNhapAction = async (req,res) =>{
    try{
        // user từ db
        const Check_user = await UserModel.findOne(
            {TenDangNhap:  req.body.TenDangNhap}
        );
         console.log(">>> Đây là user tìm được: ",Check_user);
        
        if(!Check_user){
            return res.status(404).json("Tên Đăng Nhập sai !");
        }

        const Check_pass = await bcrypt.compare(
            // mk user nhập trên page
            req.body.MatKhau,
            // mk từ db của user
            Check_user.MatKhau
        );
        console.log(">>> đây là mk tìm được: ",Check_pass);
        if(!Check_pass){
            return  res.status(404).json("Mật Khẩu sai !");
        }

        // thỏa đk đăng nhập
        if(Check_user && Check_pass){
            const accessToken = jwt.sign(
                {
                  id: Check_user.id,
                  Admin: Check_user.Admin,
                },
                "secrekey",
                { expiresIn: "30s" }
              );
              // bỏ pass
            const { MatKhau, ...others } = Check_user.toObject();
            return  res.status(200).json({...others,accessToken});
        };

    } catch(err){
        return res.status(500).json(err);
    }
};






//
export const createPost = (req,res) =>{
    res.send('Router: Create posts đã kết nối')
}

// home 
export const Get_HomeCotronller = (req, res) =>{
    res.send('Router: Đây là Home Page');
};


//login
// home 
export const Get_LoginCotronller = (req, res) =>{
    res.send('Router: Đây là Login Page');
};

