import express from 'express';
import cors from 'cors';
import sequelize from './config/db.js';
import dotenv from 'dotenv';

import adminRoutes from './routes/adminRoutes.js';
import studentRoutes from './routes/studentRoutes.js';
import markRoutes from './routes/markRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/admin', adminRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/marks', markRoutes);

sequelize.sync().then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server is running on port ${process.env.PORT || 5000}`);
    });
});
