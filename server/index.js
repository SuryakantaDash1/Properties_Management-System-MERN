import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import cookieParser from 'cookie-parser'

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
});

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(cookieParser());

app.listen(PORT, ()=> {
    console.log(`server is running on port ${PORT}`);
})


// path: api/index.js

app.use("/api/user", userRouter);
app.use('/api/auth', authRouter);


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
});