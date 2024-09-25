import express from 'express';
import AuthMiddleware from '../middleware/AuthMiddleware.js';
const router=express.Router();
router.post("/login",AuthMiddleware(),(req,res)=>{
    res.send("Login Succes")
})
router.post("/register",(req,res)=>{
    res.send("Register Succes")
})
export default router;