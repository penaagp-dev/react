import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import * as auth from '../lib/auth';

import DashboardPage from '../pages/Dashboard';
import LoginPage from '../pages/LoginPage';
import BoardListPage from '../pages/BoardList';
import ChannelListPage from '../pages/ChannelList';
import WidgetCreatePage from '../pages/WidgetCreate';
import WidgetUpdatePage from '../pages/WidgetUpdate';
import WidgetChannelsPage from '../pages/WidgetChannels';
import ChannelCreatePage from '../pages/ChannelCreate';
import ChannelUpdatePage from '../pages/ChannelUpdate';
import ServiceListPage from '../pages/ServiceList';
import UserCreate from '../pages/UserCreate';
import BoardCreate from '../pages/BoardCreate';
import Register from '../pages/Register';

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        auth.hasToken() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

function NoMatch() {
  if (auth.hasToken()) {
    return <Redirect to="/dashboard" />
  }

  return <Redirect to="/login" />
}

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/user" component={UserCreate} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/dashboard" exact component={DashboardPage} />
        <PrivateRoute path="/board" exact component={BoardListPage} />
        <PrivateRoute path="/board/create" exact component={BoardCreate} />
        <PrivateRoute path="/channel" exact component={ChannelListPage} />
        <PrivateRoute path="/service" exact component={ServiceListPage} />
        <PrivateRoute path="/widget/:id_channels/create" exact component={WidgetCreatePage} />
        <PrivateRoute path="/widget/:id/edit" exact component={WidgetUpdatePage} />
        <PrivateRoute path="/widget/:id/channels" exact component={WidgetChannelsPage} />
        <PrivateRoute path="/channel/create" exact component={ChannelCreatePage} />
        <PrivateRoute path="/channel/:id/edit" exact component={ChannelUpdatePage} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}