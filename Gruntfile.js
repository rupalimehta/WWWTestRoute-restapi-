module.exports = function(grunt) {

  grunt.initConfig({
   
    jshint: {
        
      files: ['Gruntfile.js', 'lib\*.js', 'test\*.js','server.js'] ,

      options: {
		  reporter: require('jshint-log-reporter'),
		  reporterOutput: 'path_to_an_output_file.html'
       /* globals: {
                 jQuery: true
                 }*/
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
      
      
      
	/* env: {
     coverage: {
        APP_DIR_FOR_CODE_COVERAGE: 'test\\*.js'
     },
                   
    instrument: 
                   {
      files: '*.js',
      options: {
        lazy: true,
        basePath: 'test\\*.js'
      }
    },
    mochaTest: {
      options: {
        reporter: 'spec'
      },
      src: ['test\\*.js']
    },
    storeCoverage: {
      options: {
        dir: 'test\\coverage\\reports'
      }
    },
    makeReport: {
      src: 'test\\*.js',
      options: {
        type: 'lcov',
        dir: 'test\\*.js',
        print: 'detail'
      }
    }
    }*/
      
	mochaTest: {
      'mochawesome': {
        options: {
          reporter: 'mochawesome',
          captureFile: 'mocha-output.html', // Optionally capture the reporter output to a file 
          quiet: false, // Optionally suppress output to standard out (defaults to false) 
          clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false) 
        },
        src: ['test\\*.js']
      },
	  'mocha-spec-json-reporter': {
        options: {
          reporter: 'mocha-spec-json-reporter',
          captureFile: 'mocha-output.json', // Optionally capture the reporter output to a file 
          quiet: false, // Optionally suppress output to standard out (defaults to false) 
          clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false) 
        },
        src: ['test\\*.js']
      }
    },
mocha_istanbul: {
            coverage: {
                src: 'test', // a folder works nicely 
                options: {
                    mask: '**\*.js'
                }
            }
	},
      sonarRunner: {
        analysis: {
            options: {
                debug: true,
                separator: '\n',
                sonar: {
                    host: {
                        url: 'http://localhost:9000'
                    },
                     projectKey: 'sonar:grunt-sonar-runner:0.1.0',
                    projectName: 'GruntSonarRunner',
                    projectVersion: '0.10',
                    sources: ['test'].join(','),
                    language: 'js',
                    sourceEncoding: 'UTF-8'
                }
            }
        }
    }
	
	
  
	/*
	SpecTest: {
         src: ['test/*.js'],
		options: {
          reporter: 'mochawesome'
          
        }
       
      }
	  */
	});

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('mocha-spec-json-reporter');
  grunt.loadNpmTasks('mochawesome');
  grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-sonar-runner');
     grunt.loadNpmTasks('grunt-mocha-istanbul');
  
  grunt.registerTask('default', ['jshint','sonarRunner','mochaTest','mocha_istanbul'/*,'SpecTest'*/]);
  /*grunt.registerTask('coverage', ['env:coverage', 'instrument', 'mochaTest',
    'storeCoverage', 'makeReport']);*/
};