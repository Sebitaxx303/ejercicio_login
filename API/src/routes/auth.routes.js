import { Router } from "express";
import { VerifyToken, login, logout, profile, register } from "../controllers/users.controller.js";
import { requiredAuth } from "../middlewares/tokenValidation.js";
import {validatorSchema} from "../middlewares/validator.middlewares.js"
import { loginSchema, resgisterSchema } from "../schemas/auth.schema.js";

const router = new Router();

router.post('/register', validatorSchema(resgisterSchema), register);
router.post('/login',validatorSchema(loginSchema) ,login);
router.post('/logout',logout)
router.get('/verify', VerifyToken)
router.get('/profile', requiredAuth,  profile)

export default router;