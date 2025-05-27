import React from 'react';
import CartWidget from './CartWidget.jsx'; // Importamos CartWidget con .jsx
import './NavBar.css';
import logoImage from '../assets/logo-alejo.png';

const NavBar = () => {

  return (
     <nav className="navbar">
      <div className="navbar-brand">
        {/* 2. USA LA IMAGEN IMPORTADA EN UN TAG <img> */}
        <a href="/" className="navbar-logo-link"> {/* Envolvemos la imagen en un enlace */}
          <img
            src={logoImage}
            alt="Logo Alejo Tienda"
            className="navbar-logo-image" // Una clase para darle estilo si es necesario
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