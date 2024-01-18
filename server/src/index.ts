import express, { Express, NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import routes from './routes';
import { connect } from './config/db';
import error from './app/middlewares/error';

dotenv.config();

connect();

const PORT = process.env.PORT || 5000;
const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

app.use(error);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
