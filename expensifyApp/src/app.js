import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss'

const ExpenseDashboardPage = () => (
  <div>
    This is the dashboard
  </div>
);


const AddExpensePage = () => (
  <div>
    This is the add expense
  </div>
);

const EditExpensePage = () => (
  <div>
    This is the edit expense
  </div>
);

const HelpPage = () => (
  <div>
    This is the help page
  </div>
);

const NotFound = () => (
  <div>
    404 - <Link to="/">Go home</Link>
  </div>
);

const Header = () => (
  <header>
      <h1>Expensify</h1>
      <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
      <NavLink to="/create" activeClassName="is-active">Create</NavLink>
      <NavLink to="/edit" activeClassName="is-active">Edit</NavLink>
      <NavLink to="/help" activeClassName="is-active">Help</NavLink>
  </header>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true}/>
        <Route path="/create" component={AddExpensePage}/>
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
