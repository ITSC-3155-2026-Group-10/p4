'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link, Redirect, Switch } from 'react-router-dom';

import Header from './components/header/header';
import Example from './components/example/example';
import States from './components/states/states';

class RoutedApp extends React.Component {
  render() {
    return (
      <HashRouter>
        <div className="router-app">
          <div className="toolbar">
            <Link className="toolbar-link" to="/example">
              Example
            </Link>
            <Link className="toolbar-link" to="/states">
              States
            </Link>
          </div>

          <Switch>
            <Route exact path="/">
              <Redirect to="/example" />
            </Route>
            <Route path="/example" component={Example} />
            <Route path="/states" component={States} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

ReactDOM.render(
  <Header />,
  document.getElementById('reactappHeader')
);

ReactDOM.render(
  <RoutedApp />,
  document.getElementById('reactapp')
);
