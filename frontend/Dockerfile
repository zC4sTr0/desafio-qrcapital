#frontend
FROM node:18-alpine
RUN npm install -g npm@latest create-react-app
WORKDIR /frontend
COPY package.json /frontend/package.json
RUN npm install
COPY . /frontend
EXPOSE 3000
CMD ["npm", "start"]
