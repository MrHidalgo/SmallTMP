const configPath = require('../config/configPath');


const configOption = {
  pipeBreaking: {
    err: configPath.errorHandler
  },

  cssMinOption: {
    specialComments: 1,
    format: 'keep-break',
    level: 1
  },

  sassAPI: {
    errLogToConsole: true,
    outputStyle: 'expanded',
    sourceComments: true
  },

  autoPrefixOptions: {
    browsers: [
      "last 3 versions",
      "> 1%",
      "ie 9-11"
    ],
    cascade: true
  },

  svgMin: {
    js2svg: {
      pretty: true
    }
  },

  renameOption: {
    suffix: '.min'
  },

  sourceMapStyle: {
    includeContent: true,
    sourceRoot: '../src'
  }
};


module.exports = configOption;
