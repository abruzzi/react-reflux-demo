var React = require('react');
var BookmarkActions = require('../actions/bookmark-actions');

var SearchBox = React.createClass({displayName: "SearchBox",
	performSearch: function() {
		var keyword = this.refs.keyword.value;
		BookmarkActions.search(keyword);
	},

	render: function() {
		return React.createElement("div", {className: "search"}, 
			React.createElement("input", {type: "text", 
				placeholder: "type to search...", 
				ref: "keyword", 
				onChange: this.performSearch})	
		)
	}
});

module.exports = SearchBox;