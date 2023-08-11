import {getConnection} from '../db/db.js'
import { queries } from '../db/queries.js'
import { sql } from '../db/db.js'

export const getTasks = async (req,res) =>{
    try {
        const pool = await getConnection()
        const results = await pool
        .request()
        .query(queries.getTasks)
        res.json({results})
    } catch (error) {
        
    }
}
export const getTask = async (req,res) =>{
    const {id} = req.params
    try {
        const pool = await getConnection()
        const results = await pool
        .request()
        .input('id',id)
        .query(queries.getTask)
        res.json({results})
    } catch (error) {
        res.status(500).json({ message: error.message});
    }  
}
export const createTasks = async (req,res) =>{
    try {
        const {title,descrp} = req.body
        const pool = await getConnection();
        const results = await pool
        .request()
        .input('title',sql.VarChar,title)
        .input('descrp',sql.VarChar,descrp)
        .query(queries.createtasks)  
        res.json(results)
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
}
export const updateTasks = async (req,res) =>{
    const { title, descrp } = req.body
    const { id } = req.params
    try {
        const pool = await getConnection()
        const results = await pool
        .request()
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
    const {id} = req.params
    try {
        const pool = await getConnection()
        const results = await pool
        .request()
        .input('id',id)
        .query(queries.deleteTasks)
        res.json({results})
    } catch (error) {
        res.status(500).json({ message: error.message});
    }   
}