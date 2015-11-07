var React = require('react');
var moment = require('moment');

var Bookmark = React.createClass({displayName: "Bookmark",
	render: function() {
		var created = new Date(this.props.created * 1000);
		var date = moment(created).format('YYYY-MM-DD');

		return React.createElement("li", null, 
			React.createElement("div", {className: "bookmark"}, 
				React.createElement("h5", {className: "title"}, this.props.title), 
				React.createElement("span", {className: "date"}, "Created at: ", date)
			)
		);
	}
});

module.exports = Bookmark;