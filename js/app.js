let boton = document.querySelector('button')
let formulario = document.querySelector('form')

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()
    console.log('Nombre' ,formulario[0].value)
    console.log('Días' ,formulario[1].value)
    console.log('Personas' ,formulario[2].value)
    console.log('Alojamiento' ,formulario[3].value)
    
})



