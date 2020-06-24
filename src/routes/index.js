import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Dashboard from '~/pages/Dashboard';
import Services from '~/pages/Services';
import Profile from '~/pages/Profile';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/services" component={Services} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/register" component={SignUp} />
    </Switch>
  );
}
