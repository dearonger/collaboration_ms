import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Login from './routes/Login/Login';
import Main from './routes/Main/Main';
import CreateOrder from './components/CreateOrder/CreateOrder';
import SearchForm from './components/SearchForm/SearchForm';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/main" exact component={Main} />
        <Route path="/create" exact component={CreateOrder} />
        <Route path="/search" exact component={SearchForm} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
