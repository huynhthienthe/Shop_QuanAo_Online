import express from 'express';
import {DS_ChucVu_Action, Tao_ChucVu_Action,} from '../contronllers/ChucVuController.js';

const router = express.Router();

// tạo chức vụ
router.post("/CreateRole", Tao_ChucVu_Action);

// danh sách chức vụ - xong
router.get("/GetAllRole", DS_ChucVu_Action);

export default router;