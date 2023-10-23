import mongoose from "mongoose";
//
const DiaChiND_Schema = new mongoose.Schema({
    // id_DiaChi:{
    //     type: Number,
    //     require: true,
    //     unique: true
    // }, 
    TenDiaChi:{
        type: String,
        require: true,
    },
    id_ThanhPho: {
        type: Number,
        require: true,
        unique: true
      },
    id_Tinh: {
        type: Number,
        require: true,
        unique: true
      },  
},
    { timestamps: true }
);

export const UserModel = mongoose.model('DiaChiND', DiaChiND_Schema);