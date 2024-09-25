import express from 'express';//import express 
import MainRoutes from './routes/Main.js';
import ProductRoutes from './routes/Product.js';
import AuthRoutes from './routes/Auth.js';
const PORT=7788;//define port 
const app=express();// instance of express 
//define global middleware 
  const mytitle=(req,res,next)=>{
      req.title="Evalue Server";
      next();
  }
  app.use(mytitle);//call middleware
//call routes 
app.use("/",MainRoutes);
app.use("/api/auth",AuthRoutes);
app.use("/api/products",ProductRoutes);
//handle 404
app.all('*',(req,res)=>{
    res.status(404).send("Route not found");
})
app.listen(PORT,(err)=>{
    if(err) throw err;
    else console.log(`Work on ${PORT}`);
})