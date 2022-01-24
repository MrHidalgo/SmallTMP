'use strict';

const { task, src, dest, watch, series } = require('gulp');

const pug = require('gulp-pug'),
	frontMatter = require('gulp-front-matter'),
	plumber = require('gulp-plumber'),
  pugLinter = require('gulp-pug-linter');

const configPath = require('../config/configPath');


const pugCB = () => {
	return src(configPath.src.pug + '/**.pug')
		.pipe(plumber(configPath.errorHandler))
    .pipe(pugLinter({
      reporter: 'default',
      failAfterError: true
    }))
		.pipe(frontMatter({property: 'data'}))
		.pipe(pug({pretty: true}))
		.pipe(plumber.stop())
		.pipe(dest(configPath.dest.html));
};


task('pug', (cb) => {
	pugCB();
	cb();
});


task('pug:watch', (cb) => watch([configPath.src.pug + '/**', configPath.src.pug + '/**/**', configPath.src.pug + '/**/**/**'], pugCB));
