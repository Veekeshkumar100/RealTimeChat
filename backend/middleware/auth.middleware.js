

export const jwtVerify=async(req,res,next)=>{
    try {
        const token= req.cookies.token || req.headers("Authorization")?.split(" ")[1];
        if(!token){
            return res.status(401).json({message:"Unauthorized, no token"})
        }
        const decoded= jwt.verify(token,process.env.JWT_SECRET);
           

        const currentUser= await User.findById(decoded.id).select("-password");

       if(!currentUser){
           return res.status(404).json({message:"User not found"});
       }
         req.user=currentUser;

            next();

        } catch (error) {
            return res.status(401).json({message:"Unauthorized, invalid token"});
        }
    }
