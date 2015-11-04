# Front end

Node web application containing a skeleton of tools necessary to build a [website](https://croissant-frontend.herokuapp.com/).
This project will demonstrate how to load node modules in the front end with [browserify](http://browserify.org/).
We're using [bootstrap](http://getbootstrap.com/) and [Angular JS](https://angularjs.org) will be our template engine along with additional
components such as a carousel ([Slick](http://kenwheeler.github.io/slick/)) and a gallery box ([Photoswipe](http://photoswipe.com/))

## Install Dependencies:

Dependencies required on the operating system to install [npm](https://www.npmjs.com/) via [brew](http://brew.sh/)
```
brew install npm
```

Dependencies required for the node to install project dependency
```
npm install
```

## Prerequisite

Run [gulp](http://gulpjs.com/) to compile less, sass, css, javascript and compressing resources.
```
npm install -g gulp
gulp
```

Run [nodemon](http://nodemon.io/) to have the server restart after a file change.
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