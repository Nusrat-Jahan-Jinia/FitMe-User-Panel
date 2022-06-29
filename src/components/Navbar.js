import React from 'react';
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Hello navbar</h1>
      <div>
        <ul>
        <Link to='/'>Home</Link>
        <Link to='/foods'>Foods</Link>
        <Link to='/about'>About</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;