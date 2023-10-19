FROM node:lts

WORKDIR /usr/src/apps
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
RUN npm run build
CMD ["npm", "run", "start:prod"]