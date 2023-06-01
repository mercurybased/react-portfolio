import '../styles/Navbar.css';
// import Header from './components/Header';
import Project from './Project';
// import Footer from './components/Footer'
import {Link} from 'react-router-dom'


function Navbar() {
  const styles = {
    background:'#937B63',
    display:'flex',
    justifyContent:'center'
  }

  return (
    <nav className="navbar" style={styles}>
      <Link to="/about">About Me</Link>
      <Link to='/projects'>Portfolio</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/resume'>Resume</Link>
    </nav>
  );
}

export default Navbar;
