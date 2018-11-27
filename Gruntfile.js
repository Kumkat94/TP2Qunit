module.exports = function(grunt) {
    grunt.initConfig({
      
      uglify: {

        build: {
          src: ["js/*"],
          dest: "dist/built.js",
        },
      },
    });
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.registerTask("default","uglify")
  };

  