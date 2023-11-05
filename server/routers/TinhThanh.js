import express from 'express';
import {
    CapNhat_TinhThanh_Action,
    CT_TinhThanh_Action,
    Xoa_TinhThanh_Action,
    DS_TinhThanh_Action,
    Tao_TinhThanh_Action,
} from '../contronllers/TinhThanhController.js';

const router = express.Router();

// tạo chức vụ
router.post("/TaoTinhThanh", Tao_TinhThanh_Action);

// danh sách chức vụ - xong
router.get("/DSTinhThanh", DS_TinhThanh_Action);

// danh sách chức vụ - xong
router.delete("/XoaTinhThanh", Xoa_TinhThanh_Action);

// danh sách chức vụ - xong
router.post("/CNTinhThanh/:id", CapNhat_TinhThanh_Action);


export default router;