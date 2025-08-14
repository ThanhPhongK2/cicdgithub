# Stage 1: Build
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Serve static
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
