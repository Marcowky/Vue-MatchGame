# 使用 Node.js 镜像作为基础镜像
FROM node:14 AS build

# 设置工作目录
WORKDIR /app

# 将项目源代码复制到工作目录
COPY . .

# 安装项目依赖
RUN npm install

# 构建 Vue 项目
RUN npm run build