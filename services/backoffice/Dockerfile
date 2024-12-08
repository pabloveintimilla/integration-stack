# syntax=docker.io/docker/dockerfile:1

FROM node:lts

RUN apt update
RUN mkdir backoffice

COPY . /backoffice

WORKDIR /backoffice

ENV NEXT_TELEMETRY_DISABLED=1
RUN npm install --include=dev

CMD ["npm", "run", "dev"]