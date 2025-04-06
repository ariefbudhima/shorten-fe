# Tahap build
FROM node:23-alpine AS builder

WORKDIR /app

# Salin package files
COPY package*.json ./

# Install semua dependency
RUN npm ci

# Salin semua source code
COPY . .

# Set ENV supaya build log verbose
ENV NODE_OPTIONS="--trace-warnings"
ENV DEBUG="next:*,middleware:*"

# Build aplikasi Next.js
RUN npm run build

# Tahap production
FROM node:23-alpine AS runner

WORKDIR /app

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
ENV DEBUG=next:*,middleware:*

# Salin hanya dependencies yang dibutuhkan
COPY package*.json ./
RUN npm ci --omit=dev

# Salin hasil build dari stage sebelumnya
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.* ./

# Expose port aplikasi
EXPOSE 3000

# Jalankan server Next.js dengan log middleware aktif
CMD ["sh", "-c", "NODE_OPTIONS='--trace-warnings' npm start"]
