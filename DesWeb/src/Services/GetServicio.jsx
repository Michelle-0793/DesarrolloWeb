async function GetServicio() {
    try {
      const response = await fetch('http://localhost:3001/Servicios');
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error al obtener las servicios:', error);
      throw error;
    }
  }
  
  export default GetServicio;