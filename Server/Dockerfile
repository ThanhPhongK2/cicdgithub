# Stage 1: Install Node deps
FROM node:20-alpine AS deps
WORKDIR /app
COPY Server/package*.json ./
RUN npm install

# Stage 2: Copy source & install Python
FROM node:20-alpine
WORKDIR /app

# Cài Python và pip
RUN apk add --no-cache python3 py3-pip

# Copy Node modules
COPY --from=deps /app/node_modules ./node_modules

# Copy Node source
COPY Server/index.js ./ 
COPY Server/package*.json ./ 

# Copy Python code
COPY Server/app /app/app

# Chuyển vào thư mục Python và cài deps
WORKDIR /app/app
RUN pip3 install --break-system-packages --no-cache-dir -r requirements.txt

# Trở lại thư mục chính Node
WORKDIR /app
EXPOSE 3000
CMD ["npm", "start"]
