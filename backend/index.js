// server.js
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/db');

// import route chính xác
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000', // fallback
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Route chính
app.use('/api/user', userRoutes); // để có POST /api/user/login

// Cổng
const PORT = process.env.PORT || 8080;

// Kết nối MongoDB và chạy server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log('Connected to DB');
        console.log(`Server is running on port ${PORT}`);
    });
});
