import React, { Component } from 'react';
// import './homepage.css';
import { NavLink } from 'react-router-dom';

/**
 * Component Footer
 * Used in homepage
 * @class
 */
class Error extends Component {
 

  render() {
      return (
        <div className="">
          <p>404! Apologies good sir!But what your looking for, doesn't exist.</p>

          <NavLink to="/">Home</NavLink>
        </div>
      );
  }
}

export default Error;