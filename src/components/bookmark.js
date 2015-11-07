var React = require('react');

var Bookmark = React.createClass({displayName: "Bookmark",
	render: function() {
		var created = new Date(this.props.created * 1000);
		return React.createElement("li", null, 
			React.createElement("div", {className: "bookmark"}, 
				React.createElement("h5", {className: "title"}, this.props.title), 
				React.createElement("span", {className: "date"}, "Created at: ", this.props.created)
			)
			
		);
	}
});

module.exports = Bookmark;