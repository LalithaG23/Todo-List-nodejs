# Use an official Node.js runtime as a parent image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

ADD . .

# Install the dependencies
RUN npm install

# Define the command to run the app
CMD ["npm", "index.js"]
