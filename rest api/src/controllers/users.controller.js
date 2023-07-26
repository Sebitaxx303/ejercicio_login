import {getConnection} from '../db/db.js'
import { queries } from '../db/queries.js'
import { sql } from '../db/db.js'
import bcrypt from 'bcryptjs'

export const register = async (req,res) => {
    const {username, email, userPassword} = req.body
    if (username == null || email == null || userPassword == null ) {
        return res.status(400).json({msg: "petición erronea, por favor llena todos los campos"})
    }
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input("username", sql.VarChar, username)
        .input("email", sql.VarChar, email)
        .input("userpassword", sql.VarChar, userPassword)
        .query(queries.register);
        res.json({username, email})
    } catch (error) {
        res.status(500);
    }
}
export const login = async (req,res) => {
    try {
        res.send('logeando')
    } catch (error) {
        res.status(500);
    }
}