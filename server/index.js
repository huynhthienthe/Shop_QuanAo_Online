import express  from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';


// khai báo các router:
import HomeRouter from './routers/Home.js';
import userRouter from './routers/User.js';
import RoleRouter from './routers/Role.js';

// cấu hình website:
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3001;
const hostname = process.env.HOST_NAME

// setup DB ADDRESS:
const SERVER = process.env.SERVER_DB;
const Account_Name = process.env.Account_Name;
const Account_Pass = process.env.Account_Pass;
const IP = process.env.IP;
const URL_DB = SERVER + Account_Name + ":" + Account_Pass + IP;

//console.log(">>> check link connect mongodb: ",URL_DB);
//console.log(">>> check env: ",process.env); // remove this after you've confirmed it is working

 app.use(bodyParser.json({limit: '30mb'}));
 app.use(bodyParser.urlencoded({extends: true, limit: '30mb'}));
 // fix err: 'Access-Control-Allow-Origin'
 app.use(cors());
// tạo cookie - xuất dữ liệu dạng json
app.use(cookieParser());
app.use(express.json());

// router:
// >>> app(web): đường dẫn , handler
app.use('/Home',HomeRouter); // localhost:8080 || 3001/Home/..
app.use('/User',userRouter); // localhost:8080 || 3001/User/..
app.use('/Role',RoleRouter);// localhost:8080 || 3001/ChucVu/..

// connect DB
mongoose.connect(URL_DB,{useNewUrlParser: true, useUnifiedTopology: true})
.then(() =>{
console.log("đã kết nối tới mogodb !");
app.listen(PORT, hostname, () => {
  console.log(`Example app listening on port ${PORT}`)

  // để cho vui
 console.log(">>>",process.env.img);
 console.log('Xin chào ! \x1b[38;2;255;204;255m' + Account_Name.toUpperCase() +'\x1b[0m' + ' \nBạn đã kết nối db thành công !');
  // để cho vui
});
})
.catch(err => {
console.log('Lỗi đã xẩy ra: ',err);
});


