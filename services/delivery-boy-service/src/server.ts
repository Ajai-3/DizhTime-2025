import htttp from 'http';
import mongoose from 'mongoose';
import app from './app';

const PORT = process.env.PORT || 3003;
const server = htttp.createServer(app);


mongoose.connect(process.env.MONGO_URI!)
    .then(() => {
        console.log('MongoDB connected');
        server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((error) => console.error('MongoDB connection error:', error));