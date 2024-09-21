async function PostServicio(servicio) {
    try {
        const response = await fetch('http://localhost:3001/Servicios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(servicio)
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al enviar el servicio', error);
        throw error;
    }
}
export default PostServicio;