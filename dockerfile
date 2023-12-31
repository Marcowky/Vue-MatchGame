# 使用 Node.js 镜像作为基础镜像
FROM node AS build

# 设置工作目录
WORKDIR /app

# 将项目源代码复制到工作目录
COPY . .

# 安装项目依赖
RUN npm install

# 构建 Vue 项目
RUN npm run build

# 在一个新的阶段中创建最终镜像
FROM nginx:alpine

# 将构建好的项目文件从前一个阶段复制到最终镜像
COPY --from=build /app/dist /usr/share/nginx/html

# 将构建好的项目文件从前一个阶段复制到最终镜像
COPY --from=build /app/nginx/nginx.conf /etc/nginx/nginx.conf

# 暴露 Nginx 默认的 HTTP 端口
EXPOSE 711

# 启动 Nginx 服务
CMD ["nginx", "-g", "daemon off;"]