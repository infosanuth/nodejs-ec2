import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import connectDB from './configs/db.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
const port = process.env.PORT || 8000;

await connectDB()

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/users', userRoutes);

//listen to the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
