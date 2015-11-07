var React = require('react');
var Reflux = require('reflux');

var BookmarkStore = require('../stores/bookmark-store.js');
var Bookmark = require('./bookmark.js');

var BookmarkList = React.createClass({
	mixins: [Reflux.connect(BookmarkStore, 'bookmarks')],

	getInitialState: function() {
		return {
			bookmarks: {data: []}
		}
	},

	render: function() {
		var list = [];
		this.state.bookmarks.data.forEach(function(item) {
	      list.push(<Bookmark title={item.title} created={item.created}/>)
	    });
	    
		return <ul>
			{list}
		</ul>
	}
});

module.exports = BookmarkList;