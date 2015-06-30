/*
 * grunt-angular-translate
 * https://github.com/Stef.van.de.Berg/grunt-angular-translate
 *
 * Copyright (c) 2015 Stef van den Berg
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    angular_translate: {
      custom_angular: {
        src: ['test/templates/template.html'],
        languages: ['test/resources/en.json', 'test/resources/nl.json'],
        dest: 'tmp/custom_angular.js',
        options: {
          angular: 'myAngular'
        }
      },
      multiplelevels: {
        src: ['test/templates/test_multiplelevels.html'],
        languages: ['test/resources/en.json', 'test/resources/nl.json'],
        dest: 'tmp/custom_multiplelevels.js'
      },
      multpleTemplates: {
        src: ['test/templates/test_multiplelevels.html', 'test/templates/template.html'],
        languages: ['test/resources/en.json', 'test/resources/nl.json'],
        dest: 'tmp/custom_multipleTemplates.js',
        options: {
          module: 'customModuleName'
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'angular_translate', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
