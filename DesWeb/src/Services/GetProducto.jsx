async function GetProducto() {
    try {
      const response = await fetch('http://localhost:3001/Productos');
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error al obtener las productos:', error);
      throw error;
    }
  }
  
  export default GetProducto;