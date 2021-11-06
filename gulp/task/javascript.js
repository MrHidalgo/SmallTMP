'use strict';

const { task, src, dest, watch, series } = require('gulp');
const plumber = require('gulp-plumber'),
  webpack = require('webpack-stream');
const configPath  = require('../config/configPath'),
  configOption  = require('../config/configOption');


const _javascriptGulpTask = (_src, _entryAppPath, _entryAppFiles, _dest) => {
  return src(_src)
    .pipe(plumber(configOption.pipeBreaking.err))
    .pipe(webpack({
      mode: 'development',
      devtool: 'source-map',
      entry: _entryAppFiles,
      module: {
        rules: [
          {
            test: /\.js$/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      },
      output: {
        filename: '[name].js'
      }
    }))
    .pipe(plumber.stop())
    .pipe(dest(_dest))
};


task('js', (cb) => _javascriptGulpTask(
  configPath.src.js + '/*.js',
  './src/js',
  {
    app: './src/js/app.js',
  },
  configPath.dest.js)
);


task('js:watch', (cb) => {
  watch(configPath.src.js + '/**', series('js'));

  return cb();
});
