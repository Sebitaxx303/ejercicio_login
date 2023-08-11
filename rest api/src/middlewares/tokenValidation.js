import jwt from 'jsonwebtoken'
import {TOKEN_SECRET} from '../config.js'

export const requiredAuth = (req,res,next) => {
    const {token} = req.cookies;
    // console.log(token);
    if(!token)
    return res.status(401).json({message: 'no token, authorization denied'})
    jwt.verify(token, TOKEN_SECRET, (err,user) =>{
        if(err) res.status(403).jso({message: "invalid token"})    

    req.user = user
    next();
    })
}