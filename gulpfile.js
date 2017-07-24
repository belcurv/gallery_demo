/* jshint esversion:6, node:true */

const gulp       = require('gulp'),
      browserify = require('browserify'),
      babelify   = require('babelify'),
      buffer     = require('vinyl-buffer'),
      concat       = require('gulp-concat'),
      autoprefixer = require('gulp-autoprefixer'),
      uglify     = require('gulp-uglify'),
      sourcemaps = require('gulp-sourcemaps'),
      source     = require('vinyl-source-stream');


// process stylesheets
gulp.task('styles', function () {
    gulp.src('./src/css/**/*.css')
        .pipe(concat('bundle.css'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']  // config object
        }))
        .pipe(gulp.dest('./build'));
});


// process javascript
gulp.task('js', () => {
    return browserify({
            entries: './src/js/main.js',
            debug: true
        })
        .transform(babelify, {
            presets: ['es2015']
        })
        .bundle()
        .on('error', function(err) { console.log(err); this.emit('end'); })
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./build'));
});


// default task inits watchers
gulp.task('default', ['js', 'styles'], () => {
    
    gulp.watch('src/css/**/*.css', ['styles']);
    gulp.watch('src/js/**/*.js',   ['js']);
    
});