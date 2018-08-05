import React, { Component } from 'react';
import './articles.css';
import ArticlePreview from '../../components/articlePreview/articlePreview';

class Articles extends Component {
  
  render() {
     return (
        <div>
          {this.props.data.map(item => {
            return <ArticlePreview key={item.id} data={item}/>
          })}
        </div>
      );
  }
}

export default Articles;
