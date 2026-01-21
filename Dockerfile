# Use lightweight Node image
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copy dependency files
COPY src/package*.json ./

# Install dependencies
RUN npm install --production

# Copy app source code
COPY src .

# Change ownership
RUN chown -R appuser:appgroup /app

# Switch to non-root user
USER appuser

# App runs on port 5000 (not exposed)
EXPOSE 5000

# Start application
CMD ["node", "index.js"]