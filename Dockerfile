FROM node:20

RUN apt-get update && apt-get install -y \
    chromium \
    libnss3

USER root

RUN rm /etc/localtime
RUN ln -s /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime
RUN echo "America/Sao_Paulo" > /etc/timezone

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . ./

RUN npm install

CMD ["node","--env-file=.env","index.js"]
