#backend
FROM node:18.12.1-alpine as build
RUN npm install -g npm@latest
WORKDIR /backend
COPY package.json /backend/package.json
RUN npm install
COPY . /backend

FROM build as test
CMD ["npm", "run", "test"]

FROM build as dev
CMD ["npm", "run", "dev"]