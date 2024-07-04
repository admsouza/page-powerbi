import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item"><Link to="/">Home</Link></li>
        <li className="navbar-item"><Link to="/news">Notícia</Link></li>
        <li className="navbar-item"><Link to="/contact">Contato</Link></li>
        <li className="navbar-item"><Link to="/about">Sobre</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
