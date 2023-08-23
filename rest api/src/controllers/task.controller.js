import {getConnection} from '../db/db.js'
import { queries } from '../db/queries.js'
import { sql } from '../db/db.js'

export const getTasks = async (req,res) =>{ 
    try {
        let tuser = req.user._id
        const pool = await getConnection()
        const results = await pool
        .request()
        .input('tuser', tuser )
        .query(queries.getTasks)
        res.json(results.recordsets)
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
}
export const getTask = async (req,res) =>{
    const {id} = req.params
    let tuser = req.user._id
    try {
        const pool = await getConnection()
        const results = await pool
        .request()
        .input('id',id)
        .input('tuser',tuser)
        .query(queries.getTask)
        res.json(results.recordsets)
    } catch (error) {
        res.status(500).json({ message: error.message});
    }  
}
export const createTasks = async (req,res) =>{
    try {
        let tuser =req.user._id
        const {title,descrp} = req.body
        const pool = await getConnection();
        const results = await pool
        .request()
        .input('title',sql.VarChar,title)
        .input('descrp',sql.VarChar,descrp)
        .input('tuser', sql.Int, tuser)
        .query(queries.createtasks)  
        res.json(results)
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
}
export const updateTasks = async (req,res) =>{
    let tuser = req.user._id
    const { title, descrp } = req.body
    const { id } = req.params
    try {
        const pool = await getConnection()
        const results = await pool
        .request()
        .input('tuser',tuser)
        .input('id',id)
        .input('title',sql.VarChar,title)
        .input('descrp', sql.VarChar, descrp)
        .query(queries.updateTasks)
        res.json({results})
    } catch (error) {
        res.status(500).json({ message: error.message});
    }  
}
export const deleteTasks = async (req,res) =>{
    let tuser = req.user._id
    const {id} = req.params
    try {
        const pool = await getConnection()
        const results = await pool
        .request()
        .input('tuser',tuser)
        .input('id',id)
        .query(queries.deleteTasks)
        res.json({results})
    } catch (error) {
        res.status(500).json({ message: error.message});
    }   
}