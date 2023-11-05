import { DiachiModel } from "../models/DiaChiModel.js";

// lấy danh sách người dùng - xong
export const DS_DiaChi_Action = async (req, res) => {
  try {
    // lấy tất cả user
    let DiaChi = await DiachiModel.find(
      {id_ND : req.params.id}
      );
    return res.status(200).json(DiaChi);
  } catch (err) {
   console.log(">>> lỗi đã xẩy ra: ",err);
    return res.status(500).json(err);
  }
};

//  Tạo Dịa Chỉ - xong
export const Tao_DiaChi_Action = async (req, res) =>{
  try{
    // 
    const newDiaChi = await new DiachiModel ({  
    TenDiaChi: req.body.TenDiaChi,
    TenDuong: req.body.TenDuong,
    SoNha: req.body.SoNha,
    Quan: req.body.Quan,
    Huyen: req.body.Huyen,
    id_ThanhPho: req.body.id_ThanhPho,
    id_Tinh: req.body.id_Tinh,
    id_ND: req.body.id_ND,
    });

    console.log(">>> newDiaChi: ", newDiaChi);
      // save User to db
      const DiaChi = await newDiaChi.save(); 
      return res.status(200).json(DiaChi);
  }
  catch(err){
      return res.status(500).json(err);
  }
};


// xóa người dùng - xong
export const Xoa_DiaChi_Action = async (req, res) => {
  try {
    // lấy id người dùng
    let DiaChi = await DiachiModel.findByIdAndDelete(req.params.id);
    //let user = await UserModel.findById(req.params.id); // tìm id ko xóa
    return res.status(200).json(">>> đã xóa thành công user");
  } catch (err) {
    // console.log(">>> lỗi đã xẩy ra: ",err);
    return res.status(500).json(err);
  }
};

// lấy thông tin người dùng - xong
export const CT_DiaChi_Action = async (req, res) => {
  try {
    // lấy id người dùng
    let DiaChi = await DiachiModel.findById(req.params.id);
    return res.status(200).json(DiaChi);
  } catch (err) {
    // console.log(">>> lỗi đã xẩy ra: ",err);
    return res.status(500).json(err);
  }
};

// lấy thông tin người dùng - đang fix
export const CapNhat_DiaChi_Action = async (req, res) => {
  try {
    const update = {
      TenDiaChi: req.body.TenDiaChi,
      TenDuong: req.body.TenDuong,
      SoNha: req.body.SoNha,
      Quan: req.body.Quan,
      Huyen: req.body.Huyen,
      id_ThanhPho: req.body.id_ThanhPho,
      id_Tinh: req.body.id_Tinh,
      id_ND: req.body.id_ND,
    };
    console.log(">>> dữ liệu được update: ",update);
    const id_DiaChi = req.params.id;
    console.log(">>> id của người dùng: ",id_DiaChi);

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

      let Diachi = await DiachiModel.findByIdAndUpdate(id_DiaChi, update);
      //navigate("/User/detaile/" + id_user);
      return res.status(200).json(Diachi);
    
  } catch (err) {
    return res.status(500).json(err);
  }
};