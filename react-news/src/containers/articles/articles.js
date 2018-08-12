import React, { Component } from 'react';
import ArticlePreview from '../../components/articlePreview/articlePreview';
import { Link } from 'react-router-dom';
import './articles.css';

class Articles extends Component {
  
  render() {
     return (
        <div className="articles__wrapper">
          {this.props.data.map(item => {
            return (
              <Link className="articles__link" key={item.id} 
                    to={{ pathname:`article/${item.id}` }} 
              >
                <ArticlePreview   data={item}/>
              </Link>
            );
          })}
        </div>
      );
  }
}

export default Articles;
