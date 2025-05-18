FROM node

# 安装pnpm
RUN npm install -g pnpm@8.15.9

LABEL name='my-nest-app'
LABEL version='1.0.0'
COPY . /app
WORKDIR /app
RUN pnpm install
EXPOSE 3000
CMD pnpm start
