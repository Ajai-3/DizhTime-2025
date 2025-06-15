
import http from 'http';
import app from './app';
import connectDB from './config/db';
connectDB();


const PORT = process.env.PORT || 3005;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
