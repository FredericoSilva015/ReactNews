import React from 'react';

/**
   * @method
   * @private
   * @name authorCheck
   * @param {string} val
   * @return {HTMLElement}
   * @description Method to check if author exists on title, and remove "|"
   */
 export function authorCheck(val) {
    let title = val;
    title = title.split('|'); 

    return (
      <h1>
        {title[0]}
        <span className="author">{title[1]}</span>
      </h1>
    );
  }