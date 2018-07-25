import React, { Component, createContext } from 'react';
import './homepage.css';
import Articles from '../articles/articles';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import ArticlePreview from '../../components/articlePreview/articlePreview';

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
// }

/**
 * Container Homepage
 * @class
 */
class Homepage extends Component {
  state = {
    number : 10,
  }


  render() {
      return (
        <div className="">
          <AppContext.Provider value={this.state}>
            {this.props.children}
            <Header/>
            <ArticlePreview/>
            <Articles/>
            <Footer/>
          </AppContext.Provider>
        </div>
      );
  }
}

export default Homepage;
