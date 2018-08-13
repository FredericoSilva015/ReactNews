import React, { Component, createContext } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Homepage from '../../containers/homepage/homepage';
import SearchResults from '../../containers/searchResults/searchResults';
import Article from '../../containers/article/article';
import Footer from '../footer/footer';
import Error from '../error/error';
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
      <BrowserRouter>

        <div>
          <AppContext.Provider value={this.state}>
            {this.props.children}
            
            <nav className="header__navigation">
              <NavLink className="header__link" to="/">React News</NavLink>
            </nav>

            <Switch>
              <Route path="/" component={Homepage} exact />
              <Route path="/article/:id"  name="article" component={Article} />
              <Route path="/search-results" component={SearchResults} />
              <Route  component={Error} />
            </Switch>

            <Footer />
          </AppContext.Provider>
        </div>

      </BrowserRouter>
    );
  }
}

export default Header;
