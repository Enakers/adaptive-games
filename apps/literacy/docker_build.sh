# build ui dependency
yarn workspace build ui

# build
yarn build

# build docker image
docker build -t literacy .