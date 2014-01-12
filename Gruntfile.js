/*
 * Copyright (c) 2014 Jon Schlinkert, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Pull down a list of repos from Github.
    assemble: {
      options: {
        flatten: true,
        helpers: ['index.js'],
      },
      tests: {
        files: {
          'test/actual/': ['test/fixtures/*.hbs']
        }
      }
    },

    nodeunit: {
      files: ['test/*.js'],
    },

    jshint: {
      all: ['Gruntfile.js', '*.js', '<%= nodeunit.files %>'],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Pull down a list of repos from Github.
    repos: {
      helpers: {
        options: {
          username: 'helpers',
          include: ['handlebars-helper'],
          exclude: ['examples', 'repeat']
        },
        files: {
          'docs/helpers.json': ['repos?page=1&per_page=100']
        }
      }
    },

    // Use helpers.json for context to generate list
    // of related repos
    readme: {
      options: {
        metadata: ['docs/helpers.json']
      }
    },

    clean: {
      test: ['test/actual/**/*.html']
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-readme');
  grunt.loadNpmTasks('grunt-repos');
  grunt.loadNpmTasks('assemble');

  // Docs
  grunt.registerTask('docs', ['repos', 'readme']);

  // Tests to be run
  grunt.registerTask('test', ['assemble', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'clean', 'test', 'readme']);

};
