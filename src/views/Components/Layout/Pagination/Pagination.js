import React from 'react';
import './Pagination.css';

function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div className='navigation-buttons'>
      {gotoPrevPage && (
        <button onClick={gotoPrevPage} className='main-button'>
          Previous
        </button>
      )}
      {gotoNextPage && (
        <button onClick={gotoNextPage} className='main-button'>
          Next
        </button>
      )}
    </div>
  );
}

export default Pagination;
