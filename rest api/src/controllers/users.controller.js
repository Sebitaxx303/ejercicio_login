import {getConnection} from '../db/db.js'
import { queries } from '../db/queries.js'
import { sql } from '../db/db.js'
import bcrypt from 'bcryptjs'
import { createTokenAccess } from '../libs/jwt.js'
import  jwt  from 'jsonwebtoken'
import app from '../app.js'

export const register = async (req,res) => {   
    const {username, email, userpassword} = req.body
    try {
        const passwordHash = await bcrypt.hash(userpassword, 10)
        const pool = await getConnection();
        const results = await pool
        .request()
        .input("username", sql.VarChar, username)
        .input("email", sql.VarChar, email)
        .input("userpassword", sql.VarChar, passwordHash)
        .query(queries.register)
        let id = results.recordsets[0]
        id = id[0].id
        const token = await createTokenAccess({_id: id});
        res.cookie('token',token)
        res.json({message: 'registro exitoso'})
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
}

export const login = async (req,res) => {   
    const {email, userpassword} = req.body

    try {
        const pool = await getConnection();
        const results = await pool
        .request()
        .input("email", sql.VarChar, email)
        .input("userpassword", sql.VarChar, userpassword)
        .query(queries.login)

        let emailFound = results.recordsets[0];
        emailFound= emailFound[0].email;
        if(emailFound != email) return res.status(400).json({ message: 'user not found'})

        let passwordFound = results.recordsets[0]
        passwordFound= passwordFound[0].userpassword
        const passMatch = await bcrypt.compare(userpassword, passwordFound);
        if(!passMatch)return res.status(400).json({ message: 'Error in cedentials'})
        
        let id = results.recordsets[0]
        id = id[0].id
        const token = await createTokenAccess({_id: id});
        res.cookie('token',token)
        res.json({message: "inicio de sesión exitoso"})
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
}

export const logout = (req,res) => {
    res.cookie('token','', {expires : new Date(0),
    });
    return res.sendStatus(200);
}

export const profile = async (req,res) => {
    let id = req.user._id
    const pool = await getConnection()
    const results = await pool
    .request()
    .input('id', id )
    .query(queries.profile)
    res.json(results.recordsets)
}

export const VerifyToken = async (req, res) => {
    const { token } = req.cookies
    if(!token) return res.status(400).json({ message: 'unathorized'})

    jwt.verify(token, app.get('secret'), async (err, user) =>{
        if(err) return res.status(401).json({message: 'unauthorized'})
        const id = user._id
        const pool = await getConnection();
        const results = await pool
        .request()
        .input("id", sql.Int, id)
        .query(queries.profile)
    
        if(!results) return res.status(401).json({message: 'unauthorized'})

        return res.json(
            results.recordsets
        )
    })
}
