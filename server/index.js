// import express from "express";
// import bodyParser from "body-parser";
// import cors from "cors";
// import mongoose from "mongoose";
// import cookieParser from "cookie-parser";
// import dotenv from 'dotenv';

// // Khai báo các router
// import posts from "./routers/posts.js";
// import HomeRouter from './routers/Home.js';

// // Cấu hình website:
// const app = express();
// dotenv.config();
// const PORT = process.env.PORT || 3000;
// const hostname = process.env.HOST_NAME || "localhost";
// const URL = process.env.URL_DB;

// app.use(bodyParser.json({ limit: '30mb' }));
// app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));
// app.use(cors());
// app.use(cookieParser());
// app.use(express.json());

// // Router
// app.use('/Home', HomeRouter);
// app.use('/', posts);

// // Kết nối database
// mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log("Đã kết nối tới MongoDB!");
//     app.listen(PORT, hostname, () => {
//       console.log(`Example app listening on port ${PORT}`);
//     });
//   })
//   .catch(err => {
//     console.log('Lỗi đã xảy ra: ', err);
// });

import express  from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';


// khai báo các router
import posts from "./routers/posts.js";
import HomeRouter from './routers/Home.js';
import userRouter from './routers/User.js';

// cấu hình website:
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
const hostname = process.env.HOST_NAME;
const URL = process.env.URL_DB;

//console.log(">>> check link connect mongodb: ",process.env.URL_DB);
//console.log(">>> check env: ",process.env); // remove this after you've confirmed it is working

 app.use(bodyParser.json({limit: '30mb'}));
 app.use(bodyParser.urlencoded({extends: true, limit: '30mb'}));
 app.use(cors()); // fix err: 'Access-Control-Allow-Origin'

// tạo cookie - xuất dữ liệu dạng json
app.use(cookieParser());
app.use(express.json());

// router:
//>>> app(web): đường dẫn , handler
app.use('/Home',HomeRouter); // localhost:8080/Home/..
app.use('/User',userRouter); // localhost:8080/User/..


// app.use('/HomePage',posts); // localhost:8080/HomePage/port
// app.use('/Login',posts);

// connect database
mongoose.connect(URL,{useNewUrlParser: true, useUnifiedTopology: true})
.then(() =>{
//
console.log("đã kết nối tới mogodb !");
app.listen(PORT, hostname, () => {
  console.log(`Example app listening on port ${PORT}`)
 console.log(">>>",process.env.image);
});

})
.catch(err => {
//
console.log('Lỗi đã xẩy ra: ',err);
});


