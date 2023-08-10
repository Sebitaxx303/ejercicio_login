import {getConnection} from '../db/db.js'
import { queries } from '../db/queries.js'
import { sql } from '../db/db.js'
import bcrypt from 'bcryptjs'
import { createTokenAccess } from '../libs/jwt.js'

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
        res.json({message: "iniio de sesion exitoso"})
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
}
