console.log('App.js is running!');

// JSX - JavaScript XML
const app = {
  title: 'Indecision App',
  subTitle: 'This is some info',
  options: ['one', 'two']
}

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subTitle && <p>{app.subTitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options: " : "No options"}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

const user = {
  age: 17,
  location: 'London'
};

const template2 = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    <p>Location: {user.location}</p>
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
