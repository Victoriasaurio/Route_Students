FROM node:10.13-alpine
RUN mkdir app
WORKDIR app
COPY . . 
RUN npm install
EXPOSE 3000
CMD node main