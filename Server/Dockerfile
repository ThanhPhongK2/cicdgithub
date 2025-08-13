FROM node:20

WORKDIR /app

# Copy server và client code
COPY ./server ./server
COPY ./client ./client

# Cài dependencies cho server
WORKDIR /app/server
RUN npm install

# Cài dependencies cho client
WORKDIR /app/client
RUN npm install
RUN npm run build  # nếu client là React/Vue

# Chạy cả server và client
WORKDIR /app/server
CMD ["sh", "-c", "npm start & serve -s ../client/build -l 3001"]
