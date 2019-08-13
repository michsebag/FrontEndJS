module.exports = function (grunt) {

    var fileConfige = {
        buildPAth: 'build',
        app: 'app'
    }



    var initConfig = {};

    initConfig.clean = {
        folders: ["build/*", 'templates/min*']
    };
    initConfig.watch = {
        gruntfile: {
            files: 'Gruntfile.js',
            tasks: ['jshint:gruntfile'],
        }
    };
    initConfig.connect = {
        server: {
            options: {
                port: 9000,
                base: fileConfige.buildPAth
            }
        }
    };


    // CONFIGURE GRUNT
    grunt.initConfig(initConfig);


    // Load the plugin that provides the "uglify" task
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-copy');
    

    grunt.loadNpmTasks('grunt-htmlhint');


    grunt.registerTask('miki', ['connect', 'watch']);


    grunt.registerTask('avi', ['miki']);





};