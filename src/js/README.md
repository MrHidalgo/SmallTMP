## JavaScript files

### Concatenation rule
1. Function Callback
2. Window event listener - load, resize, scroll
3. Document event listener - ready
4. Other...

### Standard
1. Ignore files which start `[_]*.js`
2. In the folders of the `_document` and the `_window` there are two files:
  - `_indexJquery.js` & `_indexNative.js` (depending on what you use for the project, you need to uncomment it);
  - The default is `_indexNative.js`

### Present methods
* `svg4everybody()`
* `svg4everybody()`
* `barbaJSTransition()`
* `viewPortChecker()` - it is better to use with `animate.css`:
  * `.viewport-hide-js` - add to elements which container check viewport
  * `data-animation-name` - default `slideInUp`
  * `data-animation-duration` - default `1s`
  * `data-animation-delay` - default `0s`
* `initPopups()`
* `initSwiper()`
* `initObjectFitImages()` - add image tag some attr `objectFit-js`;
