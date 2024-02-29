const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes');
const errorHandler = require('./app/middlewares/error');
const db = require('./config/db');
const cookieParser = require('cookie-parser');

dotenv.config();
db.connect();
const PORT = process.env.PORT || 3030;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKEY));

routes(app);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is listening at http://localhost:${PORT}`));
