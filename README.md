# Small Gulp.JS template

## How to start
* `npm i` - install npm dependencies
* `bower install` - install bower packages
* `gulp` - run dev-server

## Tasks
Task name | Description                                                      
:---|:---
`build` | build production-ready project
`clean` | remove `./dest` folder
`default` | will start all tasks required by project in dev mode
`fonts` | copy fonts files `*.{ttf,eot,woff,woff2,svg}` to `./dest` path
`img` | optimize, compress and clone images
`js` | creating and combining logic files info one files => `app.js`
`pug` | interpreted or compiled into `*.html`
`scss` | interpreted or compiled into `*.css`
`spritePNG` | create `*.svg` sprites
`spriteSVG` | create `*.png` sprites
`vendorScript` | `*.js` generation of additional libraries used in one file
`vendorStyle` | `*.css` generation of additional libraries used in one file
`vendorFont` | `*.{eot,svg,ttf,woff,woff2}` copy files to `./dest` path

## NPM script
* `npm run start` - run dev-server, same as `gulp`
* `npm run build` - build project from sources, same as `gulp build`
* `npm run clean` - run task for delete destination folder, same as `gulp clean`
* `npm run deploy` - deploy files => `domainName.surge.sh`

## Bower package style
Name | Install | Description
:---|:---|:---
[Normalize-css](https://necolas.github.io/normalize.css/) | `bower i --save normalize-css` | A modern, HTML5-ready alternative to CSS resets.
[Animate.css](https://daneden.github.io/animate.css/) | `bower i --save animate.css` | A cross-browser library of CSS animations.
[Flexbox Grid](http://flexboxgrid.com/) | `bower i --save flexboxgrid` | A grid system based on the flex display property.

## Bower package script
Name | Install | Description
:---|:---|:---
[jQuery](https://jquery.com/) | `bower i --save jquery` | jQuery is a fast, small, and feature-rich JavaScript library.
[svg4everybody](https://jonathantneal.github.io/svg4everybody/) | `bower i --save svg4everybody` | SVG for Everybody adds external spritemaps support to otherwise SVG-capable browsers.
[barba.js](http://barbajs.org/) | `bower i --save luruke/barba.js` | Create badass, fluid and smooth transition between your website's pages.
[jQuery-viewport-checker](https://github.com/dirkgroenen/jQuery-viewport-checker) | `bower i --save jQuery-viewport-checker` | Little script that detects if an element is in the viewport and adds a class to it.
[object-fit-images](https://github.com/bfred-it/object-fit-images) | Remove from ignore in the folder => `src/vendorScript/_shared` | Polyfill object-fit/object-position on `<img>`.

## Bower package {lib, framework, toolkit}
Name | Install | Description
:---|:---|:---
[Font-Awesome](https://fontawesome.com/) | `bower i --save Font-Awesome` | Get vector icons and social logos on your website with Font Awesome, the web’s most popular icon set and toolkit.
[Magnific Popup](http://dimsemenov.com/plugins/magnific-popup/) | `bower i --save magnific-popup` | Magnific Popup is a responsive lightbox & dialog script with focus on performance and providing best experience for user with any device.
[Swiper](http://idangero.us/swiper/) | `bower i --save swiper` | Most Modern Mobile Touch Slider.
[Bootstrap](http://getbootstrap.com/) | `bower i --save bootstrap` | Build responsive, mobile-first projects on the web with the world's most popular front-end component library.
