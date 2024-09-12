import React from 'react';
import '../Styles/HomeContent.css';
import Portada from '../Img/Home_Portada.png';

function HomeContent() {
  return (
    <div className="home-content">
      <div className="hero-image">
        <div className="hero-text">
          <h1>Bienvenido a Nuestro Sitio</h1>
          <p>Descubre nuestros servicios y ofertas especiales.</p>
        </div>
      </div>
      {/* Aquí puedes añadir más contenido si lo deseas */}
      <div className="content">
        {/* Otro contenido */}
      </div>
    </div>
  );
}

export default HomeContent;
