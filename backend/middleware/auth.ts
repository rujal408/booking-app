import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken'
import { SECRET_KEY } from "../constants/common";

interface AuthRequest extends Request{
    userId?:string
}

const authMiddleWare = async (req:AuthRequest, res:Response, next:NextFunction)=>{
    try{
        let token = req.headers.authorization
        if(token){
            token = token.split(' ')[1]
            let user = jwt.verify(token,SECRET_KEY) as JwtPayload
            req.userId = user.id
        }else{
            res.status(401).json({message:"Unauthorized user"})
        }
        next()
    }
    catch(err){}
}

export default authMiddleWare