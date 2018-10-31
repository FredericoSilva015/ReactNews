import React, { Component } from 'react';
// import './homepage.css';
// import { AppContext } from '../../appProvider';


/**
 * Container Search Results
 * Contains the search fetch and results
 * Opens own page
 * @class
 */
class SearchResults extends Component {

  constructor(props) {
    super(props);
    this.test = this.test.bind(this);
  };

  test() {
    console.log(this.props.location.state)
  }

  render() {
      return (
        <div className="">
          <p>Search Results</p>
          <p>Search Results</p>
          <p>Search Results</p>
          <p>Search Results</p>
          <p>Search Results</p>
          <p>Search Results</p>
          <p>Search Results</p>
          <p>Search Results</p>
          <p>Search Results</p>
          <p>Search Results</p>
          <p>Search Results</p>
          <p>Search Results</p>
          <p>Search Results</p>
          <p>Search Results</p>
          <p>Search Results</p>
          <p>Search Results</p>

          <button onClick={this.test}>let see</button>
        </div>
      );
  }
}

export default SearchResults;
