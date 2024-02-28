const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes');
const errorHandler = require('./app/middlewares/error');
const db = require('./config/db');

dotenv.config();
db.connect();
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

routes(app);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is listening at http://localhost:${PORT}`));
