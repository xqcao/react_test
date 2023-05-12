#
![CICD](https://github.com/xqcao/react_test/actions/workflows/docker-image.yml/badge.svg?branch=main)(https://github.com/xqcao/react_test/actions)

docker build -t ${username}/reactwebapp:10 .
docker push ${username}/reactwebapp:1.0

docker run -name reactweb -p 8080:80 ${username}/reactwebapp:1.0
