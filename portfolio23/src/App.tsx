import React from 'react';
import './css/App.css';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <div className="App">
        <BrowserRouter basename='/portfolio-2023'>
          <div className='App-nav'>
            <Navbar />
          </div>
          <div className="App-body">
            <div className="App-title">
              <h1>Development by Leighton</h1>
            </div>
            <div className="App-content">
              <Routes>
                <Route path='/' element={<Portfolio />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
}

export default App;
