import React from 'react';
import "../Styles/AboutContent.css"; 
import { useNavigate } from 'react-router-dom';
import Aprendizaje from "../Img/LineaAprendizaje2.png";

function AboutContent() {
  const navigate = useNavigate();

  const IniciarProyecto = () => {
    navigate('/Contact');
  };


  return (
    <div className="divAbout">
   <div className='PortadaAbout'>
   <button className="BtnIniciarProyecto" onClick={IniciarProyecto}>¡LLEVEMOS SUS IDEAS A LA VIDA!
   <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
   </div>
    
   <div className='divAprendizaje'>
   <h1 className='CaminoAprendizaje'>CAMINO DE APRENDIZAJE
   <span className='punto'>.</span> </h1><br /><br />
  </div> 

  <div className='divImgAprendizaje'>
  <img className='ImgAprendizaje' src={Aprendizaje} alt="Aprendizaje" />
  </div>
  <br /><br />
 {/* <div className="LineaDivisoraAbout"></div><br /><br />*/}

 <div className='divMV'>
    <h1 className='TituloCompromisos'>COMPROMISOS Y ASPIRACIONES
        <span className='PuntoCompromisos'>.</span>
    </h1>
    <div className='Mision'>
        <h3 className='TituloMV'>Mi Misión</h3>
        <p className='TextMV'>Mi pasión por el diseño gráfico radica en 
        la posibilidad de dar vida a las ideas de mis clientes. <br />
        Mi objetivo es proporcionar servicios que no solo cumplan con sus expectativas, 
        sino que las superen, ayudando a cada cliente a destacar en su mercado.</p>
    </div>
    <div className='Vision'>
        <h3 className='TituloMV'>Mi Visión</h3>
        <p className='TextMV'>Me visualizo como una referente en el diseño gráfico, 
        creando obras que inspiren y generen un impacto positivo en el mundo. <br />
        Quiero contribuir a proyectos que no solo se centren en la estética, 
        sino también en la funcionalidad y en el valor que aportan a los usuarios.</p>
    </div>
</div>


  </div>
  );
}

export default AboutContent;
