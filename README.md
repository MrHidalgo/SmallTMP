# Small Gulp.JS template

## How to start
* `npm i` - install npm dependencies
* `bower install` - install bower packages
* `gulp` - run dev-server
* `gulp build` - build project from sources

## Tasks
Task name        | Description                                                      
:----------------|:----------------------------------
`build`          | build production-ready project
`clean`          | remove `./dest` folder
`default`        | will start all tasks required by project in dev mode
`fonts`          | copy fonts files `*.{ttf,eot,woff,woff2,svg}` to `./dest` path
`img`            | optimize, compress and clone images
`js`             | creating and combining logic files info one files => `app.js`
`pug`            | interpreted or compiled into `*.html`
`scss`           | interpreted or compiled into `*.css`
`spritePNG`      | create `*.svg` sprites
`spriteSVG`      | create `*.png` sprites
`vendorScript`   | `*.js` generation of additional libraries used in one file
`vendorStyle`    | `*.css` generation of additional libraries used in one file

## NPM script
* `npm run start` - run dev-server, same as `gulp`
* `npm run build` - build project from sources, same as `gulp build`
* `npm run clean` - run task for delete destination folder, same as `gulp clean`
* `npm run deploy` - deploy files => `domainName.surge.sh`

## Bower package style
Name | Install | Description
:---|:---|:---
[Normalize.css](https://necolas.github.io/normalize.css/) | `bower i --save normalize-css` | A modern, HTML5-ready alternative to CSS resets.
[Animate.css](https://daneden.github.io/animate.css/) | `bower i --save animate.css` | A cross-browser library of CSS animations.
[Font-Awesome](https://fontawesome.com/) | `bower i --save Font-Awesome` | Get vector icons and social logos on your website with Font Awesome, the web’s most popular icon set and toolkit.

## Bower package script
Name | Install | Description
:---|:---|:---
[jQuery](https://jquery.com/) | `bower i --save jquery` | jQuery is a fast, small, and feature-rich JavaScript library.
[svg4everybody](https://jonathantneal.github.io/svg4everybody/) | `bower i --save svg4everybody` | SVG for Everybody adds external spritemaps support to otherwise SVG-capable browsers.
[barba.js](http://barbajs.org/) | `bower i --save luruke/barba.js` | Create badass, fluid and smooth transition between your website's pages.
[bootstrap](http://getbootstrap.com/) | `bower i --save bootstrap` | Build responsive, mobile-first projects on the web with the world's most popular front-end component library.