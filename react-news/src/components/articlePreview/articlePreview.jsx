import React, { Component } from 'react';
import Title from '../title/title';
import './articlePreview.css';

class ArticlePreview extends Component {
  

  render() {
      return (
        <div className="article-preview__wrapper">
          <div className="article-preview__img-wrapper"></div>
          <div className="article-preview__content-wrapper">
            <Title title={this.props.data.webTitle}/>
          </div>

        </div>
      );
  }
}

export default ArticlePreview;