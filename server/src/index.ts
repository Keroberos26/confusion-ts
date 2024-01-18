import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import routes from './routes';
import { connect } from './config/db';

dotenv.config();

connect();

const PORT = process.env.PORT || 5000;
const app: Express = express();

app.use(express.json());

routes(app);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
