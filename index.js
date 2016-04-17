/*!
 * stringify-author <https://github.com/jonschlinkert/stringify-author>
 *
 * Copyright (c) 2014-2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (author) {
  if (typeof author !== 'object') {
    throw new TypeError('expected an author to be an object');
  }

  if (author.url) author.url = stripSlash(author.url);

  var name = author.name || "";
  var url = author.url || author.web;
  url = url ? (" (" + url.trim() + ")") : "";
  var email = author.email || author.mail;
  email = email ? (" <" + email.trim() + ">") : "";
  return (name.trim() + email + url).trim();

};

function stripSlash(str) {
  return str.replace(/\/$/, '');
}
