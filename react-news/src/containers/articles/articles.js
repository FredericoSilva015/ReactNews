import React, { Component } from 'react';
import './articles.css';
import ArticlePreview from '../../components/articlePreview/articlePreview';


/**
 * Container Articles
 * Contains multiple article previews
 * Used on homepage
 * @class
 */
class Articles extends Component {
  
  render() {
     return (
        <div>
          {this.props.data.map(item => {
            return <ArticlePreview key={item.id} title={item}/>
          })}
        </div>
      );
  }
}

export default Articles;
