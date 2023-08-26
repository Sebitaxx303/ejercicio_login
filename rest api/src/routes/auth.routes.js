import { Router } from "express";
import { login, logout, profile, register } from "../controllers/users.controller.js";
import { requiredAuth } from "../middlewares/tokenValidation.js";
import {validatorSchema} from "../middlewares/validator.middlewares.js"
import { loginSchema, resgisterSchema } from "../schemas/auth.schema.js";

const router = new Router();

router.post('/register', validatorSchema(resgisterSchema), register);
router.post('/login',validatorSchema(loginSchema) ,login);
router.post('/logout',logout)
router.get('/verify')
router.get('/profile', requiredAuth,  profile)

export default router;