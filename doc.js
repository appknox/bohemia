/*
 * doc.js
 * Copyright (C) 2016 dhilipsiva <dhilipsiva@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */
(function(){
  'use strict';
  var sassdoc = require('sassdoc');
  sassdoc('dist').then(function () {
    console.log('All done!');
  });
})();
