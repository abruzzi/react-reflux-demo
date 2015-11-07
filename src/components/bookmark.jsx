var React = require('react');

var Bookmark = React.createClass({
	render: function() {
		var created = new Date(this.props.created * 1000);
		return <li>
			<div className="bookmark">
				<h5 className="title">{this.props.title}</h5>
				<span className="date">Created at: {this.props.created}</span>
			</div>
			
		</li>;
	}
});

module.exports = Bookmark;