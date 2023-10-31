import jwt from "jsonwebtoken";

// jwt:
export const middlewareController = {
    verifyToKen: (req, res, next) => {
        // lấy token: người dùng
        const token = req.headers.token;
        if(token){
            // lấy header: vị trí dầu tiên sau khoảng cách
            // vd header: "User TokenID" >>> accessToken = "TokenID"
            const accessToken = token.split(" ")[1];
            //console.log(">>> token đã lấy đc: ",accessToken);
            // tiến hành xác nhận: người dùng >>> key >>> kết quả
            jwt.verify(accessToken,process.env.access_key,(err,user) => {
                // xử lý:
                if(err){
                    return res.status(403).json("Bạn còn ở đó chứ ? hãy thử đăng nhập lại !");
                }
                // thỏa điều kiện:
                    req.user = user;
                    next();
            });
        }else{
            return res.status(401).json("bạn đang có dấu hiệu xâm nhập trái phép ! yêu cầu bạn hãy đăng nhập");
        }},
};

//xác nhận người dùng - xong
export const verifyToKen = (req, res, next) => {
    // lấy token: người dùng
    const token = req.headers.token;
    console.log("\n>>> token: ",token);
    if(token){
        // lấy header: vị trí dầu tiên sau khoảng cách
        // vd header: "User TokenID" >>> accessToken = "TokenID"
        const accessToken = token.split(" ")[1];
        // tiến hành xác nhận: người dùng >>> key >>> kết quả
        jwt.verify(accessToken,process.env.access_key,(err,user) => {
            // xử lý:
            if(err){
                return res.status(403).json("Bạn còn ở đó chứ ? hãy thử đăng nhập lại !");
            }
            // thỏa điều kiện:
                req.user = user;
                next();
        });

    }else{
        
        return res.status(401).json("bạn đang có dấu hiệu xâm nhập trái phép ! yêu cầu bạn hãy đăng nhập");
    }
};

// check admin - xong
export const verifyToKenAndAdminAuth = (req,res,next) =>{
    verifyToKen(req,res,() => {
        // check admin:
        if(req.user.Admin) {
            // // check chucvu:
            // console.log(">>> check user: ",req.user.id);
            // console.log(">>> check User token id: ",req.params.id);
            // console.log(">>> check User token admin: ",req.user.Admin);
            //console.log(">>> check User token ChucVu: ",req.user.ChucVu);
            next();
        }else{
          return res.status(403).json("xin lỗi, tài khoản của bạn không có thẩm quyền này !");
         //return res.redirect("/home"); 
        }
    })
};

// check user - xong
export const verifyTokenAndUserAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.id === req.params.id|| req.user.isAdmin) {
        next();
      } else {
        res.status(403).json("You're not allowed to do that!");
      }
    });
};

// nếu dùng sẽ cập nhật sau
export const verifyToKenChucVu = (req,res,next) =>{
    middlewareController.verifyToKen(req,res,() => {
        // check admin:
        if(req.user.id == req.params.id || req.user.Admin) {
            next();
        }else{
           return res.status(403).json("");
        }
    })
};