const config = {

  // SRC
  src: {
    root          : 'src',
    templates     : 'src/pug',
    templatesData : 'src/pug/data'
  },

  // DEST
  dest: {
    root: 'dist',
    html: 'dist'
  },

  errorHandler: require('../util/error')
};


module.exports = config;