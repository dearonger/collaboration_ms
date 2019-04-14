import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import Main from 'components/Main/Main';
import CreateOrder from 'routes/CreateOrder/CreateOrder';
import OrderAudit from 'routes/OrderAudit/OrderAudit';
import SearchForm from 'routes/SearchForm/SearchForm';
import Show from 'routes/Show/Show';
import PurchaseStep from 'routes/PurchaseStep/PurchaseStep';
import ProductionStep from 'routes/ProductionStep/ProductionStep';
import TransportStep from 'routes/TransportStep/TransportStep';
import Question from 'routes/Question/Question';
// import Login from 'components/Login/Login';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Main>
        <Switch>
          <Route path="/create" exact component={CreateOrder} />
          <Route path="/audit" exact component={OrderAudit} />
          <Route path="/search" exact component={SearchForm} />
          <Route path="/show" exact component={Show} />
          <Route path="/purchase" exact component={PurchaseStep} />
          <Route path="/production" exact component={ProductionStep} />
          <Route path="/transport" exact component={TransportStep} />
          <Route path="/question" exact component={Question} />
          <Redirect to="/create" exact component={CreateOrder} />
        </Switch>
      </Main>
    </Router>
    
  );
}

export default RouterConfig;
