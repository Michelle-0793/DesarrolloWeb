import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Enlace1 from "../Img/Enlace_1.jpg";
import Enlace2 from "../Img/Enlace_2.jpg";
import Enlace3 from "../Img/Enlace_3.jpg";

import 'bootstrap/dist/css/bootstrap.min.css';
import "../Styles/EnlacesCarrusel.css"


function InicioCarrusel() {
  return (
    <div className='divCarrusel'>
    <Carousel>
      <Carousel.Item interval={1000} className='CarouselItem'>
      <img
              src= {Enlace1}
              width="900"
              height="auto"
              className="Enlace"
        />
        <Carousel.Caption>
          <h3 className='TituloEnlace'>¿Qué es el diseño gráfico?</h3><br />
          <p className='TextoEnlace'>Disciplina que busca integrar elementos visuales con el fin <br />de transmitir un mensaje...</p>
          <p className='Leer' >Leer <a href="https://blog.hubspot.es/marketing/diseno-grafico"  className='Mas' target="_blank" rel="noopener noreferrer">más</a></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500} className='CarouselItem'>
      <img
              src= {Enlace2}
                  width="900"
              height="auto"
              className="Enlace"
        />
        <Carousel.Caption>
        <h3 className='TituloEnlace'>Tendencias en diseño gráfico 2024</h3><br />
          <p className='TextoEnlace'>Este 2024 viene a marcar un antes y un 
            después <br />en el modo en que el diseño gráfico se relaciona con la IA...</p>
          <p className='Leer' >Leer <a href="https://mediactiu.com/tendencias-en-diseno-grafico-para-2024/"  className='Mas' target="_blank" rel="noopener noreferrer">más</a></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='CarouselItem'>
      <img
              src= {Enlace3}
              width="900"
              height="auto"
              className="Enlace"
        />
        <Carousel.Caption>
        <h3 className='TituloEnlace'>Ramas del diseño gráfico</h3><br />
          <p className='TextoEnlace'>El diseño gráfico está por todas partes, 
            aunque no siempre seamos conscientes de su presencia...</p>
          <p className='Leer' >Leer <a href="https://creativecampus.universidadeuropea.com/blog/ramas-diseno-grafico/"  className='Mas' target="_blank" rel="noopener noreferrer">más</a></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default InicioCarrusel;
