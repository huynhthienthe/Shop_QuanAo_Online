import mongoose from "mongoose";
//
const TinhThanh_Schema = new mongoose.Schema({
    TenTinhThanh:{
        type: String,
        require: true,
        unique: true
    },
},
    { timestamps: true }
);

export const TinhThanhModel = mongoose.model('TinhThanh', TinhThanh_Schema);