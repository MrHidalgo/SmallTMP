'use strict';

const { task, src, dest, watch, series } = require('gulp');

const iconfont = require('gulp-iconfont'),
	iconfontCss = require('gulp-iconfont-css');

const configPath  = require('../config/configPath');


const iconFontCB = (_src, _dest, _path) => {
  return src(configPath.src.iconFonts + '/**.svg')
    .pipe(iconfontCss({
      fontName: 'iconFont',
      path: 'src/scss/_generated/_iconFont_template.scss',
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
    .pipe(dest(configPath.src.fonts));
};


task('iconfont', (cb) => {
  iconFontCB();
  cb();
});
task('iconfont:watch', (cb) => watch(configPath.src.iconFonts + '/**.svg', iconFontCB));
