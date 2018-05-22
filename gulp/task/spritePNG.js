const gulp          =   require('gulp'),
  plumber           =   require('gulp-plumber'),
  spriteSmith       =   require('gulp.spritesmith'),
  imageMinify       =   require('gulp-imagemin'),
  buffer            =   require('vinyl-buffer'),
  merge             =   require('merge-stream');

const config      = require('../config/config');

const spritePNGOption = {
  plum: {
    err: config.errorHandler
  }
};

const srcArr = {
  0: [
    config.src.icon + '/*.png'
  ],
  1: [
    config.src.icon + '/**'
  ]
};

gulp.task('spritePNG', function(e) {

  const spImgPath       = '../img/sprite.png'
    , retinaspImgPath   = '../img/sprite@2x.png'
    , destImg           = './dest/img/'
    , destCss           = './src/scss/_generated/';

  let spriteData = gulp
    .src(srcArr[0])
      .pipe(plumber(spritePNGOption.plum.err))
      .pipe(spriteSmith(
        {
          imgName         : 'sprite.png',
          imgPath         : spImgPath,
          retinaImgPath   : retinaspImgPath,
          cssName         : '_spritePNG.scss',
          retinaSrcFilter : [
            './src/icon/*@2x.png'
          ],
          retinaImgName   : 'sprite@2x.png',
          algorithm       : 'binary-tree',
          padding         : 5,
          cssVarMap       : function(sprite) {
            sprite.name = 'sp-' + sprite.name;
          }
        }
      ));

  let imgStream = spriteData
    .img
    .pipe(buffer())
    .pipe(imageMinify({
      interlaced: true
    }))
    .pipe(gulp.dest(destImg));

  let cssStream = spriteData
    .css
    .pipe(gulp.dest(destCss));

  return merge(imgStream, cssStream)
});


gulp.task('spritePNG:watch', function(e) {
  gulp.watch(srcArr[1], ['spritePNG']);
});