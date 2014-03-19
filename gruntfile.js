module.exports = function(grunt){

	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-gh-pages');

	grunt.initConfig({
		browserify: {
      production: {
        src: ['src/main.js'],
        dest: 'www/js/main.js'
      } // production
    }, // browserify
		compass: {
			compile: {
				options: {
					config: 'compass-config.rb'
				} //options
			} //compile
		}, //compass
		clean: ["www"], // clean
		copy: {
		  main: {
		    files: [
		      // copy root files
		      {expand: true, flatten: true, src: ['src/*'], dest: 'www/', filter: 'isFile'},

		      // copy img directory
		      {expand: true, cwd: 'src/', src: ['img/**'], dest: 'www/'},

		      // copy css directory
		      {expand: true, cwd: 'src/', src: ['css/*'], dest: 'www/'},

		      // copy helper.js
		      {expand: true, cwd: 'src/', src: ['js/helper.js'], dest: 'www/'},

		    ] //files
		  } //main
		}, //copy
		'gh-pages': {
	    options: {
	      base: 'www'
	    },
	    src: ['**']
	  }, // gh-pages
		watch: {
			scripts: {
				files: ['src/js/app/**/*.js'],
			}, //scripts
			sass: {
				files: ['src/sass/*.scss'],
				tasks: ['compass:dev']
			}, //sass
			html: {
				files: ['*.html']
			} //html
		} //watch
	}) //initConfig

	var message = grunt.option('m') || 'Auto-generated commit from grunt production';
	grunt.registerTask('default', 'watch');
	grunt.registerTask('production', ['browserify:production','compass:compile','clean','copy','gh-pages --gh-pages-message "'+message+'"','clean']);
	grunt.registerTask('development', ['browserify:production','compass:compile','clean','copy']);
} //exports