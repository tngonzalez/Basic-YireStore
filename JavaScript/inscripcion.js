
//JQuery Validaciones
$().ready(function() {
    $("#formulario").validate({
        rules: {
            nombre: {
                required: true,
                minlength: 3
            },
            apellido: {
                required: true,
                minlength: 5
            },
            fechaNac: {
                required: true,
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            nombre: {
                required: "Debe ingresar su nombre",
                minlength: "Su nombre debe contener al menos 3 caracteres"
            },
            apellido: {
                required: "Debe ingresar su apellido",
                minlength: "Su apellido debe contener al menos 5 caracteres"
            },
            fechaNac: {
                required: "Debe seleccionar la fecha de su nacimiento",
            },
            email: {
                required: "Debe ingresar un email válido"
            }
        }
    });
});

//Enviar datos por email
const btn = document.getElementById('button');

document.getElementById('formulario')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_bwic8cs';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Registrar';
      alert('Registro realizado exitosamente. Gracias por preferirnos!');
    }, (err) => {
      btn.value = 'Registrar';
      alert(JSON.stringify("Debe ingresar información correcta y no debe dejar espacios en blanco"));
    });
});


//Guardar los datos en archivo JSON 
const formulario = document.querySelector('#formulario');

const procesaTodo = (event) => {
event.preventDefault();
const dt = new FormData(event.target);

const datosCompletos = Object.fromEntries(dt.entries());
//const datosJson = JSON.stringify(datosCompletos); 

//console.log(datosJson);
 
const url = "../Tienda/datos.json"; 

fetch(url, {
    mode: 'no-cors',
    method: "POST",
    body: datosCompletos,
    cache: 'default',
    crossorigin: true

})
    .then((res) => res.json)
    .then((res1) => console.log(res1))
    alert('Gracias por preferirnos')
    //formulario.reset();
};


formulario.addEventListener('submit', procesaTodo); 

