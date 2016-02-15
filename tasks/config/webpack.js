var webpack = require("webpack");
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var path = require('path');

module.exports = function(grunt) {

    grunt.config.set('webpack', {

        dev: {

            // webpack options
            entry: {
                homepage: './assets/scripts/entries/homepage/main.js',
                post: './assets/scripts/entries/post/main.js'
            },

            output: {
                path: "./assets/js",
                filename: "[name].js"
            },

            resolve: {
                modulesDirectories: [
                    path.join(__dirname, "../../node_modules")
                ]
            },

            externals: {
                jquery: "jQuery",
                foundation: "Foundation",
                underscore: "Underscore"
            },

            plugins: [

                new webpack.ProvidePlugin({
                  '$': 'jquery',
                  jQuery: 'jquery'
                }),

                new CommonsChunkPlugin("commons.js")
            ]
        }
    });

    grunt.loadNpmTasks('grunt-webpack');
};
