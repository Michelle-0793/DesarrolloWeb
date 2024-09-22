import React, { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { message } from 'antd'; 
import { Card} from 'antd'; // Importación de Card e Image de Ant Design
import "../Styles/ServiciosProductosContent.css"; 
import GetServicio from '../Services/GetServicio';


function ServiciosProductosContent() {
  // Declara un estado llamado 'servicios', inicializado como un arreglo vacío
  const [servicios, setServicios] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [planSeleccionado, setPlanSeleccionado] = useState('');
  const form = useRef();
  const [messageApi, contextHolder] = message.useMessage(); // Hook de Ant Design para mensajes

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

  // Función para manejar el envío del formulario con EmailJS
  const sendEmail = (event) => {
    event.preventDefault();
    
    const key = 'updatable';  // Clave para los mensajes actualizables
    // Muestra un mensaje de carga mientras se envía el correo
    messageApi.open({
      key,
      type: 'loading',
      content: 'Enviando cotización...',
    });

    emailjs
      .sendForm('service_9of4zxx', 'template_vw6uh2k', form.current, 'ymYtdvW4jhBm2ACDK')
      .then(
        () => {
          // Cambia el mensaje a éxito cuando el correo se envía
          messageApi.open({
            key,
            type: 'success',
            content: 'Cotización enviada con éxito',
            duration: 2,  // Duración del mensaje
          });
          console.log('ENVIADO');
          setModalVisible(false); // Cerrar modal al enviar la cotización
        }
      );
  };

  return (
<div className='divServicios'>
<div className="PortadaServicios">
  <div className="TextoPortada">
    {/* Título principal con estilo */}
    <h1 className='SuVision'>Su Visión, Nuestro Diseño:<br />Resultados que Inspiran  
      {/* Punto decorativo */}
      <span className='punto'>.</span> 
    </h1>
    <br /><br />
  </div>
</div> {/* Cierra PortadaServicios */}

<div className="divCard">
  {/* Verifica si hay servicios disponibles para mostrar */}
  {servicios.length > 0 ? (
    // Mapea sobre el arreglo de servicios para renderizar cada uno
    servicios.map((servicio) => (
      <div key={servicio.id} className='Card'>
        {/* Card con estilo y contenido */}
        <Card
          hoverable
          className="EstilosCard"
          cover={<img alt={servicio.nombre} src={servicio.imagen} />}
        >
          {/* Muestra el nombre del servicio */}
          <Card.Meta
            title={<span className="card-title">{servicio.nombre}</span>}
            description={<span className="card-description">{servicio.descripcion}</span>}
          />
        </Card>
      </div>
    ))
  ) : (
    // Mensaje si no hay productos disponibles
    <p>No hay productos disponibles en este momento.</p>
  )}
</div>


<div className="LineaDivisora"></div><br /><br />

{/* Sección de planes de cotización */}
<h1 className='Administracion'>PLANES DE SERVICIOS <br />DE IDENTIDAD DE MARCA
<span className='punto'>.</span> </h1><br /><br />
<div className='PlanesCotización'>
  <div className='Plan1'>
    <h3 className='TituloPlan'>Plan Básico</h3>
    <p className='TextPlan'>→ Diseño de identificador gráfico <br />(1 propuesta, 1 cambio)</p>
    <p className='TextPlan'>→ Moodboard</p>
    <p className='TextPlan'>→ Entregables:</p>
    <ul>
      <li className='Entregables'>PDF editable</li>
      <li className='Entregables'>Todas las versiones del identificador en PNG y JPG</li>
    </ul><br /><br />
    <button className='btnPlanes' onClick={() => { setPlanSeleccionado('Plan Básico'); setModalVisible(true); }}>
      Solicitar Cotización
    </button>
  </div>

  <div className='Plan2'>
    <h3 className='TituloPlan'>Plan Estándar</h3>
    <ul>
    <p className='TextPlan'>→ Diseño de identificador gráfico <br />(2 propuestas, 2 cambios)</p>
    <p className='TextPlan'>→ Moodboard</p>
    <p className='TextPlan'>→ 2 aplicaciones de identificador a elegir</p>
    <p className='TextPlan'>→ Entregables:</p>
  
      <li className='Entregables'>PDF editable</li>
      <li className='Entregables'>Todas las versiones del identificador en PNG y JPG</li>
    </ul>
    <button className='btnPlanes' onClick={() => { setPlanSeleccionado('Plan Estándar'); setModalVisible(true); }}>
      Solicitar Cotización
    </button>
  </div>
  
  <div className='Plan3'>
    <h3 className='TituloPlan'>Plan Premium</h3>
    <p className='TextPlan'>→ Diseño de identificador gráfico <br />(3 propuestas, 3 cambios)</p>
    <p className='TextPlan'>→ 3 aplicaciones de identificador a elegir</p>
    <p className='TextPlan'>→ Libro de marca</p>
    <p className='TextPlan'>→ Entregables:</p>
    <ul>
      <li className='Entregables'>PDF editable</li>
      <li className='Entregables'>Todas las versiones del identificar en PNG y JPG</li>
    </ul>
    <button className='btnPlanes' onClick={() => { setPlanSeleccionado('Plan Premium'); setModalVisible(true); }}>
      Solicitar Cotización
    </button>
  </div>
</div>

{/* Modal */}
{modalVisible && (
  <div className="Modal">
  <div className="ContenidoModal">
    <button className='btnCerrarModal' onClick={() => setModalVisible(false)}>Cerrar</button>
    <h4 className='TituloModal'>Solicitar Cotización</h4>

  {/* Plan seleccionado */}
  <div className="DivPlanSeleccionado">
  <input className='InputPlanSeleccionado' type="text" name="Plan" 
    value={planSeleccionado} 
    readOnly 
    placeholder="Plan Seleccionado" // Placeholder para guiar al usuario
  />
  </div><br />

      {contextHolder} {/* Renderiza el contenedor para los mensajes */}

      <form className='FormCotizacionModal' ref={form} onSubmit={sendEmail}>
        {/* Nombre completo */}
        <div className="DivInputModal">
          <input className="InputCotizacionModal" type="text" name="Username" placeholder="Nombre Completo" required />
          <span className="asterisco-obligatorio">*</span>
        </div>
        
        {/* Correo electrónico */}
        <div className="DivInputModal">
          <input className="InputCotizacionModal" type="email" name="UserEmail" placeholder="Correo electrónico" required />
          <span className="asterisco-obligatorio">*</span>
        </div>

        {/* Teléfono */}
        <input className="InputCotizacionModal" type="text" name="Phone" placeholder="Teléfono" />

        {/* Botón enviar */}
        <input className='BtnEnviarModal' type="submit" value="Enviar" />
      </form>
    </div>
  </div>
)}

</div>
);
}

export default ServiciosProductosContent;

