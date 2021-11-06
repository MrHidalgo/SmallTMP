'use strict';

const { task, src, dest, watch, series } = require('gulp');
const iconfont = require('gulp-iconfont'),
	iconfontCss = require('gulp-iconfont-css');
const configPath  = require('../config/configPath');


const iconFontGulpTask = (_src, _dest, _path) => {
  return src(_src)
    .pipe(iconfontCss({
      fontName: 'iconFont',
      path: _path + '/scss/_generated/_iconFont_template.scss',
      targetPath: '../scss/_generated/_spriteFont.scss',
      fontPath: '../fonts/'
    }))
    .pipe(iconfont({
      fontName: 'iconFont',
      formats: ['ttf', 'woff', 'woff2', 'svg'],
      prependUnicode: true,
      normalize: true,
      fontHeight: 1000,
      timestamp: Math.round(Date.now() / 1000)
    }))
    .pipe(dest(_dest));
};


task('iconfont', (cb) => iconFontGulpTask(configPath.src.iconFonts + '/**.svg', configPath.src.fonts, 'src'));


task('iconfont:watch', (cb) => {
  watch(configPath.src.iconFonts + '/**.svg', series('iconfont'));

  return cb();
});
