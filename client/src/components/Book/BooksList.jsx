import React from 'react';
import { useSelector } from 'react-redux';

const BooksList = ({isLoading, books, isLoggedIn, dispatch, deleteBook, getBook}) => {


  const BooksList =  books.length> 0 ?  (books && books.map(book=> (
    <li className='list-group-item d-flex  justify-content-between align-items-center'
    key= {book.id}
    >
          <div>{book.description}</div>
          <div className='btn-group' role='group'>
            <button type='button' className='btn btn-primary'
            onClick={() => dispatch(getBook(book))}>
              Read
            </button>
            <button type='button' className='btn btn-danger'
            disabled={!isLoggedIn}
            onClick={() => dispatch(deleteBook(book))
              .unwrap()
              .then((originalPromiseResult) => {
                // handle result here
                console.log(originalPromiseResult)
              })
              .catch((rejectedValueOrSerializedError) => {
                // handle error here
                console.log(rejectedValueOrSerializedError)
              })
            }>
              Delete
            </button>
          </div>
        </li>)
  )) : "THere is no books available"

  return (
    <div>
      <h2>Books List</h2>
      {isLoading ? 'Loading...' : <ul className='list-group'>
      {BooksList}
      </ul>}
    </div>
  );
};

export default BooksList;
