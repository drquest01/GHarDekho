import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import userRouter from './Routes/user.route.js';

import authRouter from './Routes/auth.route.js';
import cookieParser from 'cookie-parser';
import listingRouter from './Routes/listing.route.js'
dotenv.config();

mongoose.connect("mongodb+srv://jangde737:6261677513@ghardekho.pecdkhj.mongodb.net/GharDekho?retryWrites=true&w=majority")
.then(() => {
    console.log("Connected to MongoDb");
}).catch((error)=>{
    console.log(error);
})

const app = express();
app.use(express.json());

app.use(cookieParser());

app.listen(3000, () => {
    console.log('server is running on port 3000');
});

app.use('/server/user',userRouter);
app.use('/server/auth',authRouter);
app.use('/server/listing',listingRouter);
app.use((err,req,res,next) => {
    
    const statusCode=err.statusCode || 500;
    const message=err.message || 'Internal Server Error';
    return  res.status(statusCode).json({
        succes:false,
        statusCode,
        message,
    });

});


