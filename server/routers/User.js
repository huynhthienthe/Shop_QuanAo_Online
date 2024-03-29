import express from 'express';
import {  
    DS_NguoiDung_Action,
    Xoa_NguoiDung_Action,
    CT_NguoiDung_Action,
    CapNhat_NguoiDung_Action
 } from '../contronllers/UsersController.js';

import {
    Tao_DiaChi_Action,  
    DS_DiaChi_Action,
    Xoa_DiaChi_Action,
    CT_DiaChi_Action,
    CapNhat_DiaChi_Action
 } from '../contronllers/DiaChiController.js';

import { 
    verifyToKenAndAdminAuth,
    verifyToKen 
} from '../contronllers/middlewareController.js';
//import { requestRefreshToken } from '../contronllers/HomeController.js';

// Cấu hình router
const router = express.Router();

/* -- ----------------------------- Nguoi Dung ----------------------------- -- */

// danh sách tài khoản người dùng - xong
router.get("/GetAllUser",verifyToKenAndAdminAuth,verifyToKen, DS_NguoiDung_Action);
// xóa tài khoản người dùng - đang fix (reload)
router.delete("/delete/:id", Xoa_NguoiDung_Action);
// Thông tin chi tiết người dùng - xong
router.get("/DetailUser/:id",CT_NguoiDung_Action);
// Cập nhật người dùng - đang fix (reload)
router.post("/EditUser/:id",CapNhat_NguoiDung_Action);
//
router.post("/Caidat/:id",CapNhat_NguoiDung_Action);

/* -- ----------------------------- Dịa Chỉ ----------------------------- -- */
//
router.post("/DiaChi", Tao_DiaChi_Action);
// danh sách tài khoản người dùng - xong
router.get("/DSDiaChi/:id", DS_DiaChi_Action);
// xóa tài khoản người dùng - đang fix (reload)
router.delete("/deleteDiaChi/:id", Xoa_DiaChi_Action);
// Thông tin chi tiết người dùng - xong
router.get("/DetailDiaChi/:id",CT_DiaChi_Action);
// Cập nhật người dùng - đang fix (reload)
router.post("/EditDiaChi/:id",CapNhat_DiaChi_Action);

export default router;

/*                        -- CHÚ THÍCH --
 * verifyToKen >>> dùng để xác thực token của người dùng 
 * verifyToKenAndAdminAuth >>> xác thực user có phải là admin hay ko qua Token được cấp
 * DS_NguoiDung_Action, Xoa_NguoiDung_Action >>> các functions thực hiện các chức năng tương ứng 
 */