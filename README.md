# nodejs-microservice-eureka
Microservice in nodejs and eureka discovery

Instrucciones:
Descargar docker conteniendo ubuntu
>docker search ubuntu

>docker run -it ubuntu ./bin/bash

Entrando por ssh:
>apt-get install nano

nano installnode.js
>apt-get update
apt-get install --yes npm
npm install node

Creamos una imagen base con npm y node instalados:
> docker ps -a
docker commit -a joshone PID ubuntu-node:0.1

Le entregamos nuestro proyecto node a ubuntu-node:
>docker run -it -v /home/josh/nodejs-microservice-eureka:/microservice -p 9000:5000 ubuntu-node:0.1 ./bin/bash

Creamos una imagen de nuestro proyecto corriendo
>docker commit -a joshone PID node-microservice:latest

Y corremos el container entregandole variables de entorno y el work directory:
>docker run -d -w /microservice -p 9000:5000 -e HOST=192.168.0.30 -e PORT=9000 node-microservice:0.1 npm start


recordar asignar el mismo puerto al que esta asignado el proyecto