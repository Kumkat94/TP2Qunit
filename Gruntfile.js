module.exports = function(grunt) {
    grunt.initConfig({
      
      uglify: {

        build: {
          src: ["js/*"],
          dest: "dist/built.js",
        },
      },

      watch: {
        scripts: {
          files: 'js/*.js', // tous les fichiers JavaScript de n'importe quel dossier
          tasks: ['uglify']
        },
      }

    });

    

    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.registerTask("default", ["uglify","watch"])
    grunt.registerTask("mocha", ["uglify"])
  };

  