'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header/header';
import States from './components/states/states';

ReactDOM.render(
  <Header />,
  document.getElementById('reactappHeader')
);

ReactDOM.render(
  <States />,
  document.getElementById('reactapp')
);
