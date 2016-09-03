/*
 * gulpfile.js
 * Copyright (C) 2016 dhilipsiva <dhilipsiva@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */
(function(){
  'use strict';

  var gulp = require('gulp');
  var sassdoc = require('sassdoc');
  var converter = require('sass-convert');
  var debug = require('gulp-debug');

  gulp.task('sassdoc', function () {
    return gulp.src('./bohemia/**/*.sass')
      .pipe(debug())
      /*.pipe(converter({
        from: 'sass',
        to: 'scss',
      }))*/
      .pipe(debug())
      .pipe(sassdoc())
      .pipe(debug())
      .pipe(gulp.dest('dist'));
  });

  var vfs = require('vinyl-fs');
  gulp.task('convert', function () {
    vfs.src('./bohemia/**/*.sass')
      .pipe(debug())
      .pipe(converter({
        from: 'sass',
        to: 'scss',
      }))
      .pipe(debug())
      .pipe(vfs.dest('./dist'));
  });

})();
