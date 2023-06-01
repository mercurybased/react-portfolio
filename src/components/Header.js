import React from 'react';
import '../styles/Header.css';
import {Link} from 'react-router-dom'

function Header() {
  const linkStyle = {
    margin: "6rem",
    textDecoration: "none",
    color: 'white',
    fontFamily: 'Montserrat',
    opacity:'75%'
  };
  return (
    <header className="header">
      <h1 href='/'>Anna Riley</h1>
      <div className="nav">
      <Link to="/about" style={linkStyle}>About Me</Link>
      <Link to='/projects' style={linkStyle} >Portfolio</Link>
      <Link to='/contact' style={linkStyle}>Contact</Link>
      <Link to='/resume' style={linkStyle}>Resume</Link>
      </div>
    </header>
  );
}

export default Header;
