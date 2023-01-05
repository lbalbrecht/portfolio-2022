import React from 'react';
import './css/App.css';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='App-nav'>
          <Navbar />
        </div>
        <div className="App-body">
          <div className="App-title">
            <h1>Design by Leighton</h1>
          </div>
          <Routes>
            <Route path='/' element={<Portfolio />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
