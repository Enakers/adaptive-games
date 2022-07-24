cp ../../yarn.lock .

docker build -t docs .

rm yarn.lock