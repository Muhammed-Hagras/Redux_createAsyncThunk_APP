import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { insertBook } from '../store/bookSlice';
insertBook
const Addform = () => {

  const titleRef = useRef();
  const priceRef = useRef();
  const descRef = useRef();

  const { isLoggedIn } = useSelector(state=> state.auth);

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(insertBook({
      title: titleRef.current.value,
    price: priceRef.current.value,
    description: descRef.current.value,
    }));
    titleRef.current.value = null;
    priceRef.current.value = null;
    descRef.current.value = null;
  }

  return (
    <div className='row'>
      <div className='col-6 offset-3 mt-3'>
        <h2>Insert Book</h2>
        <form 
        onSubmit={submitHandler}
        >
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input type='text' className='form-control' id='title' required 
            ref={titleRef}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='price'>Price</label>
            <input type='number' className='form-control' id='price' required 
                        ref={priceRef}

            />
          </div>
          <div className='form-group'>
            <label htmlFor='Description'>Description</label>
            <textarea
              className='form-control'
              id='Description'
              rows='3'
              ref={descRef}
              required
            ></textarea>
          </div>
          <button type='submit' className='btn btn-primary'
          disabled={!isLoggedIn}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addform;
