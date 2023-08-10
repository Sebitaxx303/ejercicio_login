import morgan from "morgan";
import express from "express";
import authRoutes from './routes/auth.routes.js'
import config from './config.js';
import cookieParser from 'cookie-parser'

const app = express()

app.set('port',config.port);
app.set('secret',config.secret);
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser())
app.use("/api",authRoutes);

export default app