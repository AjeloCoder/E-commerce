import React from 'react';
import CartWidget from './CartWidget.jsx';
import './NavBar.css';
import logoImage from '../assets/logo-alejo.png';

const NavBar = () => {

  return (
     <nav className="navbar">
      <div className="navbar-brand">
        <a href="https://github.com/AjeloCoder/entrega2-bermudez" className="navbar-logo-link">
          <img
            src={logoImage}
            alt="Logo Alejo Tienda"
            className="navbar-logo-image"
          />
        </a>
      </div>
      <ul className="navbar-links">
        <li><a href="/category/electronica">Electrónica</a></li>
        <li><a href="/category/ropa-hombre">Ropa Hombre</a></li>
        <li><a href="/category/ropa-mujer">Ropa Mujer</a></li>
        <li><a href="/category/joyeria">Joyería</a></li>
        <li><a href="/category/ofertas">Ofertas</a></li>
      </ul>
      <div className="navbar-cart">
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;