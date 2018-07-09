'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VisibilityToggle = function (_React$Component) {
	_inherits(VisibilityToggle, _React$Component);

	function VisibilityToggle(props) {
		_classCallCheck(this, VisibilityToggle);

		var _this = _possibleConstructorReturn(this, (VisibilityToggle.__proto__ || Object.getPrototypeOf(VisibilityToggle)).call(this, props));

		_this.toggleDetails = _this.toggleDetails.bind(_this);

		_this.state = {
			visibility: false
		};
		return _this;
	}

	_createClass(VisibilityToggle, [{
		key: 'toggleDetails',
		value: function toggleDetails() {
			this.setState(function (prevState) {
				return {
					visibility: !prevState.visibility
				};
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var visibility = this.state.visibility;

			return React.createElement(
				'div',
				null,
				React.createElement(
					'h1',
					null,
					'Visibility Toggle'
				),
				React.createElement(
					'button',
					{ onClick: this.toggleDetails },
					visibility ? 'Hide Details' : 'Show Details'
				),
				visibility && React.createElement(
					'p',
					null,
					'Hi how are you!'
				)
			);
		}
	}]);

	return VisibilityToggle;
}(React.Component);

ReactDOM.render(React.createElement(VisibilityToggle, null), document.getElementById('app'));

// console.log('App.js is running!');
//
// const appRoot = document.getElementById('app');
//
// let visibility = false;
// const toggleDetails = () => {
// 	visibility = !visibility;
// 	render();
// };
//
// const render = () => {
// 	const template = (
// 		<div>
// 			<h1>Visibility Toggle</h1>
// 			<button onClick={toggleDetails}>{visibility ? 'Hide Details' : 'Show details'}</button>
// 			{visibility && <p>Hi how are you?</p>}
// 		</div>
// 	);
//
// 	 ReactDOM.render(template, appRoot);
//
// }
//
// render();
