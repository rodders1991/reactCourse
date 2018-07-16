import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NotFound from '../components/NotFound';
import Header from '../components/Header';
import PortfolioDashboard from '../components/PortfolioDashboard';
import Portfolio from '../components/Portfolio';
import PortfolioView from '../components/PortfolioView';
import ContactPage from '../components/ContactPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={PortfolioDashboard} exact={true}/>
        <Route path="/portfolio" component={Portfolio} exact={true} />
        <Route path="/portfolio/:id" component={PortfolioView} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
