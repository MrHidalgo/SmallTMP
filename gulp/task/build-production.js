argv = require('yargs').argv;

const gulp          = require('gulp'),
  plumber           = require('gulp-plumber'),
	order             = require("gulp-order"),
	concat            = require('gulp-concat'),
	cssMinify         = require('gulp-cssmin'),
	rename            = require('gulp-rename'),
	stripCssComments  = require('gulp-strip-css-comments'),
	mainBowerFiles  	= require('main-bower-files'),
	scss              = require('gulp-sass'),
	prefixer          = require('gulp-autoprefixer'),
	uglify          	= require('gulp-uglify'),
	babel           	= require('gulp-babel'),
  runSequence       = require('run-sequence');


/**
 *
 * @type {{src, dest, errorHandler}}
 */
const configPath  = require('../config/configPath'),
  configOption    = require('../config/configOption');


/**
 * @description Gulp prodScript - build and concat source files to prod-ready mode.
 */
gulp.task("prodScript", function() {
	/**
	 *
	 * @type {string[]}
	 */
	const srcPathJs = [
		configPath.src.js + '/*.js',
		configPath.src.js + '/**/*.js',
		'!' + configPath.src.js + '/**/_**.js',
	];


	let filesScript = mainBowerFiles('**/*.js');

	filesScript.push(
		configPath.src.vendorScript + "/*.js",
		"!" + configPath.src.vendorScript + "/*.js",
		configPath.src.vendorScript + "/**/*.js",
		"!" + configPath.src.vendorScript + "/**/_**.js"
	);

	return gulp
		.src(srcPathJs)
		.pipe(plumber(configOption.pipeBreaking.err))
		.pipe(order([
			"*",
			"_lib/**",
			"_window/**",
			"_document/**",
		]))
		.pipe(concat('app.js'))
		.pipe(babel(configOption.es6))
		.pipe(gulp.src(filesScript))
		.pipe(order([
			'jquery.js',
			'*'
		]))
		.pipe(concat('bundle.js'))
		.pipe(uglify())
		.pipe(rename(configOption.renameOption))
		.pipe(gulp.dest(configPath.dest.js))
});


/**
 * @description Gulp prodStyle - build and concat source files to prod-ready mode.
 */
gulp.task("prodStyle", function() {
	let filesStyle = mainBowerFiles('**/*.css');

	filesStyle.push(
		configPath.src.vendorStyle + "/*.css",
		configPath.src.vendorStyle + "/**/*.css",
		"!" + configPath.src.vendorStyle + "/**/_**.css"
	);

	return gulp
		.src(configPath.src.scss + '/*.scss')
			.pipe(plumber(configOption.pipeBreaking.err))
			.pipe(scss(configOption.sassAPI).on('error', scss.logError))
			.pipe(prefixer(configOption.autoPrefixOptions))
			.pipe(gulp.src(filesStyle))
			.pipe(order([
				'normalize.css',
				'*'
			]))
			.pipe(concat('bundle.css'))
			.pipe(stripCssComments())
			.pipe(cssMinify(configOption.cssMinOption))
			.pipe(rename(configOption.renameOption))
			.pipe(gulp.dest(configPath.dest.css));
});


/**
 * @description Gulp production - build source files to full optimization.
 */
gulp.task("production", function() {
	runSequence(
		'clean',
    [
    	'pug',
			'prodStyle',
			'prodScript'
		],
		'list-pages'
  );
});
