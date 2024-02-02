FROM node:19-alpine

COPY package.json /app
COPY . .
WORKDIR /.
 
 RUN npm install 

 CMD ["npm", "start"]
