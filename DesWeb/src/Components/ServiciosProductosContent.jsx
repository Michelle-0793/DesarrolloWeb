import React, { useEffect, useState } from 'react';
import "../Styles/ServiciosProductosContent.css"; 
import GetServicio from '../Services/GetServicio';


function ServiciosProductosContent() {
  // Declara un estado llamado 'servicios', inicializado como un arreglo vacío
  const [servicios, setServicios] = useState([]);

  // useEffect se ejecuta después de que el componente se monta
  useEffect(() => {
    // Función asíncrona para obtener los servicios
    const fetchServicios = async () => {
      // Llama a la función GetServicio para obtener los servicios
      const servicios = await GetServicio();
      // Actualiza el estado 'servicios' con los datos obtenidos
      setServicios(servicios);
    };
    // Llama a la función fetchServicios
    fetchServicios();
  }, []); // El arreglo vacío indica que este efecto solo se ejecuta una vez al montar el componente


return (
<div className='divServicios'>
<div className="PortadaServicios">
  <div className="TextoPortada">
    {/* Título principal con estilo */}
    <h1 className='SuVision'>
      Su Visión, Nuestro Diseño:<br />
      Resultados que Inspiran  
      {/* Punto decorativo */}
      <span className='punto'>.</span> 
    </h1><br /><br />
  </div>
</div> {/* Cierra PortadaServicios */}

<div className='products-list'>
  {/* Verifica si hay servicios disponibles para mostrar */}
  {servicios.length > 0 ? (
    // Mapea sobre el arreglo de servicios para renderizar cada uno
    servicios.map((servicio) => (
      <div key={servicio.id} className='product-item'>
        {/* Muestra el nombre del servicio */}
        <h2>{servicio.nombre}</h2>
        {/* Muestra la imagen del servicio */}
        <img src={servicio.imagen} alt={servicio.nombre} />
        {/* Muestra la descripción del servicio */}
        <p>{servicio.descripcion}</p>
      </div>
    ))
  ) : (
    // Mensaje si no hay productos disponibles
    <p>No hay productos disponibles en este momento.</p>
  )}
</div>
</div>
);
}

export default ServiciosProductosContent;
