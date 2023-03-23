import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addLog } from './reportSlice';

const initialState = { books: [], isLoading: false, error: null, bookInfo: null };
export const getBooks = createAsyncThunk(
  'book/getBooks',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch('http://localhost:3004/books');
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const insertBook = createAsyncThunk(
  'book/insertBook',
  async (bookData, thunkAPI) => {
    const { rejectWithValue, getState, dispatch} = thunkAPI;

    try {

      bookData.userName = getState().auth.name;
      // dispatch(deleteBook({id: 9}))
      const res = await fetch('http://localhost:3004/books', {
        method: 'POST',
        body: JSON.stringify(bookData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const data = await res.json();
      // dispatch(addLog({name: "insertData", status: "success"}));
      return data;
    } catch (error) {
      // dispatch(addLog({name: "insertData", status: "faild"}));
      return rejectWithValue(error.message);
    }
  }
);

export const deleteBook = createAsyncThunk(
  'book/deleteBook',
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`http://localhost:3004/books/${data.id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getBook = createAsyncThunk(
  'book/getBook',
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`http://localhost:3004/books/${data.id}`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const BookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: {
    //getBooks
    [getBooks.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getBooks.fulfilled]: (state, action) => {
      state.books = action.payload;
      state.isLoading = false;
    },
    [getBooks.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    //insertBooks
    [insertBook.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [insertBook.fulfilled]: (state, action) => {
      state.books.push(action.payload);
      state.isLoading = false;
    },
    [insertBook.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    //deleteBooks
    [deleteBook.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteBook.fulfilled]: (state, action) => {
      state.books = state.books.filter((el) => el.id !== action.payload.id);
      state.isLoading = false;
    },
    [deleteBook.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
     //getBook
     [getBook.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getBook.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.bookInfo = action.payload;
  },
}
});

export default BookSlice.reducer;
