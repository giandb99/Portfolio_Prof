// Seleccionar el elemento HTML con la clase 'proyectos'
const section = document.querySelector('.proyectos');

// URL del archivo JSON
const requestURL = 'json/proyectos.json';

// Crear una nueva solicitud XMLHttpRequest
const request = new XMLHttpRequest();

try {
    
    // Abrir una conexión GET con la URL del archivo JSON
    request.open('GET', requestURL);
    
    // Especificar que la respuesta será en formato JSON
    request.responseType = 'json';
    
    // Enviar la solicitud
    request.send();
    
    // Función que se ejecuta cuando la respuesta del servidor ha sido cargada
    request.onload = function() {
        // Obtener la respuesta JSON
        const proyectos = request.response;
        // Llamar a la función para mostrar los proyectos
        mostrarProyectos(proyectos);
    }

} catch (error) {
    console.error('Error en la solicitud: ', error);
}

// Función para mostrar los proyectos en el HTML
function mostrarProyectos(jsonObj) {
    
    try {
        
        // Obtener la lista de proyectos del objeto JSON
        const proyecto = jsonObj['Proyectos'];
    
        // Iterar sobre cada proyecto
        for (var i = 0; i < proyecto.length; i++) {
            // Crear elementos HTML para cada proyecto
            const articulo = document.createElement('article');
            const titulo = document.createElement('p');
            const imagen = document.createElement('img');
            const enlace = document.createElement('a');
        
            // Establecer el contenido de los elementos
            titulo.textContent = proyecto[i].titulo;
            imagen.src = proyecto[i].imagen;
            enlace.href = proyecto[i].enlace;
    
            // Agregar evento de clic a la imagen
            imagen.addEventListener('click', function() {
                window.open(enlace.href, '_blank');
            });
    
            // Agregar los elementos al artículo
            articulo.appendChild(titulo);
            articulo.appendChild(imagen);
            articulo.appendChild(enlace);
    
            // Agregar el artículo al contenedor de proyectos
            section.appendChild(articulo);
        }
        
    } catch (error) {
        console.error('Error al mostrar los proyectos:', error);
    }

}