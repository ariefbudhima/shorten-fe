# Tahap build
FROM node:23-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build aplikasi
RUN npm run build

# Tahap production
FROM node:23-alpine AS runner

WORKDIR /app

# Set environment ke production
ENV NODE_ENV=production
# Bind to all interfaces - add these two lines
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Copy package files
COPY package*.json ./

# Install dependencies production saja
RUN npm ci --omit=dev

# Copy hasil build dari tahap builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./

# Expose port
EXPOSE 3000

# Command untuk menjalankan aplikasi
# Modify this to explicitly set the host
CMD ["npm", "start", "--", "-H", "0.0.0.0"]