import express from 'express';
import {  DS_NguoiDung_Action,Xoa_NguoiDung_Action } from '../contronllers/UsersController.js';

const router = express.Router();

// Cấu hình router
router.get("/GetAllUser", DS_NguoiDung_Action);
router.delete("/:id", Xoa_NguoiDung_Action);


export default router;