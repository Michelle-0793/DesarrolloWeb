import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'; 
import '../Styles/HomeContent.css';
import { Card, Image } from 'antd'; // Importación de Card e Image de Ant Design
import { useNavigate } from 'react-router-dom';
import EnlacesCarrusel from '../Components/EnlacesCarrusel'; // Importa el nuevo carrusel
import Footer from "../Components/Footer"


//Importación de imaganes para Cards
import Proyecto1 from "../Img/ICP_LibroMarca.jpg";
import Proyecto2 from "../Img/RRSS-01.jpg";
import Proyecto3 from "../Img/Editorial-01.jpg";

// Importación de las imágenes de los logos
import Logo1 from '../Img/Logo_1.png';
import Logo2 from '../Img/Logo_2.png';
import Logo3 from '../Img/Logo_3.png';
import Logo4 from '../Img/Logo_4.png';
import Logo5 from '../Img/Logo_5.png';
import Logo6 from '../Img/Logo_6.png';
import Logo7 from '../Img/Logo_7.png';
import Logo8 from '../Img/Logo_8.png';
import Logo9 from '../Img/Logo_9.png';
import Logo10 from '../Img/Logo_10.png';
import Logo11 from '../Img/Logo_11.png';
import Logo12 from '../Img/Logo_12.png';
import Logo13 from '../Img/Logo_13.png';
import Logo14 from '../Img/Logo_14.png';
import Logo15 from '../Img/Logo_15.png';
import Logo16 from '../Img/Logo_16.png';
import Logo17 from '../Img/Logo_17.png';

// Elementos del carrusel usando las imágenes importadas
const items = [
  <img src={Logo1} alt="Logo 1" className="CarouselImg" />,
  <img src={Logo2} alt="Logo 2" className="CarouselImg" />,
  <img src={Logo3} alt="Logo 3" className="CarouselImg" />,
  <img src={Logo4} alt="Logo 4" className="CarouselImg" />,
  <img src={Logo5} alt="Logo 5" className="CarouselImg" />,
  <img src={Logo6} alt="Logo 6" className="CarouselImg" />,
  <img src={Logo7} alt="Logo 7" className="CarouselImg" />,
  <img src={Logo8} alt="Logo 8" className="CarouselImg" />,
  <img src={Logo9} alt="Logo 9" className="CarouselImg" />,
  <img src={Logo10} alt="Logo 10" className="CarouselImg" />,
  <img src={Logo11} alt="Logo 11" className="CarouselImg" />,
  <img src={Logo12} alt="Logo 12" className="CarouselImg" />,
  <img src={Logo13} alt="Logo 13" className="CarouselImg" />,
  <img src={Logo14} alt="Logo 14" className="CarouselImg" />,
  <img src={Logo15} alt="Logo 15" className="CarouselImg" />,
  <img src={Logo16} alt="Logo 16" className="CarouselImg" />,
  <img src={Logo17} alt="Logo 17" className="CarouselImg" />,
];

const responsive = {
  0: { items: 1 },      // 1 logo en pantallas pequeñas
  600: { items: 2 },    // 2 logos en pantallas medianas
  1024: { items: 3 },   // 3 logos en pantallas grandes
  1300: { items: 5 }    // 4 logos en pantallas extra grandes
};


function HomeContent() {

  const navigate = useNavigate();

  const Cotizar = () => {
    navigate('/Contact');
  };


return (

<div className="divContenido">

    <div className="ImgPortada">
      
    </div>

{/* Carrusel de logos */}

<div className="divCarrucel">
  <h2 className='Marcas'>→ Marcas que han confiado en mi trabajo ←</h2><br /><br /><br />

  <AliceCarousel
  mouseTracking
  items={items}
  responsive={responsive}
  infinite
  autoPlay
  autoPlayInterval={2000}
  disableDotsControls
  renderPrevButton={() => <button className="custom-arrow custom-arrow-left">‹</button>}
  renderNextButton={() => <button className="custom-arrow custom-arrow-right">›</button>}
  paddingLeft={50} // Ajusta el padding
  paddingRight={50} // Ajusta el padding
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
        <h1 className='DemosFormaText'>DEMOS FORMA A LA IDENTIDAD <br />VISUAL DE SU MARCA   <span className='punto'>.</span> </h1><br /><br />
        <p className='TextDestaServicios'>Una identidad gráfica bien construida, que refleje la esencia y valores <br /> de su negocio, 
        es fundamental para atraer a sus clientes y lograr resultados. </p>
        <p className='TextDestaServicios2'>¡Estoy aquí para ayudarle a crear una Identidad Visual sólida <br />que haga destacar a su negocio!</p>
</div> {/*Cierra divDestacarServicios*/}
<br /><br /><br />

{/* Cards de Ant Design */}
<div className="divCardHome">

  <div className="CardHome">
  <Card 
  hoverable
  className="EstilosCardHome"
  cover={<Image alt="Proyecto 1" src={Proyecto1} />}
  >
  <Card.Meta 
  title={<span className="CardTituloHome">BRANDING</span>} 
  description={<span className="CardDescripHome">Construyo identidades visuales coherentes, 
  reflejando la esencia y valores de su marca para impactar a su público objetivo.</span>} 
  />
  </Card>
  </div>

  <div className="CardHome">
  <Card 
  hoverable
  className="EstilosCardHome"
  cover={<Image alt="Proyecto 2" src={Proyecto2}/>}
  >
  <Card.Meta   
  title={<span className="CardTituloHome">DISEÑO PARA REDES SOCIALES</span>} 
  description={<span className="CardDescripHome">Contenido visual que 
  conecte y destaque en redes sociales, logrando más interacción 
  y visibilidad para su negocio. </span>} 
  />
  </Card>
  </div>

  <div className="CardHome">
  <Card 
  hoverable
  className="EstilosCardHome"
  cover={<Image alt="Proyecto 3" src={Proyecto3} />}
  >
  <Card.Meta   
  title={<span className="CardTituloHome">DISEÑO EDITORIAL</span>} 
  description={<span className="CardDescripHome">Transformo ideas en publicaciones 
  visualmente atractivas y funcionales, como catálogos, libros, revistas, folletos, menús... </span>} 
  />
  </Card>
  </div>

</div>{/*cierra divCard*/}
<br /><br /><br /><br /><br />

<div className="divEnlaces">
<h1 className='TituloEnlaces'>TODO LO QUE NECESITA SABER <br />SOBRE DISEÑO GRÁFICO   <span className='punto'>.</span> </h1><br /><br />
<EnlacesCarrusel />
</div>
<br /><br /><br /><br /><br /><br /><br />

<div>
<Footer />
</div>

</div> /*cierra divContenido*/
  );
}

export default HomeContent;

