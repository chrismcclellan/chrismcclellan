/**
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 * ---------------------------------------------------------------
 *
 * Watch for changes on
 * - files in the `assets` folder
 * - the `tasks/pipeline.js` file
 * and re-run the appropriate tasks.
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-watch
 *
 */
module.exports = function(grunt) {

  grunt.config.set('watch', {

        js: {
            files: ['assets/scripts/**/*'],
            tasks: ['webpack', 'syncAssets']
        },

        styles: {
            files: ['assets/scss/**/*'],
            tasks: ['compass:dev', 'syncAssets']
        },

        assets: {
            files: ['tasks/pipeline.js', '!**/node_modules/**'],
            tasks: ['syncAssets']
        }

        // assets: {

        //   // Assets to watch:
        //   files: ['assets/**/*', 'tasks/pipeline.js', '!**/node_modules/**'],

        //   // When assets are changed:
        //   tasks: ['webpack', 'compass', 'syncAssets']
        // }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
};
