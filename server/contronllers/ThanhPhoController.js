import { ThanhPhoModel } from "../models/ThanhPhoModel.js";

//  Tạo Thành Phố - xong
export const Tao_ThanhPho_Action = async (req, res) =>{
  try{
    // 
    const newThanhPho = await new ThanhPhoModel ({  
      TenThanhPho: req.body.TenThanhPho,
    });

    console.log(">>> newUser: ",newThanhPho);
      // save User to db
      const ThanhPho = await newThanhPho.save(); 
      return res.status(200).json(ThanhPho);
  }
  catch(err){
      return res.status(500).json(err);
  }
};

// lấy danh sách người dùng - xong
export const DS_ThanhPho_Action = async (req, res) => {
  try {
    // lấy tất cả ThanhPho
    let ThanhPho = await ThanhPhoModel.find();
    return res.status(200).json(ThanhPho);
  } catch (err) {
   console.log(">>> lỗi đã xẩy ra: ",err);
    return res.status(500).json(err);
  }
};

// xóa người dùng - xong
export const Xoa_ThanhPho_Action = async (req, res) => {
  try {
    // lấy id người dùng
    const ThanhPho = await ThanhPhoModel.findByIdAndDelete(req.params.id);
    //let ThanhPho = await ThanhPhoModel.findById(req.params.id); // tìm id ko xóa
    return res.status(200).json(">>> đã xóa thành công ThanhPho");
  } catch (err) {
    // console.log(">>> lỗi đã xẩy ra: ",err);
    return res.status(500).json(err);
  }
};

// lấy thông tin người dùng - xong
export const CT_ThanhPho_Action = async (req, res) => {
  try {
    // lấy id người dùng
    let ThanhPho = await ThanhPhoModel.findById(req.params.id);
    return res.status(200).json(ThanhPho);
  } catch (err) {
    // console.log(">>> lỗi đã xẩy ra: ",err);
    return res.status(500).json(err);
  }
};

// lấy thông tin người dùng - đang fix
export const CapNhat_ThanhPho_Action = async (req, res) => {
  try {
    const update = { 
      TenThanhPho: req.body.TenThanhPho,
    };
    console.log(">>> dữ liệu được update: ",update);
    const id_ThanhPho = req.params.id;
    console.log(">>> id của người dùng: ",id_ThanhPho);

    /*
    -- --------------------- Kiểm tra ThanhPho đã tồn tại - update sau --------------------- --

    //const Check_NameThanhPho = await ThanhPhoModel.find(req.body.TenDangNhap);

    // kiểm tra tên đăng nhập đã tồn tại ?
     if(!Check_NameThanhPho){
       // báo lỗi/chuyển về home
       navigate("/ThanhPho/EditThanhPho/" + id_ThanhPho);
    }
    -- --------------------- Kiểm tra ThanhPho đã tồn tại - update sau --------------------- --
    */

      let ThanhPho = await ThanhPhoModel.findByIdAndUpdate(id_ThanhPho, update);
      //navigate("/ThanhPho/detaile/" + id_ThanhPho);
      return res.status(200).json(ThanhPho);
    
  } catch (err) {
    return res.status(500).json(err);
  }
};
