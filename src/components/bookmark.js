var React = require('react');

var Bookmark = React.createClass({displayName: "Bookmark",
	render: function() {
		return React.createElement("li", null, 
			React.createElement("div", null, 
				React.createElement("h5", {className: "title"}, this.props.title), 
				React.createElement("span", {className: "date"}, this.props.created)
			)
			
		);
	}
});

module.exports = Bookmark;