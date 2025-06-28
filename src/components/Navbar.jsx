import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">maegicakes</Link></li>
        <li><Link to="/about">about me</Link></li>
        <li><Link to="/projects">projects</Link></li>
        <li><Link to="/contact">let's git!</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
