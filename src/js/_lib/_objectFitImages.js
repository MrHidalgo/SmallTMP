

/**
 * @name initObjectFitImages
 * @description Polyfill object-fit/object-position on <img>
 */
function initObjectFitImages() {
  const objFitImages = $('[objectFit-js]') || document.querySelectorAll('[objectFit-js]');

  objectFitImages(objFitImages);
}
