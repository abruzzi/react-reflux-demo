var React = require('react');
var SearchBox = require('./searchbox.js');
var BookmarkList = require('./bookmark-list.js');

var BookmarkApp = React.createClass({displayName: "BookmarkApp",
	render: function() {
		return React.createElement("div", null, 
			React.createElement(SearchBox, null), 
			React.createElement(BookmarkList, null)
		)
	}
});

module.exports = BookmarkApp;