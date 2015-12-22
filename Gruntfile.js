/**
 * Created by novacrazy on 7/8/14.
 */

module.exports = function( grunt ) {

    grunt.loadNpmTasks( 'grunt-babel' );
    grunt.loadNpmTasks( 'grunt-contrib-clean' );
    grunt.loadNpmTasks( 'grunt-banner' );
    grunt.loadNpmTasks( 'grunt-webpack' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );

    var LICENSE = '/****\n * ' + grunt.file.read( './LICENSE', {encoding: 'utf-8'} ).replace( /\n/ig, '\n * ' )
                  + '\n ****/';

    grunt.initConfig( {
        babel:     {
            options: {
                ast:        false,
                sourceMaps: false,
                compact:    false
            },
            build:   {
                options: require( './babel.config.js' ),
                files:   [
                    {
                        expand: true,
                        cwd:    './src/',
                        src:    './**/*.jsx',
                        dest:   './build/',
                        ext:    '.js'
                    }
                ]
            }
        },
        usebanner: {
            license: {
                options: {
                    position:  'top',
                    banner:    LICENSE,
                    linebreak: true
                },
                files:   {
                    src: ['./build/**/*.js', './demo/build/**/*.js']
                }
            }
        },
        webpack:   {
            build: require( './webpack.config.js' )
        },
        clean:     {
            build: {
                src: ['./build/', './demo/dist/']
            }
        },
        watch:     {
            options: {},
            build:   {
                files: ['./src/**/*.jsx', './demo/src/**/*.jsx'],
                tasks: ['default']
            }
        }
    } );

    grunt.registerTask( 'build', [
        'clean:build',
        'babel:build',
        'usebanner:license',
        'webpack:build'
    ] );

    grunt.registerTask( 'default', ['build'] );
};
