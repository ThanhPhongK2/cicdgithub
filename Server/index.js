import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import AuthRoute from './Routes/AuthRoute.js';
import UserRoute from './Routes/UserRoute.js';
import PostRoute from './Routes/PostRoute.js';
import UploadRoute from './Routes/UploadRoute.js';

dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://13.231.252.154', // frontend URL
  credentials: true
}));

console.log("🚀 Backend deployed successfully at", new Date().toLocaleString());


// Serve static files
app.use(express.static('public'));
app.use('/images', express.static('images'));

// Middleware
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// Gắn header version cho mọi request
app.use((req, res, next) => {
  res.setHeader("X-Backend-Version", "1.0.1");
  next();
});

// Routes
app.use('/auth', AuthRoute);
app.use('/user', UserRoute);
app.use('/post', PostRoute);
app.use('/upload', UploadRoute);

app.get('/version', (req, res) => {
  res.json({
    status: 'ok',
    version: '1.0.0.6',
    timestamp: new Date().toISOString(),
  });
});

// Route test root
app.get('/', (req, res) => {
  res.send('Backend API is running');
});


// Database & Server start
mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`✅ Server listening at http://0.0.0.0:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ Database connection error:', error);
  });

  export default app;

