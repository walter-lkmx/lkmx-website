# WWW 
- [WWW](#www)
- [Documentation](#documentation)
  - [www](#www-1)
    - [Prerequisites](#prerequisites)
    - [Install dependencies](#install-dependencies)
    - [Run the project](#run-the-project)
    - [Build Docker Image](#build-docker-image)

# Documentation

## www

This is a [Next.js](https://nextjs.org/) project with Flare.

### Prerequisites

- Node.js 14.18.0 or later.

### Install dependencies

```
yarn install
```

### Run the project

```
yarn run dev
```

### Build Docker Image

```
yarn run build

docker build -t www-lkmx-web-example .
```

You could run the project using this Docker Image.

For example:

Create a ```docker-compose.yml``` file.
```
version: '3'

services:
  www:
    container_name: www
    image: 'www-lkmx-web-example:latest'
    environment:
      - API_URL=http://api-example.dev-lk.mx
    ports:
      - "3000:80"
```

Run
```
$ docker-compose up -d www
```
And go to http://localhost:3000 to see the WWW project running.