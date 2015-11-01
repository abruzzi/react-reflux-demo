var $ = require('jquery');
var Reflux = require('reflux');
var BookmarkActions = require('../actions/bookmark-actions');

var BookmarkStore = Reflux.createStore({
	listenables: [BookmarkActions],

	init: function() {
		this.onFetch();
	},

	onFetch: function() {
		var self = this;
		$.get('/data/bookmarks.json').done(function(bookmarks) {
			self.trigger(bookmarks);
		});
	}
});

module.exports = BookmarkStore;