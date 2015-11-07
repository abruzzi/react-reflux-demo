var React = require('react');
var moment = require('moment');

var Bookmark = React.createClass({
	render: function() {
		var created = new Date(this.props.created * 1000);
		var date = moment(created).format('YYYY-MM-DD');

		return <li>
			<div className='bookmark'>
				<h5 className='title'>{this.props.title}</h5>
				<span className='date'>Created at: {date}</span>
			</div>
		</li>;
	}
});

module.exports = Bookmark;