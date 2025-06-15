
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());

// Sample route
app.get('/health', (_req, res) => {
  res.status(200).send('API is running!');
});

export default app;
