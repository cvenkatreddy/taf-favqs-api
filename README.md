# taf-favqs-api

A sample framework created using cypress, javascript and docker

## Pre-requisite Tools

1. Node version 12 or above
2. Visual Studio Code

## Quickstart

You know setting up framework is very quick!

1. npm install

## set baseurl and apiKey

1. go to cypress.config.js file
2. set baseurl, apiKey, login and password

## Dashboard execution

1. Go to project root,
2. `npx cypress open` or `npm run cy:open`
3. click specific feature

## cmmd line Execution

1. `npm run cy:run`           # for a full run
2. `npm run dev-cy:run`       # for a full run on dev environment, need to change baseUrls accordingly

and refer to more other npm scripts added in package.json


## Docker Execution

1. Download and install Docker

   - For Mac: https://www.docker.com/products/docker-desktop

   - For Windows: https://docs.docker.com/desktop/windows/

2. Go to project root and run command `docker build -t cypress .`


