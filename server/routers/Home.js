import express from 'express';
import { DangKyAction,DangNhapAction,requestRefreshToken,DangXuatAction } from '../contronllers/HomeController.js';
import { middlewareController } from '../contronllers/middlewareController.js';
const router = express.Router();

// Cấu hình router
router.post("/Register", DangKyAction);
router.post("/Login", DangNhapAction);
router.post("/logout",middlewareController.verifyToKen,DangXuatAction);
//router.post("/",middlewareController.verifyToKen);

//REFRESH TOKEN
router.post("/refresh", requestRefreshToken);

// test
router.post("/test", middlewareController.verifyToKen,DangKyAction);

export default router;