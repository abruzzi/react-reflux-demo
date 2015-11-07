var React = require('react');
var BookmarkActions = require('../actions/bookmark-actions');

var SearchBox = React.createClass({
	performSearch: function() {
		var keyword = this.refs.keyword.value;
		BookmarkActions.search(keyword);
	},

	render: function() {
		return <div className="search">
			<input type='text' 
				placeholder='type to search...' 
				ref="keyword"
				onChange={this.performSearch} />	
		</div>
	}
});

module.exports = SearchBox;