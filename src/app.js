class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subTitle = 'Put your life in the hands of a computer';
    const options = ['Thing 1', 'thing 2', 'thing 3', 'thing 4'];
    return (
      <div>
        <Header title={title} subTitle={subTitle}/>
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.options.map( option => <Option key={option} optionText={option} />)
        }
      </div>
    );
  }
}

class Option extends React.Component {
    render() {
      return (
        <div>
          <p>{this.props.optionText}</p>
        </div>
      )
    }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <p>Add option componet here</p>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
