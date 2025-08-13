FROM node:18

WORKDIR /app
COPY package*.json ./
RUN node -v
RUN npm -v
RUN npm install
COPY . .
RUN npm run build
