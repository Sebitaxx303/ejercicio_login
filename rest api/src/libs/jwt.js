import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../config.js'
import { createTokenAccess } from '../libs/jwt.js'

export function createTokenAccess(payload){
    return new Promise((resolve,reject) =>{
        jwt.sign(
            payload,
            TOKEN_SECRET,
            {
                expiresIn: "1d"
            },
            (err, token) => {
                if(err) reject(err);
                resolve(token)


            }
        )
    })
}