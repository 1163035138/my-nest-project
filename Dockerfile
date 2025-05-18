FROM node
LABEL name='my-nest-app'
LABEL version='1.0.0'
COPY . /app
WORKDIR /app
RUN pnpm install
EXPOSE 3000
CMD pnpm start
