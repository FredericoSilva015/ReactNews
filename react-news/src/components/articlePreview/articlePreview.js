import React, { Component } from 'react';
import { authorCheck } from '../../utils'
import './articlePreview.css';

class ArticlePreview extends Component {
  

  render() {
      return (
        <div className="article-preview__wrapper">
          <div className="article-preview__img-wrapper"></div>
          <div className="article-preview__content-wrapper">
            {authorCheck(this.props.data.webTitle)}
          </div>

        </div>
      );
  }
}

export default ArticlePreview;