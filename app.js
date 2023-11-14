import express, { json } from 'express';
import logger from 'morgan';
import cors from 'cors';

import authRouter from './routes/authRoutes.js';

const app = express();

const formatLogger = app.get('evn') === 'development' ? 'dev' : 'short';
app.use(logger(formatLogger));
app.use(cors());
app.use(json());

app.use('/api/users', authRouter);

app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
});

export default app;
