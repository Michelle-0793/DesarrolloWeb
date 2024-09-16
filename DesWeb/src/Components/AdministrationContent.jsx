import React, { useEffect, useState, useRef  } from 'react';
import "../styles/HomeContent.css";
import PostProducto from "../services/PostProducto";
import GetProducto from '../services/GetProducto';
import UpdateProducto from "../services/UpdateProducto";
import DeleteProducto from "../services/DeleteProducto";

function AdministrationContent() {
  const [Productos, setProductos] = useState([]); // Estado para la lista de productos
  const [NuevoProducto, setNuevoProducto] = useState(""); // Estado para el nuevo nombre del producto
  const [DescripcionProducto, setDescripcionProducto] = useState(""); // Estado para la descripción del nuevo producto
  const [Imagen, setImagen] = useState(""); // Estado para la imagen (base64) del nuevo producto
  const [EditarProductoId, setEditarProductoId] = useState(""); // Estado para el ID del producto en edición
  const [ProductoEditado, setProductoEditado] = useState(""); // Estado para el nombre del producto en edición
  const [DescripcionEditada, setDescripcionEditada] = useState(""); // Estado para la descripción editada
  const [ImagenEditada, setImagenEditada] = useState(""); // Estado para la imagen editada

//useRef proporciona una referencia al DOM para simular clics y otras interacciones directas.
//Ref para el input de archivo (subir imagen)
//Esto me permite acceder al input de archivo en el DOM para simular un click
const fileInputRef = useRef(null);

// Actualizar el valor del input de nombre de producto
const CambiarValorInput = (event) => {
  setNuevoProducto(event.target.value);
};

// Actualizar el valor de la descripción del producto
const CambiarDescripcion = (event) => {
  setDescripcionProducto(event.target.value);
};

// Actualizar el valor del nombre editado
const CambiarNombreEditado = (event) => {
  setProductoEditado(event.target.value);
};

// Actualizar el valor de la descripción editada
const CambiarDescripcionEditada = (event) => {
  setDescripcionEditada(event.target.value);
};

// Imagen a base64
const ManejarImagen = (e) => {
  // Se selecciona imagen
  const archivo = e.target.files[0]; //(e.target.files[0] obtiene el primer archivo).
  const lector = new FileReader(); //FileReader, permite leer el contenido de la imagen
  // Se define qué hacer cuando el proceso de lectura del archivo termine.
  lector.onloadend = () => {
      //Cuando termina la lectura, se convierte la imagen a base64 (lector.result)
      //y se guarda en el estado 'Imagen' usando setImagen. 
    setImagen(lector.result); 
  };
  //Inicia lectura del archivo en formato base64 usando el método readAsDataURL().
  //Este método convierte el archivo en una URL de datos (data URL), que es una cadena de caracteres en formato base64.
  lector.readAsDataURL(archivo);
};

// Imagen editada
const ManejarImagenEditada = (e) => {
  const archivo = e.target.files[0];
  const lector = new FileReader();
  lector.onloadend = () => {
    setImagenEditada(lector.result);
  };
  lector.readAsDataURL(archivo);
};

// AÑADIR PRODUCTO
const AñadirProducto = async () => {
  if (NuevoProducto.trim() !== "" && DescripcionProducto.trim() !== "") {
    const nuevoProducto = { nombre: NuevoProducto, descripcion: DescripcionProducto, imagen: Imagen };
    const ProductoCreado = await PostProducto(nuevoProducto);
    setProductos([...Productos, ProductoCreado]);
    setNuevoProducto("");
    setDescripcionProducto("");
    setImagen("");
  }
};

// EDITAR PRODUCTO
const EditarProducto = (producto) => {
  setEditarProductoId(producto.id);
  setProductoEditado(producto.nombre);
  setDescripcionEditada(producto.descripcion);
  setImagenEditada(producto.imagen);
};

const GuardarEdicion = async (id) => {
  const EdicionProducto = { id, nombre: ProductoEditado, descripcion: DescripcionEditada, imagen: ImagenEditada };
  await UpdateProducto(EdicionProducto);
  setProductos(Productos.map(producto => 
    producto.id === id ? { ...producto, nombre: ProductoEditado, descripcion: DescripcionEditada, imagen: ImagenEditada } : producto
  ));
  setEditarProductoId("");
  setProductoEditado("");
  setDescripcionEditada("");
  setImagenEditada("");
};

const EliminarProducto = async (id) => {
  await DeleteProducto(id);
  setProductos(Productos.filter((producto) => producto.id !== id));
};

// Función para manejar el click del botón de imagen
const ClickImagen = () => {
  if (fileInputRef.current) {
    fileInputRef.current.click(); // Hacer click en el input de archivo
  }
};
  // useEffect para cargar los productos al iniciar el componente
  useEffect(() => {
    const fetchProductos = async () => {
      const productos = await GetProducto();
      setProductos(productos);
    };
    fetchProductos();
  }, []);

  return (
<div className='Container'>
  <h1 className='Gestion'>Administración de Productos</h1><br /><br />
  <div className='InputsDatos'>
    <input className='InputNombreProducto' type="text"
      value={NuevoProducto}
      onChange={CambiarValorInput}
      placeholder='Ingrese el nombre del producto'
    /><br />

    <textarea className='InputDescripcionProducto'
      value={DescripcionProducto}
      onChange={CambiarDescripcion}
      placeholder='Ingrese una descripción'
    /><br /><br />

    <input type="file" accept="image/*" onChange={ManejarImagen} /><br /><br />
    <button className='btnAñadirProducto' onClick={AñadirProducto}>Añadir producto</button>
  </div>
  <br /><br /><br />

      {/* LISTA DE PRODUCTOS */}
<div className='ContenedorProductos'>
  <div>
    <ul>
  {/* INCIO DE EDICIÓN */}
{Productos.map((producto) => (
<li key={producto.id}>
  {EditarProductoId === producto.id ? ( /*Abre operador ternario*/
    <>
      <input className='InputNombreProductoEditado' type="text"
        value={ProductoEditado}
        onChange={CambiarNombreEditado}
      />
      <textarea className='InputDescripcionProductoEditada' /*Area de edición de descripción*/
        value={DescripcionEditada}
        onChange={CambiarDescripcionEditada}
      />

      {/* Mostrar la imagen actual al editar*/}
      {ImagenEditada && <img src={ImagenEditada} alt={ProductoEditado} width="100" />}

      {/* Botón para seleccionar o cambiar la imagen */}
      <button className='btnCambiarImagen' onClick={ClickImagen}>  {/* Simula un click en el input */}
        {ImagenEditada || producto.imagen ? "Cambiar imagen" : "Seleccionar archivo"} </button>

      <input ref={fileInputRef} id={`fileUpload-${producto.id}`} type="file"
        accept="image/*"
        onChange={ManejarImagenEditada}
        style={{ display: "none" }} //Se oculta el input de seleccionar archivo
      />
      <br />
      <button className='btnGuardarProducto' onClick={() => GuardarEdicion(producto.id)}>Guardar</button>
    </>
) : ( /*Cierra operador ternario*/
  
        <>
          <div className='divListaProductos'>
            <h2>{producto.nombre}</h2>
            <img src={producto.imagen} alt={producto.nombre} width="100" />
            <p>{producto.descripcion}</p>
            <button className='btnEditarProducto' onClick={() => EditarProducto(producto)}>Editar</button>
            <button className='btnEliminarProducto' onClick={() => EliminarProducto(producto.id)}>Eliminar</button>
          </div>
        </>
      )}
    </li>
  ))}
</ul>

  </div>
</div> {/*Cierra div ContenedorProductos*/}
</div>/*Cierra div Container*/
);
}

export default AdministrationContent;
