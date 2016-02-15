
/**
 * HomeController
 *
 * @description :: Server-side logic for managing series
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

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
            res.view('pages/homepage/page', data);
        });
    }

};
