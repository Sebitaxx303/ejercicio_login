import morgan from "morgan";
import express from "express";
import authRoutes from './routes/auth.routes.js'
import taskRoutes from './routes/task.routes.js'
import config from './config.js';
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()
app.use(cors());
app.set('port',config.port);
app.set('secret',config.secret);
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser())
app.use("/api",authRoutes);
app.use("/api",taskRoutes);

export default app