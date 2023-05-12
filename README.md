#
![CICD](https://github.com/xqcao/react_test/blob/main/.github/workflows/docker-image.yml?badge.svg?branch=main)

docker build -t ${username}/reactwebapp:10 .
docker push ${username}/reactwebapp:1.0

docker run -name reactweb -p 8080:80 ${username}/reactwebapp:1.0
