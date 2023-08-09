import jwt from 'jsonwebtoken'
import app from "./app.js"
app.get('secret')

export function createTokenAccess(payload){
    return new Promise((resolve,reject) =>{
        jwt.sign(
            payload,
            secret,
            {
                expiresIn: "1d"
            },
            (err, token) => {
                if(err) reject(err);
                resolve(token)
            }
        )

    })
};