import React, { Component } from 'react';
import {  withRouter  } from 'react-router-dom';
import './search.css';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      result: [],
      request:'',
      redirect: false,
      loading: true
    };

    // providing access to props and state
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._queryBuilder = this._queryBuilder.bind(this);
    this._fetchData = this._fetchData.bind(this);
  }

  /**
   * @name _handleChange
   * @private
   * @param {object} event 
   * @description handles the query string on value change
   */
  _handleChange (event) {
    const searchValue = event.target.value;
    // we prepare fetch query
    this.setState({ request: searchValue });
  }

  /**
   * @name _queryBuild
   * @private
   * @param {string} val
   * @description builds the query string for the fetch
   */
  _queryBuilder(val) {
    const and = '%20AND%20';
    const key = '&api-key=3a252dbd-528c-4214-9211-a89fcfb96697';
    let queryResult ='';

    // split the value into the building blocks for the array
    let query = val.split(' ');

    // remove undefined/NaN/null/0/""/false values
    // TODO: sanitize the form input here and escape it using the query array
    query = query.filter(Boolean);

    if (query.length > 1) {

      let i = 0;
      const length = query.length;

      for (i; i < length; i++) {

        if ((i+1) === length) {
          queryResult += query[i] + key;
        }
        else {
          queryResult += query[i] + and;
        }

      }
    }
    else  {
      queryResult = query[0] + key;
    }

    return queryResult;
  }

  /**
   * @name _handleSubmit
   * @private
   * @param {object} event
   * @description handles form submission, consumes built query
   */
  _handleSubmit (event) {
    event.preventDefault();

    console.log(this.state.request);

    if (this.state.request) {
      console.log('Request Validates');

      this._fetchData()
    }
    else {
      this.props.history.push('/search-results', { results: [], loading: true });
    }
  }

  _fetchData() {
    const result = this._queryBuilder( this.state.request );
    let query = 'https://content.guardianapis.com/search?q=' + result;
    
    this.props.history.push('/search-results', { results: [], loading: false });

    fetch(query)
      .then(response => response.json())
      .then(
        // on success 
        (result) => {
          const data = result.response.results;
          this.setState({ result: data });

          this.setState({
            loading : true,
          });
          this.props.history.push('/search-results', { results: this.state.result, loading: this.state.loading });
        },
        // on error
        (error) => {
          this.setState({
            loading : false,
          });
        }
    )
  }

  render() {
      return (
        <div className="searc__input-wrapper">
          <form onSubmit={this._handleSubmit}>
            <input type="text" 
                   placeholder="Search..."
                   onChange={this._handleChange} 
            />
            <button type="submit">Find</button>
          </form>
        </div>
      );
  }
}

export default withRouter(Search);