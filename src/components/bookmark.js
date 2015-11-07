var React = require('react');
var Reflux = require('reflux');
var moment = require('moment');

var BookmarkStore = require('../stores/bookmark-store.js');

var Bookmark = React.createClass({displayName: "Bookmark",
	mixins: [Reflux.listenTo(BookmarkStore, 'onMatch')],

    onMatch: function(data) {
        this.setState({
            match: data.match
        });
    },

	getInitialState: function() {
		return {
			match: ''
		}
	},

	render: function() {
		var created = new Date(this.props.created * 1000);
		var date = moment(created).format('YYYY-MM-DD');

		var title = this.props.title;
		if(this.state.match.length > 0) {
			title = React.createElement("span", {
		        dangerouslySetInnerHTML: {
		          __html : this.props.title.replace(new RegExp('('+this.state.match+')', "gi"), '<span class="highlight">$1</span>')
		        }})
		}

		return React.createElement("li", null, 
			React.createElement("div", {className: "bookmark"}, 
				React.createElement("h5", {className: "title"}, title), 
				React.createElement("span", {className: "date"}, "Created @ ", date)
			)
		);
	}
});

module.exports = Bookmark;