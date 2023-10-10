import express from 'express';
import { DangKyAction,DangNhapAction } from '../contronllers/HomeController.js';

const router = express.Router();

// Cấu hình router
router.post("/Register", DangKyAction);
router.post("/Login", DangNhapAction);

export default router;