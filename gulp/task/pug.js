'use strict';

const { task, src, dest, watch, series } = require('gulp');
const gulpif = require('gulp-if'),
	pug = require('gulp-pug'),
	frontMatter = require('gulp-front-matter'),
	htmlmin = require('gulp-htmlmin'),
	plumber = require('gulp-plumber');
const configPath = require('../config/configPath'),
	configOption = require('../config/configOption');


const renderPug = (_src) => {
	return src(_src)
		.pipe(plumber(configOption.pipeBreaking.err))
		.pipe(frontMatter({property: 'data'}))
		.pipe(pug({
			pretty: true,
			// data: {
			// 	env : (argv.prod) ? 'production' : ""
			// },
		}))
		// .pipe(gulpif(argv.prod, htmlmin({
		// 	collapseBooleanAttributes: true,
		// 	collapseWhitespace: true,
		// 	removeEmptyAttributes: true,
		// 	removeComments: true
		// })))
		.pipe(plumber.stop())
		.pipe(dest(configPath.dest.html));
};


task('pug', (cb) => renderPug(configPath.src.templates + '/*.pug'));


task('pug:watch', (cb) => {
	watch(
		[
		configPath.src.templates + '/**',
		configPath.src.templates + '/**/**',
		configPath.src.templates + '/**/**/**',
	],
		series('pug')
	);
	
	return cb();
});
