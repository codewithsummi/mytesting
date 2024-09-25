import express from 'express';
import AuthMiddleware from '../middleware/AuthMiddleware.js';
const router=express.Router();
router.get('/getproducts',AuthMiddleware(),(req,res)=>{
    res.send("Get ALl Products"+req.title);
})
router.post('/addproducts',(req,res)=>{
    res.send(" Product Added");
})
export default router;