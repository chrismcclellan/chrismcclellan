

var Handlebars = require('sails/node_modules/express-handlebars/node_modules/handlebars');
var helpers = {};

/**
 * Add
 */
helpers.add = function(context, options) {
    var firstNum = context;
    var secondNum = options.hash.add;
    return firstNum + secondNum;
};

/**
 * Subtract
 */
helpers.subtract = function(context, options) {
    var firstNum = context;
    var secondNum = options.hash.subtract;
    return firstNum - secondNum;
};

/**
 * Multiply
 */
helpers.multiply = function(context, options) {
    var firstNum = context;
    var secondNum = options.hash.multiply;
    return firstNum * secondNum;
};


for (var cond in helpers) {
    Handlebars.registerHelper(cond, helpers[cond]);
}
