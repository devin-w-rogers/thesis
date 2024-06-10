# ---- EVERYTHING HERE IS HAPPENING IN THE IMAGE WHEN THE DOCKERFILE IS BUILT. ----

#pull FROM the base image node (version 17-alpine). basically adds boiler plate stuff to the image from node.
FROM node:17-alpine

#creating directory named /app, similar to MKDIR
WORKDIR /app

#COPYing package.json in /myapp into current directory (/app)
COPY package.json .

#RUN runs any shell command needed. Here it is running "npm install".
RUN npm install 

#COPYing /myapp's contents into /app.
#(can maybe optimize this by just copying public and src directories, not the whole /myapp)
COPY . .

#EXPOSE port 3000, tell image to listen for traffic here
EXPOSE 3000

#run npm start (CMD slightly differs from RUN)
CMD ["npm", "start"]

# docker build -t thesis-myapp:latest . ( or ./myapp)
# NEW docker build -t devinwrogers/thesis-myapp:latest ./myapp
# docker compose up

# ANOTHER OPTION (instead of compose): docker run -d -p 3000:3000 thesis-myapp
