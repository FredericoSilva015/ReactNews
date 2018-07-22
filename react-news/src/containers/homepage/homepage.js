import React, { Component } from 'react';
// import logo from '../../assets/logo.svg';
import './homepage.css';

class Homepage extends Component {
  /** 
   * @constructor for Homepage component
   */
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
    }
  }


  /** 
   * fetch the Data from the guardian API
   */
  componentDidMount() {
    fetch('https://content.guardianapis.com/search?api-key=3a252dbd-528c-4214-9211-a89fcfb96697')
    .then(res => res.json())
    .then(
      // on success 
      (result) => {
        this.setState({
          data: result.response.results,
          isLoaded : true,
        });
        // dev to map the entire api
        console.log('fetch: ',result.response);
      },
      // on error
      (error) => {
        this.setState({
          isLoaded : true,
          error,
        })
      }
    )
  }

  render() {

    /** 
     * multiple @constant
     * points to each @argument {state} 
     */
     const { error, isLoaded, data} = this.state;

    // dev purposes to check data
    console.log('state: ',data);

    /** 
     * we creat the temporary data block
     * we render 3 times for the time being
     * receives @const {error} 
     */
    if (error) {
      return (
        <div className="App">
          Error: {error.message}
        </div>
      );
    } 
    else if (!isLoaded) {
      return (
        <div className="App">
            Loading...
        </div>
      );
    }
    else {
      // just wish to see some data
      return (
        <div className="App">
          <ul>
            { data.map((data) => {  
                return <li key={data.id}>{data.id}</li>
              })}
          </ul>
        </div>
      );
    }
  }
}

export default Homepage;
