import express from 'express';
import {
    CapNhat_ThanhPho_Action,
    CT_ThanhPho_Action,
    Xoa_ThanhPho_Action,
    DS_ThanhPho_Action,
    Tao_ThanhPho_Action,
} from '../contronllers/ThanhPhoController.js';

const router = express.Router();

// tạo chức vụ
router.post("/TaoThanhPho", Tao_ThanhPho_Action);

// danh sách chức vụ - xong
router.get("/DSThanhPho", DS_ThanhPho_Action);

// danh sách chức vụ - xong
router.delete("/XoaThanhPho", Xoa_ThanhPho_Action);

// danh sách chức vụ - xong
router.post("/CNThanhPho/:id", CapNhat_ThanhPho_Action);


export default router;