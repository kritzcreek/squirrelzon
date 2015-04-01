var gulp = require('gulp');
var purescript = require('gulp-purescript');
var webpack = require('gulp-webpack');
var del = require('del');
var browserSync = require('browser-sync');

var paths = {
  purescript: 'src/purs/**/*.purs',
  purescriptLibs: 'bower_components/*/src/**/*.purs',
  javascript: 'src/js/**/*.js'
};
var destFolder = 'dist/';

gulp.task('clean', function (cb) {
  return del([destFolder], cb);
});

gulp.task('compile:purescript', function(){
  return gulp.src([paths.purescript, paths.purescriptLibs])
    .pipe(purescript.pscMake());
});

gulp.task('copy-html', function(){
  return gulp.src('assets/index.html')
    .pipe(gulp.dest(destFolder));
});

gulp.task('copy-assets', ['copy-html']);

gulp.task('build', ['copy-assets', 'compile:purescript'], function() {
  return gulp.src('src/js/index.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest(destFolder));
});

gulp.task('watch-build', ['build'], browserSync.reload);

gulp.task('serve', function(){
  browserSync({
        server: {
            baseDir: './dist'
        }
    });

  gulp.watch(paths.purescript, ['watch-build']);
  gulp.watch(paths.javascript, ['watch-build']);
});


gulp.task('default', ['build', 'serve']);
