
/**
 * HomeController
 *
 * @description :: Server-side logic for managing series
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var fs = require('fs');
var path = require('path');
var async = require('async');
var moment = require('moment');

module.exports = {

    index: function(req, res) {

        var sails = req._sails || {};
        var config = sails.config || {};
        var spoon = config.spoon || {};

        async.series({

            // classes added to the `body` in the dom
            classes: function(next) {
                var classes = ['homepage'];
                next(null, classes);
            }
        },
        function(error, data) {

            if (error) return res.error(500);

            sails.hooks.views.render('pages/homepage/page', data, function(error, html) {

                if (error) return res.serverError(error);

                console.log('rendered html');

                // get css
                fs.readFile(path.join(__dirname, '../../../assets/css/app.css'), "utf8", function(err, css) {

                    if (err) throw err;

                    // console.log('get css', css);

                    // inline css
                    html = html.replace('<link rel="stylesheet" type="text/css" href="/css/app.css" />', '<style>' + css + '</style>');

                    // minify
                    var minified = require('html-minifier').minify(html, {
                        collapseWhitespace: true,
                        removeComments: true,
                        removeTagWhitespace: true,
                        removeEmptyAttributes: true,
                        caseSensitive: true,
                        removeAttributeQuotes: true,
                        keepClosingSlash: true,
                        preventAttributesEscaping: true,
                        minifyJS: true
                    });

                    console.log('minify', minified);

                    // write to index.html
                    fs.writeFile(path.join(__dirname, '../../../index.html'), minified, 'utf8', function (err) {

                        if (err) return console.log('FS ERROR', err);

                        console.log('write to file');

                        // send html
                        res.send(200, minified);
                    });
                });
            });
        });
    }

};
