'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
var app = {
  title: 'Indecision App',
  subTitle: 'This is some info',
  options: ['one', 'two']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subTitle && React.createElement(
    'p',
    null,
    app.subTitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? "Here are your options: " : "No options"
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

var user = {
  age: 17,
  location: 'London'
};

var count = 0;

var addOne = function addOne() {
  return console.log('addOne');
};
var minusOne = function minusOne() {
  return console.log('minusOne');
};
var reset = function reset() {
  return console.log('reset');
};

var template2 = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Count: ',
    count
  ),
  React.createElement(
    'button',
    { onClick: addOne },
    '+1'
  ),
  React.createElement(
    'button',
    { onClick: minusOne },
    '-1'
  ),
  React.createElement(
    'button',
    { onClick: reset },
    'reset'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
