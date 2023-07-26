import morgan from "morgan";
import express from "express";
import config from './config.js';

const app = express();

app.set('port',config.port)
app.use(express.json())
app.use(morgan('dev'))

export default app