import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import nodemon from "nodemon";
import dotenv from 'dotenv';  

import studenRoutes from './routes/students.js';
// here import is default mode as in package.json "'type':'module'" is set... in our nodejs project it was not present, so the default mode was used to require


const app = express();
app.use(cors());      // Always refer to cors before routes are initialized

dotenv.config();

app.use(express.json());
app.use('/students',studenRoutes);

//app.use(bodyParser.json({limit:"20mb", extended : true }));   //
//app.use(bodyParser.urlencoded({limit:"20mb", extended : true })); 



const PORT = process.env.PORT || 5000 ;

mongoose.connect(process.env.DB_CONNECT,()=>console.log('Connected to DB'));

app.listen(PORT,()=> console.log(`Connection is established and running on port: ${PORT}`));



