#backend
FROM node:16.15.1-alpine
RUN npm install -g npm@latest
RUN npm install -g nodemon
WORKDIR /backend
COPY package.json /backend/package.json
RUN npm install
COPY . /backend
EXPOSE 3001
CMD ["npm", "start"]