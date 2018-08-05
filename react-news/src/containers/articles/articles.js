import React, { Component } from 'react';
import ArticlePreview from '../../components/articlePreview/articlePreview';
import { Link } from 'react-router-dom';
import './articles.css';

class Articles extends Component {
  
  render() {
     return (
        <div>
          {this.props.data.map(item => {
            return (
              <Link key={item.id} 
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
