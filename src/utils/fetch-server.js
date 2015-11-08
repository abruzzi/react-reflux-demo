var $ = require('jquery');
var Promise = require('promise');
var fs = require('fs');

module.exports = {
    fetch: function(file) {
    	var real = __dirname+file;
        var promise = new Promise(function(resolve, reject) {
            fs.readFile(real, 'utf8', function(err, res) {
                if (err) reject(err);
                else resolve(res);
            });
        });

        return promise;
    }
}
