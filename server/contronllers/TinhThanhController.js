import { TinhThanhModel } from "../models/TinhThanhModel.js";

//  Tạo Tỉnh Thành - xong
export const Tao_TinhThanh_Action = async (req, res) =>{
  try{
    // 
    const newTinhThanh = await new TinhThanhModel ({  
      TenTinhThanh: req.body.TenTinhThanh,
    });

    console.log(">>> newTinhThanh: ",newTinhThanh);
      // save User to db
      const TinhThanh = await newTinhThanh.save(); 
      return res.status(200).json(TinhThanh);
  }
  catch(err){
      return res.status(500).json(err);
  }
};

// lấy danh sách người dùng - xong
export const DS_TinhThanh_Action = async (req, res) => {
  try {
    // lấy tất cả user
    let TinhThanh = await TinhThanhModel.find();
    return res.status(200).json(TinhThanh);
  } catch (err) {
   console.log(">>> lỗi đã xẩy ra: ",err);
    return res.status(500).json(err);
  }
};

// xóa người dùng - xong
export const Xoa_TinhThanh_Action = async (req, res) => {
  try {
    // lấy id người dùng
    //let TinhThanh = await TinhThanhModel.findByIdAndDelete(req.params.id);
    let TinhThanh = await TinhThanhModel.findById(req.params.id); // tìm id ko xóa
    return res.status(200).json(">>> đã xóa thành công user");
  } catch (err) {
    // console.log(">>> lỗi đã xẩy ra: ",err);
    return res.status(500).json(err);
  }
};

// lấy thông tin người dùng - xong
export const CT_TinhThanh_Action = async (req, res) => {
  try {
    // lấy id người dùng
    let TinhThanh = await TinhThanhModel.findById(req.params.id);
    return res.status(200).json(TinhThanh);
  } catch (err) {
    // console.log(">>> lỗi đã xẩy ra: ",err);
    return res.status(500).json(err);
  }
};

// lấy thông tin người dùng - đang fix
export const CapNhat_TinhThanh_Action = async (req, res) => {
  try {
    const update = { 
      TenTinhThanh: req.body.TenTinhThanh,
    };
    console.log(">>> dữ liệu được update: ",update);
    const id_TinhThanh = req.params.id;
    console.log(">>> id của người dùng: ",id_TinhThanh);

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

      let TinhThanh = await TinhThanhModel.findByIdAndUpdate(id_TinhThanh, update);
      //navigate("/User/detaile/" + id_TinhThanh);
      return res.status(200).json(TinhThanh);
    
  } catch (err) {
    return res.status(500).json(err);
  }
};
