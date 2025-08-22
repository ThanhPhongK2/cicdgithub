# --------------------------
# Stage 1: Install Node deps
# --------------------------
FROM node:20-alpine AS deps

# Thiết lập thư mục làm việc
WORKDIR /app

# Copy package.json + package-lock.json để cài dependencies
COPY Server/package*.json ./
RUN npm install

# --------------------------
# Stage 2: Copy source & install Python
# --------------------------
FROM node:20-alpine

# Thiết lập thư mục làm việc
WORKDIR /app

# Cài Python và pip
RUN apk add --no-cache python3 py3-pip bash

# Copy Node modules từ stage trước
COPY --from=deps /app/node_modules ./node_modules

# Copy Node source
COPY Server/index.js ./ 
COPY Server/package*.json ./ 

# Copy Python app
COPY Server/app ./app

# Cài Python dependencies
WORKDIR /app/app
# Nếu requirements.txt chưa tồn tại, tạo trống để tránh lỗi
RUN test -f requirements.txt || touch requirements.txt
RUN pip3 install --no-cache-dir -r requirements.txt --break-system-packages

# Trở lại thư mục Node chính
WORKDIR /app

# Expose port của Node app
EXPOSE 3000

# Chạy Node
CMD ["npm", "start"]
