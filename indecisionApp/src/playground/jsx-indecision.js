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

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
}

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subTitle && <p>{app.subTitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options: " : "No options"}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={removeAll}>Remove all</button>
      <ol>
        {
          app.options.map(option => <li key={option}>{option}</li>)
        }
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
