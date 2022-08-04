FROM alpine:latest
RUN apk add --no-cache nodejs npm


WORKDIR /app

COPY package.json /app/


COPY . /app


RUN npm install


EXPOSE 9090


ENTRYPOINT ["node"]

CMD ["server.js"]