# build ui dependency
yarn workspace ui build

# build
yarn build

# build docker image
docker build -t literacy .