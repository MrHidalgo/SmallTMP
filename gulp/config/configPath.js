const srcPath = 'src',
  destPath = 'dest';


const configPath = {

  // SRC
  src: {
    root          : srcPath + '',
    templates     : srcPath + '/pug',
    templatesData : srcPath + '/pug/data',
    scss          : srcPath + '/scss',
    vendorStyle   : srcPath + '/vendorStyle',
    js            : srcPath + '/js',
    vendorScript  : srcPath + '/vendorScript',
    image         : srcPath + '/img',
    icon          : srcPath + '/icon',
    fonts         : srcPath + '/fonts'
  },

  // DEST
  dest: {
    root          : destPath + '',
    html          : destPath + '',
    css           : destPath + '/css',
    js            : destPath + '/js',
    img           : destPath + '/img',
    icon          : destPath + '/icon',
    fonts         : destPath + '/fonts'
  },

  errorHandler: require('../util/error')
};


module.exports = configPath;
