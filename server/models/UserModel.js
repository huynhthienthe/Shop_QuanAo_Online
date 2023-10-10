import mongoose from "mongoose";
//
const UserSchema = new mongoose.Schema({
    TenDangNhap:{
        type: String,
        require: true,
        minlength: 6,
        maxlength: 10,
        unique: true
    }, 
    MatKhau:{
        type: String,
        require: true,
        minlength: 6,
    },
    Tuoi: {
        type: Number
      },
    SDT: {
        type: Number,
        // required: true
      },  
    Ho_TenDem: {
        type: String,
        maxLength: 50
      },
    Ten_ND: {
        type: String,
        maxLength: 50
      },
    Email: {
        type: String,
        maxLength: 50
      },
    GioiTinh: {
        type: String,
        maxLength: 5
      },
    ChucVu: {
        type: String,
        // require: true

      },
    Admin: {
        type: Boolean,
        default: false,
      }
},
    { timestamps: true }
);

export const UserModel = mongoose.model('User', UserSchema);