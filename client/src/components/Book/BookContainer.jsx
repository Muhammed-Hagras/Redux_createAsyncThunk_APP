import React, { Fragment, useEffect } from 'react';
import BookInfo from './BookInfo';
import BooksList from './BooksList';

import './book.css';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks, deleteBook, getBook } from '../../store/bookSlice';

const PostContainer = () => {

  const { isLoading, books, bookInfo} = useSelector(srate=> srate.books)
  
  const { isLoggedIn } = useSelector(state=> state.auth);
  const dispatch = useDispatch();

  console.log(bookInfo)

  useEffect(() => {
    dispatch(getBooks())
    
  }, [dispatch])


  return (
    <Fragment>
      <hr className='my-5' />
      <div className='row'>
        <div className='col'>
          <BooksList isLoading= { isLoading } books={books} isLoggedIn={isLoggedIn}
          dispatch={dispatch}
          deleteBook={deleteBook}
          getBook={getBook}
          />
        </div>
        <div className='col side-line'>
          <BookInfo isLoading= { isLoading } bookInfo={bookInfo}/>
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
