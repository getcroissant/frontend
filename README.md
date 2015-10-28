# bootstrap website

> Frontend application

## Install Dependencies:

Dependencies required on the operating system [http://brew.sh/] to install brew
```
brew install npm
```

Dependencies required for the application [https://www.npmjs.com/] to install npm
```
npm install
```

## Prerequisite

Run gulp to compile sass, minify javascript, cache markup language.
```
npm install -g gulp
gulp
```

Run nodemon to have the server restart after a file change.
```
npm install -g nodemon
nodemon
```

## Run the application:
Build and compress resources [fonts/images/stylesheets/javascripts]
```
gulp build
```

Start the api server
```
 TODO: create api server
```

Start the application server
```
node server.js
```

## Run the tests:

Unit testing
```
gulp test
```