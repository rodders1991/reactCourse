'use strict';

console.log('App.js is running!');

var appRoot = document.getElementById('app');

var visibility = false;
var toggleDetails = function toggleDetails() {
	visibility = !visibility;
	render();
};

var render = function render() {
	var template = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			'Visibility Toggle'
		),
		React.createElement(
			'button',
			{ onClick: toggleDetails },
			visibility ? 'Hide Details' : 'Show details'
		),
		visibility && React.createElement(
			'p',
			null,
			'Hi how are you?'
		)
	);

	ReactDOM.render(template, appRoot);
};

render();
