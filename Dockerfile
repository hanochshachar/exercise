FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
FROM node:12
WORKDIR /dist
ENV PORT 80
COPY ormconfig.json ./dist/
COPY package*.json .
RUN npm run build
RUN npm i
COPY . .
CMD node server.js
EXPOSE 9090