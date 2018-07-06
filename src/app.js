console.log('App.js is running!');

const app = {
    title: 'Indecision App',
    subTitle: 'This is some info',
    options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if(option) {
    app.options.push(option);
    e.target.elements.option.value = "";
  }
  renderApp();
};

const removeAll = () => {
  app.options = [];
  renderApp();
}

const appRoot = document.getElementById('app');

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options: " : "No options"}</p>
      <p>{app.options.length}</p>
      <button onClick={removeAll}>Remove all</button>
      <ol>
        <li>Item one</li>
        <li>Item two</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add option</button>  
      </form>
    </div>
  );

  const user = {
    age: 17,
    location: 'London'
  };

  ReactDOM.render(template, appRoot);
}

renderApp();