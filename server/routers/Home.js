import express from 'express';
import { DangKyAction,DangNhapAction,requestRefreshToken,DangXuatAction, } from '../contronllers/HomeController.js';
import { middlewareController,verifyToKenAndAdminAuth,verifyToKen } from '../contronllers/middlewareController.js';
const router = express.Router();

// Cấu hình router
router.post("/Register", DangKyAction);
router.post("/Login", DangNhapAction);
router.post("/logout", verifyToKen, DangXuatAction);
//router.post("/logout",DangXuatAction);

//REFRESH TOKEN
router.post("/refresh", requestRefreshToken);

// test
router.post("/test", verifyToKen, DangKyAction);

export default router;