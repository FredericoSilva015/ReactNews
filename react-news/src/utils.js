import React from 'react';

/**
   * @method
   * @name authorCheck
   * @param {string} val
   * @param {boolean} main
   * @return {HTMLElement}
   * @description Method to check if author exists on title, and remove "|"
   */
 export function authorCheck(val, main) {
    let title = val;
    title = title.split('|'); 


    if (main) {
      return (
        <h1>
          {title[0]}
          <span className="author">{title[1]}</span>
        </h1>
      );
    }

    return (
      <h2>
        {title[0]}
        <span className="author">{title[1]}</span>
      </h2>
    );
  }