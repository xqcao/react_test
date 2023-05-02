FROM node:14-alpine AS BUILD_STAGE

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build

FROM nginx:1.21-alpine

COPY --from=BUILD_STAGE /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx","-g","daemon off;"]