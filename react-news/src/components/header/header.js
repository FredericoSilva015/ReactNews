import React, { Component, createContext } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import './header.css';
import Homepage from '../../containers/homepage/homepage';
import SearchResults from '../../containers/searchResults/searchResults';
import Article from '../../containers/article/article';
import Footer from '../../components/footer/footer';
import Error from '../../components/error/error';

/**
 * Global state of the application
 * @constant {AppContext}
 */
export const AppContext = createContext();

/**
 * Component Header
 * Changes content on click
 * @class
 */
class Header extends Component {

/**
 * Component containing global state
 * Used on top most component
 * @class
 */
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
 * Obtain Data from the guardian API
 * @method fetch
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

      console.log('state',this.state)
    },
    // on error
    (error) => {
      this.setState({
        isLoaded : true,
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
            
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/articles">Article</NavLink></li>
              <li><NavLink to="/search-results">SearchResults</NavLink></li>
            </ul>

            <Switch>
              <Route path="/" component={Homepage} exact />
              <Route path="/articles" component={Article} />
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
