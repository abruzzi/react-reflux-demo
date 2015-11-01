var React = require('react');

var Bookmark = React.createClass({
	render: function() {
		return <li>
			<h5>{this.props.title}</h5>
		</li>;
	}
});

module.exports = Bookmark;