import React, { Component } from 'react';
import './searchResults.css';

/**
 * Container Search Results
 * Contains the search fetch and results
 * Opens own page
 * @class
 */
class SearchResults extends Component {

  constructor(props) {
    super(props);
    this.searchBuilder = this.searchBuilder.bind(this);
  };

  searchBuilder() {
    const loading = this.props.location.state.loading;

    if (loading) {
      console.log(this.props.location.state.results);

      const resultObject = this.props.location.state.results;
      const length = resultObject.length;
  
      let html = [];
  
      if (length) {
        let i = 0;
        for (i; i < length; i++) {
          html.push(
            <a className="search-results__link"
               key={i} 
               href={resultObject[i].webUrl} 
            >
              {resultObject[i].webTitle}
            </a>
          )
        }
  
        return html;
      }
  
      return ( <p>I dind't find anything :(</p> );
    }
    else {
      return (
        <div className="loader loader--slowFlip">
          <span className="loader-item">1</span>
          <span className="loader-item">2</span>
          <span className="loader-item">3</span>
          <span className="loader-item">4</span>
          <span className="loader-item">5</span>
          <span className="loader-item">6</span>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="container"> 
        <div className="search-results"> 
          {this.searchBuilder()}
        </div>
      </div>
    );
  }
}

export default SearchResults;
