FROM node:20
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
#equivalent to typing run start dev in terminal
CMD ["npm","run","start:dev"]



#   inside the docker container agar mai run karta hu aur yaha pe (app module host)local host hai to uska matlab ye hoga ki ye wo container ko refer karega
# see database and your application/server runs on two containers(yes this tis very important for multiple reasons just gpt it) and therefor we run this on two container and these conatiner later connect so that your program can run : ) also make sure that connection stuffs of containers is written on .yaml files generally