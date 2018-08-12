import React, { Component } from 'react';
import { authorCheck } from '../../utils'
import './articlePreview.css';

class ArticlePreview extends Component {
  

  render() {
      return (
        <div className="">
          <picture>
            <source media="" srcSet=""/>
            <source media="" srcSet=""/>
            <img src="" alt="Place Holder"/>
          </picture>
          {authorCheck(this.props.data.webTitle)}
        </div>
      );
  }
}

export default ArticlePreview;