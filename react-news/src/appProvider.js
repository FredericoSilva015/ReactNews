import React, { Component, createContext } from 'react';

/**
 * Global state of the application
 * @constant {AppContext}
 */
export const AppContext = createContext();

/**
 * Component containing global state
 * Used only has the top most component
 * @class
 */
class AppProvider extends Component {
  state = {
    number : 10,
  }

  //  /** 
//    * @constructor for Homepage component
//    */
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: null,
//       isLoaded: false,
//       data: [],
//     }
//   }


//   /** 
//    * fetch the Data from the guardian API
//    */
//   componentDidMount() {
//     fetch('https://content.guardianapis.com/search?api-key=3a252dbd-528c-4214-9211-a89fcfb96697')
//     .then(res => res.json())
//     .then(
//       // on success 
//       (result) => {
//         this.setState({
//           data: result.response.results,
//           isLoaded : true,
//         });
//         // dev to map the entire api
//         console.log('fetch: ',result.response);
//       },
//       // on error
//       (error) => {
//         this.setState({
//           isLoaded : true,
//           error,
//         })
//       }
//     )
//   }
  render() {
    return <AppContext.Provider value={this.state}>
      {this.props.children}
    </AppContext.Provider>
  }
}

export default AppProvider;
