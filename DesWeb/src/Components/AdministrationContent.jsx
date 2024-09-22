import React, { useEffect, useState, useRef } from 'react';

// Importación de servicios para realizar peticiones
import PostServicio from "../Services/PostServicio";
import GetServicio from '../Services/GetServicio';
import UpdateServicio from "../services/UpdateServicio";
import DeleteServicio from "../services/DeleteServicio";

//Importación de estilos
import "../Styles/AdministrationContent.css";
import { Card} from 'antd'; // Importación de Card e Image de Ant Design

function AdministrationContent() {
  //Estados para gestionar los datos de los servicios
  const [Servicios, setServicios] = useState([]); //Lista de servicios
  const [NuevoServicio, setNuevoServicio] = useState(""); //Nombre del nuevo servicio
  const [DescripcionServicio, setDescripcionServicio] = useState(""); //Descripción del nuevo servicio
  const [Imagen, setImagen] = useState(""); //Imagen (base64) del nuevo servicio
  const [EditarServicioId, setEditarServicioId] = useState(""); //ID del servicio en edición
  const [ServicioEditado, setServicioEditado] = useState(""); //Nombre del servicio en edición
  const [DescripcionEditada, setDescripcionEditada] = useState(""); //Descripción del servicio en edición
  const [ImagenEditada, setImagenEditada] = useState(""); //Imagen editada del servicio

  //Ref para el input de archivo (subir imagen), permite simular clics en el input.
  const fileInputRef = useRef(null);

  //Funciones para actualizar los inputs (nuevo servicio y edición)
  const NombreServicio = (event) => {
    setNuevoServicio(event.target.value); //Actualiza el nombre del nuevo servicio
  };

  const Descripcion = (event) => {
    setDescripcionServicio(event.target.value); //Actualiza la descripción del nuevo servicio
  };

  const CambiarNombreEditado = (event) => {
    setServicioEditado(event.target.value); //Actualiza el nombre del servicio en edición
  };

  const CambiarDescripcionEditada = (event) => {
    setDescripcionEditada(event.target.value); //Actualiza la descripción del servicio en edición
  };

  //FUNCIÓN PARA CARGAR Y CONVERTIR LA IMAGENS A BASE64
  const CargarImagen = (event) => {
    const archivo = event.target.files[0]; //Selección de archivo (primera imagen seleccionada)
    const lector = new FileReader(); //Para leer archivos del sistema
    lector.onloadend = () => {
      setImagen(lector.result); //Convertir imagen a base64 y guardarla en el estado
    };
    lector.readAsDataURL(archivo); //Iniciar la conversión a base64
  };

  //FUNCIÓN PARA CARGAR LA IMAGEN EDITADA Y CONVERTIRLA A BASE64
  const CargarImagenEditada = (event) => {
    const archivo = event.target.files[0];
    const lector = new FileReader();
    lector.onloadend = () => {
      setImagenEditada(lector.result); // Guardar la imagen convertida
    };
    lector.readAsDataURL(archivo);
  };

  //FUNCIÓN PAR AÑADIR UN NUEVO SERVICIO
  const AñadirServicio = async () => {
    // Solo añade si ambos campos están completos
    if (NuevoServicio.trim() !== "" && DescripcionServicio.trim() !== "") {
      //Crea el nuevo servicio:
      const nuevoServicio = { nombre: NuevoServicio, descripcion: DescripcionServicio, imagen: Imagen };
      const ServicioCreado = await PostServicio(nuevoServicio); //Enviar el nuevo servicio a la API
      setServicios([...Servicios, ServicioCreado]); //Actualiza el estado con el nuevo servicio
      setNuevoServicio(""); //Limpia el campo de nombre
      setDescripcionServicio(""); //Limpia el campo de descripción
      setImagen(""); //Limpia la imagen cargada
    }
  };

  //FUNCIÓN PARA HABILITAR LA EDICIÓN DE UN SERVICIO
  const EditarServicio = (servicio) => {
    setEditarServicioId(servicio.id); //Establece el servicio en edición
    setServicioEditado(servicio.nombre); //Carga el nombre del servicio a editar
    setDescripcionEditada(servicio.descripcion); //Carga la descripción a editar
    setImagenEditada(servicio.imagen); //Carga la imagen actual
  };

  //FUNCIÓN PARA GUARDAR LOS CAMBIOS REALIZADOS A UN SERVICIO
  const GuardarEdicion = async (id) => {
     //Crea el objeto actualizado:
    const EdicionServicio = { id, nombre: ServicioEditado, descripcion: DescripcionEditada, imagen: ImagenEditada };
    await UpdateServicio(EdicionServicio); //Envía los cambios a la API
    setServicios(Servicios.map(servicio => 
      //Actualiza el servicio en el estado:
      servicio.id === id ? { ...servicio, nombre: ServicioEditado, descripcion: DescripcionEditada, imagen: ImagenEditada } : servicio
    )); 
    setEditarServicioId(""); //Limpia el ID del servicio en edición
    setServicioEditado(""); //Limpia el nombre editado
    setDescripcionEditada(""); //Limpia la descripción editada
    setImagenEditada(""); //Limpia la imagen editada
  };

  //FUNCIÓN PARA ELIMINAR UN SERVICIO
  const EliminarServicio = async (id) => {
    await DeleteServicio(id); //Elimina el servicio de la API
    setServicios(Servicios.filter((servicio) => servicio.id !== id)); //Remueve el servicio del estado
  };

  //SIMULAR EL CLICK EN EL INPUT DE ARCHIVO PARA CARGAR UNA IMAGEN
  const ClickImagen = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); //Simula el click en el input de archivo
    }
  };

  //USEEFFECT PARA CARGAR LOS ERVICIOS AL INICIAR EL COMPONENTE
  useEffect(() => {
    const fetchServicios = async () => {
      const servicios = await GetServicio(); //Obtiene los servicios desde la API
      setServicios(servicios); //Guarda los servicios en el estado
    };
    fetchServicios(); //Ejecuta la función de obtención al montar el componente
  }, []); //Solo se ejecuta una vez cuando el componente se monta

  return (
<div className='Container'>
<h1 className='Administracion'>ADMINISTRACIÓN DE SERVICIOS
<span className='punto'>.</span> </h1><br /><br />

{/* Inputs para añadir un nuevo servicio */}
<div className='InputsDatos'>
{/* Input para ingresar el nombre del nuevo servicio */}
<input className='InputNombreServicio' type="text" value={NuevoServicio}
onChange={NombreServicio} // Al cambiar el valor, se ejecuta la función `NombreServicio`
placeholder='Ingrese el nombre del servicio'
/><br />

{/* Textarea para ingresar la descripción del nuevo servicio */}
<textarea className='AreaDescripcionServicio' value={DescripcionServicio}
onChange={Descripcion} // Al cambiar el valor, se ejecuta la función `Descripcion`
placeholder='Ingrese una descripción'
/><br /><br />

{/* Botón para seleccionar una imagen para el nuevo servicio */}
<div className="divCargarImagen">
<label htmlFor="file-upload" className="CargarImagen">Seleccionar imagen</label>
<input id="file-upload" type="file" accept="image/*" // Solo permite subir archivos de imágenes
  onChange={CargarImagen} // Cuando se selecciona una imagen, se ejecuta la función `CargarImagen`
/>
</div>
<br />

{/* Botón para añadir el nuevo servicio */}
<button className='btnAñadirServicio' onClick={AñadirServicio}>Añadir servicio</button>
</div>
<br /><br /><br />

{/* LISTA DE SERVICIOS */}
<div className='ContenedorServicios'>
<div>
<ul>
{/* MAPEO DE LA LISTA DE SERVICIOS */}
{Servicios.map((servicio) => (
<li key={servicio.id} className='CardAdmi'>
{/* Si el servicio está en edición (comparando el id del servicio con `EditarServicioId`) */}
{EditarServicioId === servicio.id ? (
<>
<div className='DivEdicion'>
  {/* Inputs para editar el nombre y descripción del servicio */}
  <input className='InputNombreServicioEditado' type="text"
    value={ServicioEditado} // El valor actual del nombre editado
    onChange={CambiarNombreEditado} // Función que maneja el cambio del nombre
  />

  <textarea className='AreaDescripcionServicioEditada'
    value={DescripcionEditada} // El valor actual de la descripción editada
    onChange={CambiarDescripcionEditada} // Función que maneja el cambio de la descripción
  />

  {/* Mostrar la imagen actual mientras se edita */}
  {ImagenEditada && <img src={ImagenEditada} alt={ServicioEditado} width="230"/>}

  {/* Botón para seleccionar o cambiar la imagen */}
  <div className='divBotonesEditar'>
    <button className='btnCambiarImagen' onClick={ClickImagen}>
      {ImagenEditada || servicio.imagen ? "Cambiar imagen" : "Seleccionar archivo"}
    </button>

    {/* Input oculto para cargar la nueva imagen al editar */}
    <input ref={fileInputRef} //Referencia al input
      id={`fileUpload-${servicio.id}`} //ID dinámico para cada servicio
      type="file"
      accept="image/*" //Acepta solo imágenes
      onChange={CargarImagenEditada} //Función que maneja la carga de la imagen editada
      style={{ display: "none" }} //Oculta el input
    />
    <br />
    {/* BOTÓN PARA GUARDAR LAS EDICIONES */}
    <button className='btnGuardarServicio' onClick={() => GuardarEdicion(servicio.id)}>Guardar</button>
  </div>
  </div>
</>
) : (
/* SI EL SERVICIO NO ESTÁ EN EDICIÓN, SIMPLEMENTE SE MUESTRA */
<>
  {/* Card con estilo para mostrar el servicio */}
  <div className="divCardAdmi">
    <Card
      hoverable
      className="EstilosCardAdmi"
      cover={<img alt={servicio.nombre} src={servicio.imagen} width="100" />}
    >
      <Card.Meta
        title={<h2 className="card-title">{servicio.nombre}</h2>}
        description={<p className="card-description">{servicio.descripcion}</p>}
      />

      {/* Botones para editar o eliminar el servicio */}
      <div className='btnBotonesEditElim'>
        <button className='btnEditarServicio' onClick={() => EditarServicio(servicio)}>Editar</button>
        <button className='btnEliminarServicio' onClick={() => EliminarServicio(servicio.id)}>Eliminar</button>
      </div>
    </Card>
  </div>
</>
)}
</li>
))}
</ul>
</div>
</div>
</div>

  );
}

export default AdministrationContent;


