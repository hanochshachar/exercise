FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
FROM node:12
WORKDIR /dist
ENV PORT 80
# COPY ormconfig.json ./dist/
COPY package*.json .
RUN npm i
RUN npm run build
COPY . .
CMD node server.js
EXPOSE 9090