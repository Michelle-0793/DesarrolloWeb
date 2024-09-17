import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'; 
import '../Styles/HomeContent.css';
import { Card, Image } from 'antd'; // Importación de Card e Image de Ant Design
import { useNavigate } from 'react-router-dom';

// Importación de las imágenes de los logos
import Logo1 from '../Img/Logo_1.png';
import Logo2 from '../Img/Logo_2.png';
import Logo3 from '../Img/Logo_3.png';
import Logo4 from '../Img/Logo_4.png';
import Logo5 from '../Img/Logo_5.png';

// Elementos del carrusel usando las imágenes importadas
const items = [
  <img src={Logo1} alt="Logo 1" className="CarouselImg" />,
  <img src={Logo2} alt="Logo 2" className="CarouselImg" />,
  <img src={Logo3} alt="Logo 3" className="CarouselImg" />,
  <img src={Logo4} alt="Logo 4" className="CarouselImg" />,
  <img src={Logo5} alt="Logo 5" className="CarouselImg" />,
];

const responsive = {
  0: { items: 1 },
  600: { items: 2 },
  1024: { items: 3 },
  1300: { items: 5 }
};

/*
const CustomLeftArrow = ({ onClick }) => (
  <button onClick={onClick} className="custom-arrow custom-arrow-left">
    &#10094;
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button onClick={onClick} className="custom-arrow custom-arrow-right">
    &#10095;
  </button>
);
*/

function HomeContent() {

  const navigate = useNavigate();

  const Cotizar = () => {
    navigate('/Contact');
  };


return (

<div className="divContenido">

    <div className="ImgPortada">
      <div className="TextoPortada">
        <h1>Transformando ideas en <br />diseños extraordinarios</h1>
      </div>
    </div> {/* Cierra divImgPortada */}

    {/* Carrusel de logos */}
    <div className="divCarrucel">
	  <h2>Marcas que han confiado en mi trabajo</h2><br />
    <AliceCarousel
    mouseTracking
    items={items}
    responsive={responsive}
    infinite
    autoPlay
    autoPlayInterval={3000}
    disableDotsControls
    disableButtonsControls
    renderPrevButton={() => <button className="custom-arrow custom-arrow-left">‹</button>}
    renderNextButton={() => <button className="custom-arrow custom-arrow-right">›</button>}
    />
   </div>

<div className="Plasta1">
      <div className="divBtn">
      <button className="BtnSolicitarCotización" onClick={Cotizar}>SOLICITAR COTIZACIÓN
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      </button>
  </div>

</div>

<div className='divDestacarServicios'>
        <h1>Demos forma a la identidad visual de su marca</h1>
        <p>Una identidad gráfica bien construida, que refleje la esencia y valores de su negocio, <br />
        es fundamental para atraer a sus clientes y lograr resultados. <br />
        ¡Estoy aquí para ayudarle a crear una Identidad Visual sólida <br />que haga destacar a su negocio!</p>
</div> {/*Cierra divDestacarServicios*/}


<div className='ProyectosDestacados'>

{/* Cards de Ant Design */}
    <div className="divCard">
    <Card /*CARD 1*/
      hoverable
      style={{ width: 300 }}
      cover={<Image alt="Proyecto 1" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />}
    >
      <Card.Meta title="Proyecto 1" description="Descripción del proyecto 1" />
    </Card>
<br />
    <Card /*CARD 2*/
      hoverable
      style={{ width: 300 }}
      cover={<Image alt="Proyecto 2" src="https://example.com/proyecto2.png" />}
    >
      <Card.Meta title="Proyecto 2" description="Descripción del proyecto 2" />
    </Card>
<br />
    <Card /*CARD 3*/
      hoverable
      style={{ width: 300 }}
      cover={<Image alt="Proyecto 3" src="https://example.com/proyecto3.png" />}
    >
      <Card.Meta title="Proyecto 3" description="Descripción del proyecto 3" />
    </Card>
<br />
    <Card /*CARD 4*/
      hoverable
      style={{ width: 300 }}
      cover={<Image alt="Proyecto 3" src="https://example.com/proyecto3.png" />}
    >
      <Card.Meta title="Proyecto 3" description="Descripción del proyecto 3" />
    </Card>

    </div> {/*Cierra divCard*/}
  </div> {/*Cierra divProyectosDestacados*/}

</div> /*cierra divContenido*/
  );
}

export default HomeContent;

