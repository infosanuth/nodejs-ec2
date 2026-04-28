import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './configs/db.js';

const app = express();
const port = process.env.PORT || 8000;

await connectDB()

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

//listen to the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
