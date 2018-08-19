import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {  CSSTransition, TransitionGroup } from 'react-transition-group';
import Homepage from '../../containers/homepage/homepage';
import SearchResults from '../../containers/searchResults/searchResults';
import Article from '../../containers/article/article';
import Error from '../error/error';
import './main.css';

class Main extends Component {

  render() {
    return (
      <div className="main">
      <Route render={({ location }) => {
        const { pathname } = location;

        return (
          <TransitionGroup>

          <CSSTransition key={pathname} 
                          classNames="page"
                          timeout={{
                            enter: 1000,
                            exit: 1000,
                          }}
          >

              <Route
                location={location} render={() => (

                  <Switch>
                    <Route path="/" component={Homepage} exact />
                    <Route path="/article/:id"  
                            name="article" 
                            component={Article} />
                    <Route path="/search-results" 
                            component={SearchResults} />
                    <Route component={Error} />
                  </Switch>

              )}/>

          </CSSTransition>
          </TransitionGroup>

          );
        }}
      />
      </div>
    );
  }
}

export default Main;
