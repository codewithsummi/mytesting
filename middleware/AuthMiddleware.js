const AuthMiddleware=()=>{
   return (req,res,next)=>{
       const name=req.headers['name'];
       if(name==="sumit"){
           next()
       }
       else{
           res.send("Not authenticate please provide a name");
       }
   }
}
export default AuthMiddleware;