/*
 * convert.js
 * Copyright (C) 2016 dhilipsiva <dhilipsiva@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */
(function(){
  'use strict';

  var vfs = require('vinyl-fs');
  var converter = require('sass-convert');
  vfs.src('./bohemia/**/*sass')
    .pipe(converter({
      from: 'sass',
      to: 'scss',
    }))
    .pipe(vfs.dest('./dist'));
})();
