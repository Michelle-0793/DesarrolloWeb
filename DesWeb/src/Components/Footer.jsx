import React from 'react';
import "../Styles/Footer.css";
import Icon1 from '../Img/Icon_Portfolio.png';
import Icon2 from "../Img/Icon_WhatsApp.png";
import Icon3 from "../Img/Icon_Correo.png";

function Footer() {
  return (
<div className="Footer">

<div>
<div className='divIconContactos'>
  <a href="https://michelllopez.myportfolio.com/" target="_blank" rel="noopener noreferrer">
    <img src={Icon1} alt="Portafolio" className="footer-icon"/>
  </a> 

  <a href="https://wa.link/md72ld" target="_blank" rel="noopener noreferrer">
    <img src={Icon2} alt="WhatsApp" className="footer-icon"/>
  </a>

  <a href="https://mail.google.com/mail/u/2/#inbox" target="_blank" rel="noopener noreferrer">
    <img src={Icon3} alt="Correo" className="footer-icon"/>
  </a>

  <h1 className='Tranformemos'>Transformemos sus ideas en arte visual  
    <span className='punto'>.</span> 
  </h1><br /><br />
</div>

  <p className='Reservados'>© 2024 Michelle López-Diseño gráfico. Todos los derechos reservados.</p>
</div>
</div>

  )
}

export default Footer