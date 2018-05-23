const gulp        = require('gulp'),
  server          = require('browser-sync').create();


/**
 *
 * @type {{src, dest, errorHandler}}
 */
const pathFolder  = require('../config/configPath');


/**
 * @description Gulp server - create and init Browser-sync.
 */
gulp.task('server', function() {
  server.init({
    server: {
      baseDir: pathFolder.dest.root,
      directory: false,
      serveStaticOptions: {
        extensions: ['html']
      }
    },
    files: [
      pathFolder.dest.html + '/*.html',
      pathFolder.dest.css + '/*.css',
      pathFolder.dest.js + '/*.js',
      pathFolder.dest.img + '/**/*'
    ],
    port: 3000,
    logLevel: 'info', // 'debug', 'info', 'silent', 'warn'
    logConnections: false,
    logFileChanges: true,
    open: true,
    notify: false,
    ghostMode: false,
    online: true,
    tunnel: false
  });
});
