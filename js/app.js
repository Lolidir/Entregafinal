let nombre
let apellido

let boton = document.querySelector('button')
let formulario = document.querySelector('form')

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()
    console.log('Nombre' ,formulario[0].value)
    console.log('Edad' ,formulario[1].value)
})