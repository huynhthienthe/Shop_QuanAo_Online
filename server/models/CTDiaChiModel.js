import mongoose from "mongoose";
//
const CTDiaChi_Schema = new mongoose.Schema({
    id_ND:{
        type: String,
        require: true,
        minlength: 6,
        maxlength: 10,
        unique: true
    }, 
    id_DiaChi:{
        type: String,
        require: true,
        minlength: 6,
    },
    TenDuong: {
        type: String,
        require: true,
      },
    SoNha: {
        type: String,
        // required: true
      },  
},
    { timestamps: true }
);

export const UserModel = mongoose.model('CT_DiaChi', CTDiaChi_Schema);