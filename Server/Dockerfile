# Stage 1: Cài deps Node
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./       
RUN npm install

# Stage 2: Copy source + cài Python
FROM node:20-alpine
WORKDIR /app

# Cài Python và pip
RUN apk add --no-cache python3 py3-pip

# Copy Node modules từ stage 1
COPY --from=deps /app/node_modules ./node_modules

# Copy source Node.js
COPY index.js ./ 
COPY Controllers ./Controllers
COPY Middleware ./Middleware
COPY Models ./Models
COPY Routes ./Routes
COPY public ./public
COPY package*.json ./

# Copy code Python
COPY app ./app

# Cài deps Python (nếu có requirements.txt)
WORKDIR /app/app
RUN test -f requirements.txt && pip3 install --no-cache-dir -r requirements.txt || true

# Quay lại thư mục chính Node
WORKDIR /app

# Mở port
EXPOSE 3000

# Start Node app (và có thể chạy Python song song nếu cần)
CMD ["npm", "start"]
