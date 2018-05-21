const config = {

  // SRC
  src: {
    root          : 'src',
    templates     : 'src/pug',
    templatesData : 'src/pug/data',
    scss          : 'src/scss'
  },

  // DEST
  dest: {
    root  : 'dist',
    html  : 'dist',
    css   : 'dist/css'
  },

  errorHandler: require('../util/error')
};


module.exports = config;