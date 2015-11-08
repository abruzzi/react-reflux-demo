var $ = require('jquery');
var Reflux = require('reflux');
var BookmarkActions = require('../actions/bookmark-actions');

var Utils = require('../utils/fetch-client');

var BookmarkStore = Reflux.createStore({
	listenables: [BookmarkActions],

	init: function() {
		this.onFetch();
	},

	onFetch: function() {
		var self = this;
		Utils.fetch('/bookmarks').then(function(bookmarks) {
			self.trigger({
				data: bookmarks,
				match: ''
			});
		});
	},

	onSearch: function(keyword) {
		var self = this;

		Utils.fetch('/bookmarks?keyword='+keyword).then(function(bookmarks) {
			self.trigger({
				data: bookmarks,
				match: keyword
			});
		});
	}
});

module.exports = BookmarkStore;