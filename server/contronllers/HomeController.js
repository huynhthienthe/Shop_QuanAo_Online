import { UserModel } from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import { Model } from "mongoose";

// JWT: store
let refreshTokens = [];

// JWT: CREATE TOKEN
const generateAccessToken = (user) => {
    return jwt.sign(
      {
        id: user.id,
        ChucVu: user.ChucVu,
        Admin: user.Admin,
      },
      process.env.access_key,
      { expiresIn: "40s" }
    );
  };

const generateRefreshToken = (user) => {
    return jwt.sign(
      {
        id: user.id,
        ChucVu: user.ChucVu,
        Admin: user.Admin,
      },
      process.env.refresh_key,
      { expiresIn: "30d" }
    );
  };

// Đăng Ký - xong
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

// Đăng Nhập - đang fix
export const DangNhapAction = async (req,res) =>{
    // jwt:
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

            // jwt: Token >>> tạo token mới cho user
            const accessToken = generateAccessToken(Check_user);
            const refreshToken = generateRefreshToken(Check_user);  
            
            // cookie: REDUX STORE -> ACCESSTOKEN (Lưu Token của người dùng)
            res.cookie("refreshToken", refreshToken, {
                httpOnly: true,
                secure: false,
                path: "/",
                //CSRF cookie security:
                sameSite: "strict",
              });
              // bỏ pass
            const { MatKhau, ...others } = Check_user.toObject();
            return  res.status(200).json({...others,accessToken});
        };

    } catch(err){
        return res.status(500).json(err);
    }
  };

// Đăng Xuất - đang fix
export const DangXuatAction = async (req, res) => {
  // xóa cookie
    res.clearCookie("refreshToken");
    refreshTokens = refreshTokens.filter(
      (token) => token !== req.cookies.refreshToken
    );
    res.status(200).json("Chào tạm biệt ! ");
  };

//
export const requestRefreshToken = async (req, res) => {
    //Take refresh token from user
    const refreshToken = req.cookies.refreshToken;
    //Send error: token rỗng 
    if (!refreshToken) 
    return res.status(401).json("xin lỗi, bạn hãy đăng nhập trước đã !");
    if (!refreshToken.includes(refreshToken)) 
    {return res.status(403).json("xin lỗi, bạn không có token");}
    
    jwt.verify(refreshToken, process.env.refresh_key, (err, Check_user) => {
      if (err) {
        console.log(err);
      }
      refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
      
      //create new access token, refresh token and send to user
      const newAccessToken = generateAccessToken(Check_user);
      const newRefreshToken = generateRefreshToken(Check_user);
      refreshTokens.push(newRefreshToken);
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure:false,
        path: "/",
        sameSite: "strict",
      });
      res.status(200).json({
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      });
    });
  };

//   // action.js - đang fix
// export const saveAccessToken = (accessToken) => {
//   return {
//     type: 'SAVE_ACCESS_TOKEN',
//     payload: accessToken,
//   };
// };


//-------------------- test router --------------------//
export const createPost = (req,res) =>{
    res.send('Router: Create posts đã kết nối')
};
// home 
export const Get_HomeCotronller = (req, res) =>{
    res.send('Router: Đây là Home Page');
};
//login
export const Get_LoginCotronller = (req, res) =>{
    res.send('Router: Đây là Login Page');
};
//-------------------- test router --------------------//