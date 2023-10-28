#pull FROM the base image node (version 17-alpine). basically adds boiler plate to the image.
FROM node:17-alpine

#creating directory named /app in the container, similar to MKDIR
WORKDIR /app

#COPYing package.json in /myapp into current directory (/app) in the container
COPY package.json .

#RUN runs any shell command needed
RUN npm install 

#COPYing /myapp's contents into /app in the container.
#(can maybe optimize this by just copying public and src directories, not the whole /myapp)
COPY . .

#EXPOSE port 3000, tell container to listen for traffic here
EXPOSE 3000

#run npm start
CMD ["npm", "start"]

