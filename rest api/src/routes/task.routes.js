import { Router } from "express";
import { requiredAuth } from '../middlewares/tokenValidation.js'
import { createTasks, deleteTasks, getTask, getTasks, updateTasks } from "../controllers/task.controller.js";

const router = Router();

router.get('/task', requiredAuth,getTasks);
router.get('/task/:id', requiredAuth, getTask);
router.post('/task', requiredAuth, createTasks);
router.put('/task/:id', requiredAuth ,updateTasks);
router.delete('/task/:id', requiredAuth ,deleteTasks);

export default router