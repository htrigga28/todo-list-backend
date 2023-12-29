import 'dotenv/config';
import express, { Router } from 'express';
import mongoose from 'mongoose';
import routes from './routes';

import fs from 'fs';

import os from 'os';

const app = express();

const PORT = 5000;

app.use(express.json());

app.use('/', routes());

const mongoUrl = 'mongodb://0.0.0.0:27017/todo-list-db';

mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log('Connected to mongodb database');
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  })
  .catch((error) => {
    console.log('Error connecting to database', error);
  });
