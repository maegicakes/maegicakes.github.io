import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#eee' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem' }}>
        <li><Link to="/">maegicakes</Link></li>
        <li><Link to="/about">about me</Link></li>
        <li><Link to="/projects">projects</Link></li>
        <li><Link to="/contact">let's git!</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
