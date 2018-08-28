

/**
 * @name initObjectFitImages
 * @description Polyfill object-fit/object-position on <img>
 */
const initObjectFitImages = () => {
  const objFitImages = document.querySelectorAll('[objFitImages-js]');

  objectFitImages(objFitImages);
};
