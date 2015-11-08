var $ = require('jquery');
var Promise = require('promise');

module.exports = {
    fetch: function(url) {
        var promise = new Promise(function (resolve, reject) {
            $.get(url).done(resolve).fail(reject);
        });

        return promise;
    }
}