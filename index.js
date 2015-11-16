/*!
 * stringify-author <https://github.com/jonschlinkert/stringify-author>
 *
 * Copyright (c) 2014-2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (author) {
  if (typeof author !== 'object') {
    throw new Error('[stringify-author] expects an `author` object.');
  }

  var o = {name: ['', ''], email: ['<', '>'], url: ['(', ')']};
  var str = '';

  for (var key in o) {
    if (author.hasOwnProperty(key)) {
      str += o[key][0] + author[key] + o[key][1] + ' ';
    }
  }
  return str.trim();
};
