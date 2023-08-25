import jwt from 'jsonwebtoken'
import app from '../app.js';
export const requiredAuth = (req,res,next) => {
    const {token} = req.cookies;
    if(!token)
    return res.status(401).json({message: 'no token, authorization denied'})
    jwt.verify(token, app.get('secret'), (err,user) =>{
        if(err) res.status(403).json({message: "invalid token"})    
        req.user = user
        next();
    })
}