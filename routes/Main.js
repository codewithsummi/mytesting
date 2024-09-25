import express from 'express';
const router=express.Router();
//define our routes
router.get("/",(req,res)=>{
    res.send("First Route");
})
//params 
router.get("/myproducts/:cat",(req,res)=>{
    let cat=req.params.cat;
    res.send(`${cat} products`);
})
//optional params
router.get("/products/:cat/:scat?",(req,res)=>{
    let cat=req.params.cat;
    let scat=req.params.scat;
    if(scat!=undefined){
        res.send(`${cat} and ${scat} products`);
    }
    else{
    res.send(`${cat} products`);
    }
})
router.post("/products",(req,res)=>{
    res.send("Post route");
})
router.delete("/products",(req,res)=>{
    res.send("Delete route");
})
router.put("/products",(req,res)=>{
    res.send("PUT route");
})

export default router;