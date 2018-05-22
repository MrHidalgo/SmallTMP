const gulp            =   require('gulp')
  , plumber           =   require('gulp-plumber')
  , prefixer          =   require('gulp-autoprefixer')
  , scss              =   require('gulp-sass')
  , stripCssComments  =   require('gulp-strip-css-comments')
  , sourcemaps        =   require('gulp-sourcemaps')
  , cssmin            =   require('gulp-cssmin')
  , rename            =   require('gulp-rename')
  , gulpIgnore        = require('gulp-ignore')
  , changedInPlace    =   require('gulp-changed-in-place');

const config      = require('../config/config');

const scssOption = {
  plum: {
    err: config.errorHandler
  },
  sassAPI: {
    errLogToConsole : true,
    outputStyle     : 'expanded',
    sourceComments  : true
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
  cssMinOption: {
    showLog : true,
    compatibility : 'ie7',
    specialComments : 1,
    format: 'beautify',
    level: 2
  },
  renameOption: {
    suffix : '.min'
  },
  changed: {
    firstPass : true,
    howToDetermineDifference: "modification-time"
  },
  source: {
    includeContent: true,
    sourceRoot: '../src'
  }
};


const srcArr = {
  0: [
    config.src.scss + '/*.scss'
  ],
  1: [
    config.src.scss + '/**'
  ]
};


gulp.task('scss', function(e) {
  return gulp
    .src(srcArr[0])
      .pipe(plumber(scssOption.plum.err))
      .pipe(sourcemaps.init())
      .pipe(scss(scssOption.sassAPI).on('error', scss.logError))
      .pipe(prefixer(scssOption.autoPrefixOptions))
      .pipe(stripCssComments())
      .pipe(changedInPlace(scssOption.changed))
      .pipe(sourcemaps.write('./maps', scssOption.source))
      .pipe(gulp.dest(config.dest.css))
      .pipe(gulpIgnore.exclude("*.map"))
      .pipe(cssmin(scssOption.cssMinOption))
      .pipe(rename(scssOption.renameOption))
      .pipe(gulp.dest(config.dest.css));
});


gulp.task('scss:watch', function(e) {
  gulp.watch(srcArr[1], ['scss']);
});
