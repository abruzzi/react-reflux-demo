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
		$.get('/bookmarks').done(function(bookmarks) {
			self.trigger(bookmarks);
		});
	},

	onSearch: function(keyword) {
		var self = this;
		$.get('/bookmarks?keyword='+keyword).done(function(bookmarks) {
			self.trigger(bookmarks);
		});
	}
});

module.exports = BookmarkStore;