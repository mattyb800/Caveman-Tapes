import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Catalog from './Catalog';
import Submissions from './Submissions';
import Navigation from './Navigation';
import './App.css'

function App() {


  return (
    <div className='App'>
      <h1>Caveman Tapes</h1>

      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/Submissions' element={<Submissions />} />
          <Route path='/Home' element={<Home />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
