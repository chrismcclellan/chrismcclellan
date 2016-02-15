module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:dev',
        'webpack:dev',
		'compass:dev',
		'copy:dev'
    ]);
};
