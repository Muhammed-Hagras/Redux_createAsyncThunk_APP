import React, { Fragment } from 'react';

const BookInfo = ({bookInfo, isLoading}) => {
  return (
    <Fragment>
      <h2>Book Details</h2>
      
      {isLoading ? <div className='alert alert-secondary' role='alert'>
        There is no post selected yet. Please select!
      </div>:<div>
        <p className='fw-bold'>Title:{bookInfo.title}</p>
        <p className='fw-light'>Description:{bookInfo.description} </p>
        <p className='fst-italic'>Price:{bookInfo.price}</p>
      </div>}
    </Fragment>
  );
};

export default BookInfo;
