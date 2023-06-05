function validarFormulario() {

  try {
    const nombre = document.getElementById("nombre");
    const telefono = document.getElementById("telefono");
    const correo = document.getElementById("correo");
    const mensaje = document.getElementById("mensaje");
    const formulario = document.getElementById("formulario");

    formulario.onsubmit = function(event) {
      try {
        event.preventDefault();

        // Validar que los campos no estén vacíos
        if (nombre.value.trim() === '') {
          alert('Por favor, ingresa tu nombre.');
          nombre.focus();
          return;
        }

        if (telefono.value.trim() === '') {
          alert('Por favor, ingresa tu teléfono.');
          telefono.focus();
          return;
        }

        // Validar número de teléfono
        var telefonoRegex = /^\d{9}$/;
        if (!telefonoRegex.test(telefono.value.trim())) {
          alert('El teléfono no es válido. Ingresa un número de teléfono de 9 dígitos.');
          telefono.focus();
          return;
        }

        if (correo.value.trim() === '') {
          alert('Por favor, ingresa tu correo electrónico.');
          correo.focus();
          return;
        }

        // Validar email
        var correoRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if (!correoRegex.test(correo.value.trim())) {
          alert('El correo electrónico no es válido.');
          correo.focus();
          return;
        }

        if (mensaje.value.trim() === '') {
          alert('Por favor, ingresa un mensaje.');
          mensaje.focus();
          return;
        }

        // Si todas las validaciones son exitosas, puedes enviar el formulario aquí
        alert('Formulario enviado correctamente.');

        // Envía el formulario
        formulario.submit();

      } catch (error) {
      console.error('Error al procesar el formulario', error)
      }
    };
  } catch (error) {
  console.error('Error al validar el formulario', error)
  }
}

// Llamar a la función para habilitar la validación del formulario
validarFormulario();