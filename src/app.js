var React = require('react');
var ReactDOM = require('react-dom');
var BookmarkList = require('./components/bookmark-list.js');

ReactDOM.render(React.createElement(BookmarkList), 
	document.getElementById('container'));