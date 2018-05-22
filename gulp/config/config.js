const config = {

  // SRC
  src: {
    root          : 'src',
    templates     : 'src/pug',
    templatesData : 'src/pug/data',
    scss          : 'src/scss',
    vendorStyle   : 'src/vendorStyle',
    js            : 'src/js',
    vendorScript  : 'src/vendorScript'
  },

  // DEST
  dest: {
    root  : 'dist',
    html  : 'dist',
    css   : 'dist/css',
    js    : 'dist/js'
  },

  errorHandler: require('../util/error')
};


module.exports = config;