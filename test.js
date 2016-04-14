/*!
 * stringify-author <https://github.com/jonschlinkert/stringify-author>
 *
 * Copyright (c) 2014-2015 Jon Schlinkert.
 * Licensed under the MIT License
 */

'use strict';

require('mocha');
require('should');
var stringify = require('./');

describe('author', function () {
  it('should stringify name:', function () {
    var author = {name: 'Jon Schlinkert'};
    stringify(author).should.equal('Jon Schlinkert');
  });

  it('should stringify email:', function () {
    var author = {email: 'jon.schlinkert@sellside.com'};
    stringify(author).should.equal('<jon.schlinkert@sellside.com>');
  });

  it('should stringify url:', function () {
    var author = {url: 'https://github.com/jonschlinkert'};
    stringify(author).should.equal('(https://github.com/jonschlinkert)');
  });

  it('should strip trailing slashes from URL:', function () {
    var author = {url: 'https://github.com/jonschlinkert/'};
    stringify(author).should.equal('(https://github.com/jonschlinkert)');
  });

  it('should stringify name and url:', function () {
    var author = {
      name: 'Jon Schlinkert',
      url: 'https://github.com/jonschlinkert'
    };
    stringify(author).should.equal(
      'Jon Schlinkert (https://github.com/jonschlinkert)'
    );
  });

  it('should stringify name and email:', function () {
    var author = {name: 'Jon Schlinkert', email: 'jon.schlinkert@sellside.com'};
    stringify(author).should.equal(
      'Jon Schlinkert <jon.schlinkert@sellside.com>'
    );
  });

  it('should stringify email and url:', function () {
    var author = {
      email: 'jon.schlinkert@sellside.com',
      url: 'https://github.com/jonschlinkert'
    };
    stringify(author).should.equal(
      '<jon.schlinkert@sellside.com> (https://github.com/jonschlinkert)'
    );
  });

  it('should stringify name, email and url:', function () {
    var author = {
      name: 'Jon Schlinkert',
      email: 'jon@sellside.com',
      url: 'https://github.com/jonschlinkert'
    };
    stringify(author).should.equal(
      'Jon Schlinkert <jon@sellside.com> (https://github.com/jonschlinkert)'
    );
  });
});
