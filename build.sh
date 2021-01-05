#!/bin/sh

docker build -t uni-arts-frontend .
docker tag uni-arts-frontend registry.cn-hongkong.aliyuncs.com/tatmas/uni-arts-frontend
docker login --username=lixiumiao@1837074167842277 registry.cn-hongkong.aliyuncs.com
docker push registry.cn-hongkong.aliyuncs.com/tatmas/uni-arts-frontend
