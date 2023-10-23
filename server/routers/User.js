import express from 'express';
import {  DS_NguoiDung_Action,Xoa_NguoiDung_Action,CT_NguoiDung_Action,CapNhat_NguoiDung_Action } from '../contronllers/UsersController.js';
import { middlewareController,verifyToKenAndAdminAuth,verifyToKen } from '../contronllers/middlewareController.js';
//import { requestRefreshToken } from '../contronllers/HomeController.js';

const router = express.Router();
// Cấu hình router

// danh sách tài khoản người dùng - xong
router.get("/GetAllUser",verifyToKenAndAdminAuth,verifyToKen, DS_NguoiDung_Action);
// xóa tài khoản người dùng - đang fix
router.delete("/delete/:id", verifyToKenAndAdminAuth, verifyToKen, Xoa_NguoiDung_Action);
// Thông tin chi tiết người dùng - đang fix
router.get("/GetDetailUser/:id",CT_NguoiDung_Action);
//
router.post("/EditUser/:id",CapNhat_NguoiDung_Action);

export default router;

/*                        -- CHÚ THÍCH --
 * verifyToKen >>> dùng để xác thực token của người dùng 
 * verifyToKenAndAdminAuth >>> xác thực user có phải là admin hay ko qua Token được cấp
 *  DS_NguoiDung_Action, Xoa_NguoiDung_Action >>> các functions thực hiện các chức năng tương ứng 
 */