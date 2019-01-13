import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import Main from 'components/Main/Main';
import CreateOrder from 'routes/CreateOrder/CreateOrder';
import SearchForm from 'routes/SearchForm/SearchForm';
import PurchaseStep from 'routes/PurchaseStep/PurchaseStep';
import ProductionStep from 'routes/ProductionStep/ProductionStep';
import TransportStep from 'routes/TransportStep/TransportStep';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Main>
        <Switch>
          <Route path="/create" exact component={CreateOrder} />
          <Route path="/search" exact component={SearchForm} />
          <Route path="/purchase" exact component={PurchaseStep} />
          <Route path="/production" exact component={ProductionStep} />
          <Route path="/transport" exact component={TransportStep} />
          <Redirect path="/create" exact component={CreateOrder} />
        </Switch>
      </Main>
    </Router>
    
  );
}

export default RouterConfig;
