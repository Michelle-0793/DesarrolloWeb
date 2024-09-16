async function UpdateProducto(producto) {
    try {
      const response = await fetch(`http://localhost:3001/Productos/${producto.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(producto)
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al actualizar producto:', error);
      throw error;
    }
  }
  
  export default UpdateProducto;