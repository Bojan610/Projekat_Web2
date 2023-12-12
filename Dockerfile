# Stage 1: Build the Angular app
FROM node:latest as build

WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the Angular app with production configuration
RUN npm run build --prod

# Stage 2: Create a lightweight HTTP server to serve the Angular app
FROM nginx:alpine

# Remove default Nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy the build output from Stage 1 to Nginx server root directory
COPY --from=build /usr/src/app/dist/projekat-app /usr/share/nginx/html

# Expose port 81 to the outside world
EXPOSE 81

# Start Nginx server when the container runs
CMD ["nginx", "-g", "daemon off;"]


