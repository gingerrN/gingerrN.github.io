module.exports = function(grunt) {

  grunt.initConfig({
    
    sprite: {
      all:{
        src: 'img/src/*.png',
        dest: 'img/dest/sprite-file.png', 
        destCss: 'img/dest/sprite-file.css',
        padding: 2
      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'styles',
          src: ['*.scss'],
          dest: 'styles',
          ext: '.css'
        }]
      }
    },
    watch: {
      sass: {
        // We watch and compile sass files as normal but don't live reload here
        files: ['styles/*.scss'],
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-spritesmith');

  grunt.registerTask('default', ['sass']);

};