import React, { Component } from 'react';


class Title extends Component {

  /**
   * @name _contentTitle
   * @param {string} val  
   * @param {boolean} main
   * @private
   * @returns {HTMLElement}
   * @description creates the corresponding title, checks for the author
   */
  _contentTitle(val,main) {
    let title = val.split('|');
    
    if (main) {
      return (
        <div >
          <h1 >
            {title[0]}
          </h1>
          <p className="author">{title[1]}</p>
        </div>
      );
    }
  
    return (
      <div className="custom-underline__box">
        <h2 className="custom-underline">
          {title[0]}
        </h2>
        <p className="author">{title[1]}</p>
      </div>
    );
  }

  render() {
    return (
       this._contentTitle(this.props.title,this.props.main) 
    );
  }
}

export default Title;