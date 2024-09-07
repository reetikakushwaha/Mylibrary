import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from 'cors';


import bookRoute from './route/Book.route.js';
import userRoute from './route/user.route.js';

// dotenv configration
dotenv.config();

// express app initialization
const app = express();

// middlewares
app.use(cors());
app.use(express.json())


const PORT = process.env.PORT || 4000;
const URI = process.env.mongoDBURI;

// connect to mongodb
try{
  mongoose.connect(URI,{ });
  console.log("connected to mongoDB")
}catch(error){
  console.log("Error: ", error);
}

// defining routes

app.use("/book", bookRoute);
app.use("/user", userRoute);


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})