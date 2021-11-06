'use strict';

const { task } = require('gulp');
const server = require('browser-sync').create();


task('server', (cb) => {
  server.init({
    server: {
      baseDir: [
        'dest'
      ],
      directory: true,
      serveStaticOptions: {
        extensions: [
          'html'
        ]
      }
    },
    files: [
      'dest/**'
    ],
    https: true,
		startPath: "/listPages",
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

  return cb();
});
