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
import Dispatch from 'routes/Dispatch/Dispatch';
import DispatchShow from 'routes/DispatchShow/DispatchShow';
// import User from 'routes/User/User';
import Login from 'components/Login/Login';

import GraphChart from 'routes/ECharts/GraphChart';
import User from 'routes/UserManage/User';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Main>
        <Switch>
          {/* <Route path="/create" exact component={CreateOrder} />
          <Route path="/audit" exact component={OrderAudit} />
          <Route path="/search" exact component={SearchForm} />
          <Route path="/show" exact component={Show} />
          <Route path="/purchase" exact component={PurchaseStep} />
          <Route path="/production" exact component={ProductionStep} />
          <Route path="/transport" exact component={TransportStep} />
          <Route path="/question" exact component={Question} />
          <Route path="/dispatch" exact component={Dispatch} />
          <Route path="/dispatchshow" exact component={DispatchShow} />
          <Route path="/user" exact component={User} />
          <Redirect to="/create" exact component={CreateOrder} /> */}

          <Route path="/objBuilder" exact component={GraphChart} />
          <Route path="/relBuilder" exact component={GraphChart} />
          <Route path="/genera" exact component={GraphChart} />
          <Route path="/data" exact component={DispatchShow} />
          <Route path="/user" exact component={User} />
          <Redirect to="/graphbuilder" exact component={CreateOrder} />
        </Switch>
      </Main>
    </Router>

  );
}

export default RouterConfig;
