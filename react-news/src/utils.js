import React from 'react';

/**
   * @method
   * @name authorCheck
   * @param {string} val
   * @param {boolean} main
   * @return {HTMLElement}
   * @description Method to check if author exists on title, and remove "|"
   */
 export function authorCheck(val) {
    let title = val;
    title = title.split('|'); 

    return (
      <div>
        <h2>
          {title[0]}
        </h2>
        <p className="author">{title[1]}</p>
      </div>
    );
  }