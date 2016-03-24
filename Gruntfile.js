module.exports = function(grunt) {
    
    grunt.initConfig({
	jshint: {	 
            files: ['Gruntfile.js', '*.js'],
	    options: {
		globals: {
		    jQuery: true
		}
	    }
	},
	watch: {
	    files: ['<%= jshint.files %>'],
	    tasks: ['jshint']
	},

	wiredep:{
	 
	    task: {
		
	    src: [
	          '*.html',   // .html support...
	    ],
		
		options: {
		    // See wiredep's configuration documentation for the options
	            // you may pass:
		    
		    // https://github.com/taptapship/wiredep#configuration
		}
	    }
	}
    });
    
    //grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //grunt.registerTask('default', ['jshint']);
    grunt.loadNpmTasks('grunt-bower');
    grunt.loadNpmTasks('grunt-wiredep');
    
    grunt.registerTask('default', ['wiredep']);
};
