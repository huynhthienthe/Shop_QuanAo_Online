import mongoose from "mongoose";
//
const ChucVu_Schema = new mongoose.Schema({
    TenChucVu: {
        type: String,
        require: true,
        unique: true
      },
},
    { timestamps: true }
);

export const UserModel = mongoose.model('ChuVu', ChucVu_Schema);