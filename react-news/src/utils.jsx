import React from 'react';

/**
   * @method
   * @name authorCheck
   * @param {string} val
   * @param {boolean} main
   * @return {HTMLElement}
   * @description Method to check if author exists on title, and remove "|"
   */
 export function authorCheck(val,main) {
  let title = val;
  title = title.split('|'); 
  
  if (main) {
    return (
      <div>
        <h1>
          {title[0]}
        </h1>
        <p className="author">{title[1]}</p>
      </div>
    );
  }

  return (
    <div>
      <h2>
        {title[0]}
      </h2>
      <p className="author">{title[1]}</p>
    </div>
  );
  }