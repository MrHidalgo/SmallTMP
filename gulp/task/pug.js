const gulp        = require('gulp'),
	gulpif          = require('gulp-if'),
	pug             = require('gulp-pug'),
	plumber         = require('gulp-plumber'),
	frontMatter     = require('gulp-front-matter'),
	changed 				= require('gulp-changed'),
	htmlmin         = require('gulp-htmlmin');


/**
 *
 * @type {{src, dest, errorHandler}}
 */
const configPath  = require('../config/configPath'),
	configOption    = require('../config/configOption');


/**
 *
 * @type {*[]}
 */
const srcPath = configPath.src.templates + '/*.pug';


/**
 * @description Gulp PUG/JADE - preprocessor for creating html files.
 */
const renderPug = () => {
	return gulp
		.src(srcPath)
		.pipe(plumber(configOption.pipeBreaking.err))
		.pipe(changed(configPath.dest.html), { extension: '.html' })
		.pipe(frontMatter({
			property: 'data'
		}))
		.pipe(pug({
			pretty: true,
			data: {
				env : (argv.prod) ? 'production' : ""
			},
		}))
		.pipe(gulpif(argv.prod, htmlmin({
			collapseBooleanAttributes: true,
			collapseWhitespace: true,
			removeEmptyAttributes: true,
			removeComments: true
		})))
		.pipe(gulp.dest(configPath.dest.html));
};

gulp.task('pug', function() {
	return renderPug();
});


/**
 * @description Gulp PUG/JADE watch - keeps track of changes in files.
 */
gulp.task('pug:watch', function() {
	gulp.watch(configPath.src.templates + '/**', ['pug']);
});
