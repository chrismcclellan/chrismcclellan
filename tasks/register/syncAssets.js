module.exports = function (grunt) {
	grunt.registerTask('syncAssets', [
        'webpack:dev',
		'compass:dev',
		'sync:dev'
	]);
};
