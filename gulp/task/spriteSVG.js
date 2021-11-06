'use strict';

const { task, src, dest, watch, series } = require('gulp');
const plumber = require('gulp-plumber'),
  svgSprite = require('gulp-svg-sprite'),
  svgMinify = require('gulp-svgmin'),
  cheerio = require('gulp-cheerio'),
  replace = require('gulp-replace');
const configPath  = require('../config/configPath'),
  configOption    = require('../config/configOption');


const _spriteSVGTask = (_src, _dest, _pathDest, _pathTmpl) => {
  return src(_src)
    .pipe(plumber(configOption.pipeBreaking.err))
    .pipe(svgMinify(configOption.svgMin))
    .pipe(cheerio({
      run: function ($) {
        $('[title]').removeAttr('title');
        $('[desc]').removeAttr('desc');
      },
      parserOptions: {
        xmlMode: true
      }
    }))
    .pipe(replace('&gt;', '>'))
    .pipe(svgSprite({
      mode: {
        symbol: {
          bust: false,
          sprite: "../sprite.svg",
          render: {
            scss: {
              dest: "../../../" + _pathDest + "/scss/_generated/_spriteSVG.scss",
              template: "./" + _pathTmpl + "/scss/_generated/_spriteSVG_template.scss"
            }
          },
          example: false,
        }
      },
      shape: {
        dimension: {
          precision: 2,
          attributes: false
        },
        spacing: {
          padding: 10
        },
        transform: ['svgo']
      }
    }))
    .pipe(plumber.stop())
    .pipe(dest(_dest));
};


task('spriteSVG',  (cb) => _spriteSVGTask(configPath.src.icon + '/**.svg', configPath.dest.img, 'src', 'src'));


task('spriteSVG:watch', (cb) => {
  watch(configPath.src.icon + '/**.svg', series('spriteSVG'));

  return cb();
});
