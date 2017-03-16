module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'Modul6Sass/Style_inne.css': 'Modul6Sass/Style_inne.sass'
                }
            }
        },

        atch: {
            scripts: {
                files: ['Modul6sass/*.sass'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                },
            }
        },


    });
    // Load the plugins tasks
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // Default task(s).

    grunt.registerTask('default', ['sass', 'imagemin']);

};

