import {getConnection} from '../db/db.js'
import { queries } from '../db/queries.js'
import { sql } from '../db/db.js'
import bcrypt from 'bcryptjs'

export const register = async (req,res) => {   
    const {username, email, userpassword} = req.body
    try {
        const passwordHash = await bcrypt.hash(userpassword, 10)
        const pool = await getConnection();
        await pool
        .request()
        .input("username", sql.VarChar, username)
        .input("email", sql.VarChar, email)
        .input("userpassword", sql.VarChar, passwordHash)
        .query(queries.register);
        return res.status(201).json({ message: "Registro exitoso"})
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
}


// export const login = async (req,res) => {
//     try {
//         res.send('logeando')
//     } catch (error) {
//         res.status(500);
//     }
// }