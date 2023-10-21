import { Router } from "express";
import { requiredAuth } from '../middlewares/tokenValidation.js'
import { createTasks, deleteTasks, getTask, getTasks, updateTasks } from "../controllers/task.controller.js";
import { validatorSchema } from "../middlewares/validator.middlewares.js";
import { createTaskSchema } from "../schemas/task.schema.js";

const router = Router();

router.get('/task', requiredAuth,getTasks);
router.get('/task/:id', requiredAuth, getTask);
router.post('/task', requiredAuth, validatorSchema(createTaskSchema), createTasks);
router.put('/task/:id', requiredAuth ,updateTasks);
router.delete('/task/:id', requiredAuth ,deleteTasks);

export default router