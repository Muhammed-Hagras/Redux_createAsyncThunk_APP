import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import Container from './components/Container';
import AddForm from './components/AddForm';
import BookContainer from './components/Book/BookContainer';


function App() {

  return (
    <>
       <Header />
      <Container>
        <AddForm />
        <BookContainer />
      </Container>
    </>
  )
}

export default App
