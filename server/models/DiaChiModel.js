import mongoose from "mongoose";
//
const DiaChi_Schema = new mongoose.Schema({
    TenDiaChi:{
        type: String,
        require: true,
    },
    TenDuong:{
        type: String,
        require: true,
    },
    SoNha:{
        type: String,
        require: true,
    },
    Quan:{
        type: String
    },
    Huyen:{
        type: String
    },
    id_ThanhPho: {
        type: String,
        require: true,
      },
    id_Tinh: {
        type: String,
        require: true,
      },
    id_ND: {
        type: String,
        require: true,
      },
},
    { timestamps: true }
);

export const DiachiModel = mongoose.model('DiaChi', DiaChi_Schema);