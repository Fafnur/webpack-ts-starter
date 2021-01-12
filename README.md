# Webpack ts starter

Starter for development typescript application with webpack. [Russian](./docs/ru.md)

## Clone starter

To get started, you should run command:

```shell script
git clone git@github.com:Fafnur/webpack-ts-starter.git project
```

## Install dependencies

After clone project, you should install dependencies:

```shell script
yarn install
```

## Development

For development, you can use the command that runs webpack dev server:

```shell script
yarn run serve
```

## Build 

For build your application, run command:

```shell script
yarn run build
```

For build your application on production, run command:

```shell script
yarn run build:prod
```

After buld, 3 files will be generated in the dist folder:

- index.html
- bundle.js
- style.css

The `assets` folder, which will contain all the necessary files.

## Add libraries

For add libraries you can use command:

```shell script
yarn add <lib-name>
``` 

## Add polyfills

For add polyfills you can use [core-js](https://github.com/zloirock/core-js):

```shell script
yarn add core-js
``` 

IE10 and IE11 requires the following for NgClass support on SVG elements

```shell script
yarn add classlist.js
``` 
