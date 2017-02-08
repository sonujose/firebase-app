# AngFire

[![Build Status](https://travis-ci.org/firebase/firebase-arduino.svg?branch=master)](https://github.com/sonujose/AngFire)
[![Join the chat at https://gitter.im/googlesamples/firebase-arduino](https://badges.gitter.im/googlesamples/firebase-arduino.svg)](https://github.com/sonujose/AngFire)
[![Documentation Status](https://readthedocs.org/projects/firebase-arduino/badge/?version=latest)](https://github.com/sonujose/AngFire)

**(Firebase, Angularjs, Webpack, ES2015, Angularfire, Sass, Babel)**  

It is a full stack project for AngularJS web application which objects is:
- Webpack build and bundle all the assests.
- Provide easy to use extensibility with npm managers;
- Deployed in firebase
- Supports ES2015 using Babel 
- Supports SASS for styling you application
- Firebase Realtime database

## Future Updates (Working on it)
- Firebase Authentication

## Installation

1) Create a new folder for your project, and clone this repo inside it
```
git clone https://github.com/sonujose/Firebase-App.git
```
2) You need to have node and npm installed on your system, `npm version should be grater than 3.x` [2.x version may create issues in loading babel loader dependencies]
To update npm version run `npm install npm@latest -g`

3) Install webpack if you don't have it already. Need webpack cli for running the application 
```
npm install --global webpack
```
4) Install all npm dependencies
```
npm install
```
5) Getting ready with firebase

Install firebase on your machine.
Please follow firebase documentation for web: [https://firebase.google.com/docs/web/setup](https://firebase.google.com/docs/web/setup)
Create a project on firebase console. 
Go to public\firebaseAuth.js , replace the content with your credentials

6) Run the server [point to root directory]
```
firebase serve
```
7) Run the application (Webpack --watch) [open another terminal , point to public folder] ] []
```
npm start
```
8) Wait untill webpack bundles all your files and server, Browser will open `http://localhost:5000`

9) Congratulations, you've just setup your Angular Node fullstack application!

### Basic folder structure
Some job for Captain Obvious
```
client/           // Client side files
node_modules/     // Node Modules
index.html        // Basic page for angular project
```

### Client folder structure

```
app/          // Angular app files
build/        // concatenated assets generated by webpack
styles/       // Your general scss files which will includes in main entry for application scss
app.js        // Main entry for angular app with router config
vendor.js     // Main entry for vendor js .[currently not added , can be added if you need other modules, refer that in webpack vendor entry]
```

## Usage

####1) Using webpack
Here webpack is used for bundling the js files. `webpack.config.js` file bundles the entire js files into two modules app and vendor and are minified and used as reference in `index.html`.
The output of bundled files are in the `client/build` file. if you need to test webpack bundling just run command `webpack` 

####2) ES2015 is supported (can be upgraded to ECMA Script latest version) 
All the js files inside app support es2015 , used babel loader as the transpiler for es2015. you can upgrade to latest ECMAScipt version in `package.json`, change the `presets` value of `babel` from`es2015` to `latest`

####3) Analyze your webpack modules
1) Run 
```
webpack --profile --json >> stats.json
```
2) open
```
http://webpack.github.io/analyse/#modules
```
3) upload stats.json file from your repository
```
Now you can analyse your app modules in webpack
```


