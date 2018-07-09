class VisibilityToggle extends React.Component {
	constructor(props) {
		super(props);
		this.toggleDetails = this.toggleDetails.bind(this);

		this.state = {
			visibility: false
		}
	}
	toggleDetails() {
		this.setState( prevState => {
			return {
				visibility: !prevState.visibility,
			};
		})
	}
	render() {
		const { visibility } = this.state;
		return (
			<div>
				<h1>Visibility Toggle</h1>
				<button onClick={this.toggleDetails}>{visibility ? 'Hide Details' : 'Show Details'}</button>
				{visibility && <p>Hi how are you!</p>}
			</div>
		);
	}
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

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
