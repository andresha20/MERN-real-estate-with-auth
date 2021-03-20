import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyparser from 'body-parser';
// Database
import dbConnection from './Connection/database.js'
// Routes
import routes from './Routes/routes.js';
import userRoutes from './Routes/userRoutes.js';

const app = express();

dotenv.config({path: 'config.env'});

app.use(bodyparser.json({ limit: '20 mb', extended: true }))
app.use(bodyparser.urlencoded({ limit: '20 mb', extended: true }))
app.use(cors());

// Database connection
dbConnection();

app.use('/houses', routes);
app.use('/users', userRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));