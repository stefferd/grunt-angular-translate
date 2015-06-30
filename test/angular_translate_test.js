'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.angular_translate = {
  custom_angular: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/custom_angular.js');
    var expected = grunt.file.read('test/expected/custom_angular.js');

    test.notStrictEqual(expected, actual);
    test.done();
  },

  multiplelevels: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/custom_multiplelevels.js');
    var expected = grunt.file.read('test/expected/multiplelevels.js');

    test.notStrictEqual(expected, actual);
    test.done();
  },

  multipletemplates: function (test) {
    test.notStrictEqual(1);

    var actual = grunt.file.read('tmp/custom_multipleTemplates.js');
    var expected = grunt.file.read('test/expected/multipletemplates.js');

    test.equals(expected, actual);
    test.done();
  }
};
