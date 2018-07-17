import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default class CustomReactModule extends Component {
  render() {
    return React.createElement(
      'div',
      null,
      'Hello world!'
    );
  }
}

CustomReactModule.propTypes = {};

CustomReactModule.defaultProps = {};
module.exports = exports['default'];