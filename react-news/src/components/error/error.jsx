import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './error.css';

class Error extends Component {
 
  render() {
    return (
      <div className="container">
        <div className="error__wrapper">
        
          <p>404! Apologies good sir! But the content was eaten by a black hole and joined singularity!</p>

          <NavLink to="/">Home</NavLink>
        </div>
      </div>
    );
  }
}

export default Error;