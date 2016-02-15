var path = require('path');
var fs = require('fs');

module.exports ={
    slugify: require(path.join(__dirname, 'slugify')).slugify
};

// var exports = {};

// fs.readdir(path.join(__dirname), function(error, files) {

//     if (error) return console.error(error);

//     files.forEach(function(file) {
//         if (file == 'index.js') return;
//         var key = file.split('.')[0];
//         var util = require(path.join(__dirname, key));
//         exports[key] = util[key];
//     });
// });

// module.exports = exports;
