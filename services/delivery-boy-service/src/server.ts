import http from 'http';
import mongoose from 'mongoose';
import app from './app';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3003;
const server = http.createServer(app);


mongoose.connect(process.env.DATABASE_URL!)
    .then(() => {
        console.log('MongoDB connected');
        server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((error) => console.error('MongoDB connection error:', error));