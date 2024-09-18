// InicioCarrusel.js
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Enlace1 from "../Img/Home_Portada2.jpg"


function InicioCarrusel() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
      <img
              src= {Enlace1}
              width="100"
              height="100"
              className="Logo"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img
              src= {Enlace1}
              width="100"
              height="100"
              className="Logo"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
              src= {Enlace1}
              width="100"
              height="100"
              className="Logo"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default InicioCarrusel;
