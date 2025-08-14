FROM node:16-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy only package files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the rest of the application code
COPY . .

# Environment variables
ENV NODE_ENV=production

# Expose port
EXPOSE 8080

# Run the app
CMD ["node", "index.js"]
