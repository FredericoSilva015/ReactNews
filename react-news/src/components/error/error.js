import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './error.css';

/**
 * Component Footer
 * Used in homepage
 * @class
 */
class Error extends Component {
 

  render() {
      return (
        <div className="container">
          <p>404! Apologies good sir!But what your looking for, doesn't exist.</p>

          <NavLink to="/">Home</NavLink>
        </div>
      );
  }
}

export default Error;