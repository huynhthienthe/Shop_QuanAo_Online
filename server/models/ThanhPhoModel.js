import mongoose from "mongoose";
//
const ThanhPho_Schema = new mongoose.Schema({
    TenThanhPho:{
        type: String,
        require: true,
        unique: true
    },
},
    { timestamps: true }
);

export const ThanhPhoModel = mongoose.model('ThanhPho', ThanhPho_Schema);