# Front end

Node web application containing a skeleton of tools necessary to build a [website](https://croissant-frontend.herokuapp.com/).
This project will demonstrate how to load node modules in the front end with [browserify](http://browserify.org/).
We're using [bootstrap]() and [Angular JS]() will be our template engine along with additional components such as a carousel ([Slick]()) and a gallery box ([Photoswipe]())

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