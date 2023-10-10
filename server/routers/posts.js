import express from 'express';
import { getPosts,createPost } from '../contronllers/posts.js';
import { Get_LoginCotronller,Get_HomeCotronller } from '../contronllers/HomeController.js';

const router = express.Router();

// cấu hình router
router.get('/',getPosts); 
router.post('/', createPost);
router.get('/HomePage',Get_HomeCotronller); 
router.get('/LoginPage',Get_LoginCotronller);
// router.get('/2',getPosts);
// router.get('/3',getPosts);

export default router;