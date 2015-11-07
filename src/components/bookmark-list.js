var React = require('react');
var Reflux = require('reflux');

var BookmarkStore = require('../stores/bookmark-store.js');
var Bookmark = require('./bookmark.js');

var BookmarkList = React.createClass({displayName: "BookmarkList",
	mixins: [Reflux.connect(BookmarkStore, 'bookmarks')],

	getInitialState: function() {
		return {
			bookmarks: []
		}
	},

	render: function() {
		var list = [];
		this.state.bookmarks.forEach(function(item) {
	      list.push(React.createElement(Bookmark, {title: item.title, created: item.created}))
	    });
	    
		return React.createElement("ul", null, 
			list
		)
	}
});

module.exports = BookmarkList;