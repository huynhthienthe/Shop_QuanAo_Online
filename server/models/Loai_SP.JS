import mongoose from "mongoose";
//
const LoaiSP_Schema = new mongoose.Schema({
    Ten_Loai: {
        type: String,
        require: true,
        unique: true
      },
},
    { timestamps: true }
);

export const UserModel = mongoose.model('ChuVu', LoaiSP_Schema);