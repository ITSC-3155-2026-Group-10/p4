'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header/header';
import Example from './components/example/example';
import './styles/main.css';

class GettingStartedApp extends React.Component {
  render() {
    return (
      <div className="app-shell">
        <Header />
        <Example />
      </div>
    );
  }
}

ReactDOM.render(
  <GettingStartedApp />,
  document.getElementById('reactapp')
);
