'use strict';

const { task, src, dest, watch, series } = require('gulp');

const plumber = require('gulp-plumber'),
  changed = require('gulp-changed'),
  uglify = require('gulp-uglify-es').default,
  rename = require('gulp-rename'),
  webpack = require('webpack-stream');

const configPath  = require('../config/configPath');


const jsCB = (_entryAppFiles) => {
  return src(configPath.src.js + '/*.js')
    .pipe(changed(configPath.src.js + '/*.js'))
    .pipe(plumber(configPath.errorHandler))
    .pipe(webpack({
      mode: 'development',
      devtool: false,
      entry: './src/js/app.js',
      module: {
        rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }]
      },
      output: {
        filename: 'app.js'
      }
    }))
    .pipe(dest(configPath.dest.js))
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(uglify())
    .pipe(plumber.stop())
    .pipe(dest(configPath.dest.js))
};


task('js', (cb) => {
  jsCB();
  cb();
});
task('js:watch', (cb) => watch(configPath.src.js + '/**', jsCB));
