FROM node:16.14.0-alpine AS builder
WORKDIR /PMS-FRONTEND
COPY . .
RUN npm install
RUN npm run build --prod
FROM nginx:latest
COPY --from=builder /PMS-FRONTEND/dist/pms-frontend/ /usr/share/nginx/html
EXPOSE 4200
