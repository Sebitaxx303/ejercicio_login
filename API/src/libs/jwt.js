import jwt from 'jsonwebtoken'
import app from '../app.js'

export function createTokenAccess(payload){
    return new Promise ((resolve,reject) =>{
        jwt.sign(
            payload,
            app.get('secret'),
            {
                expiresIn: '1d'
            },
            (err,token) => {
                if(err) reject(err);
                resolve(token)
            }
            )
        })
    }