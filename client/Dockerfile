# Stage 1: Build
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .

# Stage 2: Run
FROM node:20-alpine
WORKDIR /app
COPY --from=build /app .
CMD ["node", "index.js"]
