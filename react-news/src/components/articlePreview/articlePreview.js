import React, { Component } from 'react';
import './articlePreview.css';
import { authorCheck } from '../../utils'

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