const gulp =   require('gulp'),
  plumber =   require('gulp-plumber'),
  svgSprite = require('gulp-svg-sprite'),
  svgMinify = require('gulp-svgmin'),
  cheerio = require('gulp-cheerio'),
  replace = require('gulp-replace');

const config      = require('../config/config');

const spriteSVGOption = {
  plum: {
    err: config.errorHandler
  }
};

const srcArr = {
  0: [
    config.src.icon + '/*.svg'
  ]
};

gulp.task('spriteSVG', function () {
  return gulp
    .src(srcArr[0])
      .pipe(plumber(spriteSVGOption.plum.err))
      .pipe(svgMinify({
        js2svg: {
          pretty: true
        }
      }))
      .pipe(cheerio({
        run: function ($) {
          $('[fill]').removeAttr('fill');
          $('[stroke]').removeAttr('stroke');
          $('[style]').removeAttr('style');
        },
        parserOptions: {
          xmlMode: true
        }
      }))
      .pipe(replace('&gt;', '>'))
      .pipe(svgSprite({
        mode: {
          symbol: {
            sprite: "../sprite.svg",
            render: {
              scss: {
                dest:'../../../src/scss/_generated/_spriteSVG.scss',
                template: "./src/scss/_generated/_spriteSVG_template.scss"
              }
            },
            example: false
          }
        }
      }))
      .pipe(gulp.dest(config.dest.img));
});

gulp.task('spriteSVG:watch', function() {
  gulp.watch(srcArr[0], ['spriteSVG']);
});
