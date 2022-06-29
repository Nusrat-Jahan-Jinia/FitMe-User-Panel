import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Food from './components/Foods';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <div className='app'>
        <Navbar />
      <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/foods' element={<Food />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      </Routes>
      </div>
    </Router>
    
  );
}



export default App;
