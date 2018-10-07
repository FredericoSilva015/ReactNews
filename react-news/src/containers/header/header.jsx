import React, { Component, createContext } from 'react';
import { NavLink } from 'react-router-dom';
import Main from '../../components/main/main';
import Footer from '../../components/footer/footer';
import './header.css';

/**
 * @constant {AppContext}
 * @description initialise the Context here
 */
export const AppContext = createContext();

class Header extends Component {

constructor(props) {
  super(props);
  this.state = {
    error: null,
    isLoaded: false,
    featured: null,
    previewArray: [],
  }
};

/** 
 * @name componentDidMount
 * @private
 * @method fetch
 * @returns {Object}
 * @description Obtain Data from the guardian API using fetch
 */
componentDidMount() {

  fetch('https://content.guardianapis.com/search?show-tags=keyword&api-key=3a252dbd-528c-4214-9211-a89fcfb96697')
  .then(response => response.json())
  .then(
    // on success 
    (result) => {
      // manipulating the result,
      const data = result.response.results;
      const first = data.shift();
      const preview = data;

      this.setState({
        isLoaded : true,
        featured : first,
        previewArray : preview,
      });

      // console.log('state',this.state)
    },
    // on error
    (error) => {
      this.setState({
        isLoaded : false,
        error,
      })
    }
  )
};

render() {
    return (
      <div>
          {this.props.children}
          
          <nav className="header__navigation">
            <NavLink className="header__link" to="/">React News</NavLink>
          </nav>

          <AppContext.Provider value={this.state}>
            <Main />
          </AppContext.Provider>

          <Footer />
      </div>
    );
  }
}

export default Header;
