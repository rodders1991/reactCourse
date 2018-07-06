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

let count = 0;

const addOne = () => console.log('addOne');
const minusOne = () => console.log('minusOne');
const reset = () => console.log('reset');

const template2 = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>reset</button>
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
