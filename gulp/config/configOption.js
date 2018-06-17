const configPath = require('../config/configPath');


const configOption = {
  pipeBreaking: {
    err: configPath.errorHandler
  },

  pug: {
    pretty: true
  },

  frontMatter: {
    property: 'data'
  },

  cssMinOption: {
    showLog: true,
    compatibility: 'ie7',
    specialComments: 1,
    format: 'beautify',
    level: 2
  },

  sassAPI: {
    errLogToConsole: true,
    outputStyle: 'expanded',
    sourceComments: true
  },

  autoPrefixOptions: {
    browsers: [
      "last 10 versions",
      "> 1%",
      "explorer >= 8",
      "chrome >= 21",
      "firefox esr",
      "opera >= 15",
      "android >= 2.3",
      "safari >= 6.2.6",
      "explorermobile >= 10",
      "ios >= 6",
      "blackberry >= 10"
    ],
    cascade: true
  },

  es6: {
    "presets": ["env"]
  },

  svgMin: {
    js2svg: {
      pretty: true
    }
  },

  tinyPngAPI: "w2hECd9nCvKWfBj49LZrOPa6Ws7ws8uE",

  imageMin: {
    interlaced: true
  },

  renameOption: {
    suffix: '.min'
  },

  changed: {
    firstPass: true
  },

  sourceMapStyle: {
    includeContent: true,
    sourceRoot: '../src'
  }
};


module.exports = configOption;
