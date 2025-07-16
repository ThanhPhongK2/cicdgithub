// server.js hoặc index.js
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/db');

// Kiểm tra nếu routes bạn đang dùng là ./routes/index.js
const router = require('./routes'); // nếu bạn export tất cả route ở đây

const app = express();

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://18.183.36.16:3000/', // fallback cho local dev
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Sử dụng router chính
app.use('/api', router); // Ví dụ: POST /api/user/login

// PORT
const PORT = process.env.PORT || 8080;

// Kết nối MongoDB và khởi chạy server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log('✅ Connected to MongoDB');
        console.log(`🚀 Server is running at http://localhost:${PORT}`);
    });
}).catch((err) => {
    console.error('❌ Failed to connect to DB:', err);
});
