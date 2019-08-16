import React from 'react';
import { Route, Switch } from 'react-router';
import Main from '../components/Main';
import Register from '../components/Register';
import Logs from '../components/Logs';

const routes = (
  <div>
    <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/register' component={Register} />
      <Route path='/logs' component={Logs} />
    </Switch>
  </div>
)

export default routes;