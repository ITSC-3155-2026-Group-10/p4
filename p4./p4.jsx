'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header/header';
import Example from './components/example/example';
import States from './components/states/states';

class ViewSwitcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showExample: true
    };

    this.handleSwitch = this.handleSwitch.bind(this);
  }

  handleSwitch() {
    this.setState((prevState) => ({
      showExample: !prevState.showExample
    }));
  }

  render() {
    const buttonText = this.state.showExample
      ? 'Switch to States'
      : 'Switch to Example';

    return (
      <div className="view-switch-container">
        <div className="view-switch-controls">
          <button type="button" onClick={this.handleSwitch}>
            {buttonText}
          </button>
        </div>

        {this.state.showExample ? <Example /> : <States />}
      </div>
    );
  }
}

ReactDOM.render(
  <Header />,
  document.getElementById('reactappHeader')
);

ReactDOM.render(
  <ViewSwitcher />,
  document.getElementById('reactapp')
);
