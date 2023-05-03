import 'dotenv/config'
import express from "express";
import './database/connectDB.js'
import authRouter from './routes/auth.route.js'

const app = express()

//para poder ver los req en json
app.use(express.json())

//Routes in routes
app.use('/api/v1/auth',authRouter);

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log("hola"))

