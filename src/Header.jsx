import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

function Header() {
  return (
    <header>
      <h1>Bagel Shop</h1>
      <nav>
        <Link to="/">Menu</Link>
        <Link to="/basket">Basket</Link>
      </nav>
    </header>
  );
}

export default Header;