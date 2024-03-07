
let cajaNombre = document.getElementById('nombre');
let cajaEmail = document.getElementById('email');
let cajaTelefono = document.getElementById('telefono');
let cajaAsunto = document.getElementById('asunto');
let cajaMensaje = document.getElementById('mensaje')



document.getElementById('enviar').addEventListener('click', function(evento) {

evento.preventDefault()
   
    let nombre = cajaNombre.value
    let email= cajaEmail.value
    let telefono = cajaTelefono.value
    let asunto = cajaAsunto.value
    let mensaje = cajaMensaje.value

    console.log('Nombre:', nombre)
    console.log('Email:', email)
    console.log('Mensaje:', mensaje)
    console.log('Mensaje:', telefono)
    console.log('Mensaje:', asunto)

    if(nombre=="" && email=="" && mensaje=="" && telefono=="" && asunto==""){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Esto esta vacio",

          })


    }else{
        Swal.fire({ 
            title: "Bienvenido "+nombre,
            text: "tus credenciales son correctas",
            icon: "success",
            
          })
        }

   
})
