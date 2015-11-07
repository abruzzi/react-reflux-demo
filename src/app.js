var React = require('react');
var ReactDOM = require('react-dom');
var BookmarkApp = require('./components/bookmark-app.js');

ReactDOM.render(React.createElement(BookmarkApp), 
	document.getElementById('container'));