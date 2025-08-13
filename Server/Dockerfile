FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000
CMD ["node", "index.js"]  # đổi index.js thành file server chính của bạn
