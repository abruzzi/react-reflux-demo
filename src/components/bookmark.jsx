var React = require('react');

var Bookmark = React.createClass({
	render: function() {
		return <li>
			<div>
				<h5 className="title">{this.props.title}</h5>
				<span className="date">{this.props.created}</span>
			</div>
			
		</li>;
	}
});

module.exports = Bookmark;