module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      css: {
        src: ['css/src/*.css'],
        dest: 'css/dist/main_css.css'
      },
      js: {
        src: ['js/src/*.js'],
        dest: 'js/dist/main_script.js'
      }
    },
    uglify: {
      js: {
        src: ['js/dist/main_script.js'],
        dest: 'js/dist/main_script.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat', 'uglify']);

};