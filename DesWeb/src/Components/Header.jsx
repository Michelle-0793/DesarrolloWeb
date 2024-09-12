//Cabecera para la mayoría de las páginas
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Img/Header_Logo.png'; // Ajusta la ruta según corresponda
import "../Styles/Header.css";

function Header() {
    return (
      <header>
        <img src={Logo} alt="Logo" className="logo" />
        <nav className="navbar">
          <Link to="/home" className="nav-link">INICIO</Link>
          <Link to="/login" className="nav-link">SOBRE MÍ</Link>
          
          <div className="dropdown">
            <Link to="/services" className="nav-link">SERVICIOS</Link>
            <ul className="dropdown-menu">
              <li><Link to="/service1" className="dropdown-item">Servicio 1</Link></li>
              <li><Link to="/service2" className="dropdown-item">Servicio 2</Link></li>
            </ul>
          </div>
          
          <Link to="/contact" className="nav-link">CONTÁCTAME</Link>
          <Link to="/contact" className="nav-link">UBICACIÓN</Link>
        </nav>
      </header>
    );
  }
  
  export default Header;
  
