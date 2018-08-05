import React, { Component } from 'react';
import { authorCheck } from '../../utils'
import './articlePreview.css';

class ArticlePreview extends Component {
  

  render() {
      return (
        <div className="">
          {authorCheck(this.props.data.webTitle)}
        </div>
      );
  }
}

export default ArticlePreview;