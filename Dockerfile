FROM node:16.13.1

COPY . .

CMD npm install . && npm run start