var React = require('react');
var SearchBox = require('./searchbox.js');
var BookmarkList = require('./bookmark-list.js');

var BookmarkApp = React.createClass({
	render: function() {
		return <div>
			<SearchBox />
			<BookmarkList />
		</div>
	}
});

module.exports = BookmarkApp;