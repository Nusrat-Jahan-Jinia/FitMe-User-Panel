import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Food from './components/Foods';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className='app'>
        <Navbar />
      <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/foods' element={<Food />} />
      </Routes>
      </div>
    </Router>
    
  );
}



export default App;
