import React, { Component } from 'react';
import './articles.css';
import { AppContext } from '../../components/header/header';
import ArticlePreview from '../../components/articlePreview/articlePreview';


/**
 * Container Articles
 * Contains multiple article previews
 * Used on homepage
 * @class
 */
class Articles extends Component {
 
  render() {
    const temp = <ArticlePreview />;
      return (
        <div>
          <p>Articles</p>
          <AppContext.Consumer>
            {(context) => temp}
          </AppContext.Consumer>
        </div>
      );
  }
}

export default Articles;
