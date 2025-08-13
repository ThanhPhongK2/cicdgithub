FROM node:18

WORKDIR /app

# Copy server files
COPY package*.json ./
RUN npm install

# Copy server source
COPY . .

# Copy build client vào thư mục public
COPY ./public ./public

EXPOSE 3000
CMD ["node", "index.js"]
