async function PostProducto(producto) {
    try {
        const response = await fetch('http://localhost:3001/Productos', {
            method: 'POST',
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
        console.error('Error al enviar la tarea:', error);
        throw error;
    }
}
export default PostProducto;