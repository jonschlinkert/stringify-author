/*!
 * stringify-author <https://github.com/jonschlinkert/stringify-author>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var _ = require('lodash');

var str = '<%= name ? name + " " : "" %><%= email ? "<" + email + "> " : "" %><%= url ? "(" + url + ")" : "" %>';

module.exports = function (author) {
  if (typeof author !== 'object') {
    throw new Error('[stringify-author] expects and `author` object.');
  }

  author = _.extend({name: '', email: '', url: ''}, author);
  return _.template(str, author).replace(/^\s+|\s+$/g, '');
};