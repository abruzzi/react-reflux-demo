var React = require('react');

var Bookmark = React.createClass({displayName: "Bookmark",
	render: function() {
		return React.createElement("li", null, 
			React.createElement("h5", null, this.props.title)
		);
	}
});

module.exports = Bookmark;