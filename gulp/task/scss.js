'use strict';

const { task, src, dest, watch, series } = require('gulp');

const plumber = require('gulp-plumber'),
  autoprefixer = require('gulp-autoprefixer'),
  scss = require('gulp-sass')(require('sass')),
  sassGlob = require('gulp-sass-glob'),
  changed = require('gulp-changed'),
  rename = require('gulp-rename'),
  cssnano = require('gulp-cssnano');

const configPath = require('../config/configPath')


const scssCB = () => {
  return src(configPath.src.scss + '/*.scss')
    .pipe(changed(configPath.src.scss + '/*.scss'))
    .pipe(plumber(configPath.errorHandler))
    .pipe(sassGlob())
    .pipe(scss({
      errLogToConsole: true,
      outputStyle: 'expanded',
      sourceComments: true
    }).on('error', scss.logError))
    .pipe(autoprefixer({
      browsers: [
        "last 3 versions",
        "> 1%",
        "ie 10-11"
      ],
      cascade: true
    }))
    .pipe(dest(configPath.dest.css))
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(cssnano())
    .pipe(plumber.stop())
    .pipe(dest(configPath.dest.css));
};


task('scss', (cb) => {
  scssCB();
  cb();
});
task('scss:watch', (cb) => watch(configPath.src.scss + '/**', scssCB));

