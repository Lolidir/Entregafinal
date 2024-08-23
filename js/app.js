let boton = document.querySelector('button')
let formulario = document.querySelector('form')

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()
    console.log('Nombre' ,formulario[0].value)
    console.log('Días' ,formulario[1].value)
    console.log('Personas' ,formulario[2].value)
    console.log('Alojamiento' ,formulario[3].value)
    
})


function saludar () {
    let Nombre = prompt('ingrese su nombre')
    alert(`Hola ${Nombre}, como estas?`)
}

saludar();

function saludars () {
    alert(`Hola ${Nombre}, como estas?`)
}

let Nombre = prompt('ingrese su nombre por favor')

saludars(Nombre);

//let Nombre = prompt('ingrese su nombre por favor')//
let Apellido = prompt('ingrese su apellido')

function saludarovich(nombre, apellido) {
    alert(`Hola ${Nombre} ${Apellido}, como estas?`)
}

saludarovich(Nombre, Apellido)

function despedida(Nombre, Apellido) {
    alert(`Adios ${Nombre} ${Apellido}, hasta la proxima!`)
}

despedida(Nombre, Apellido)

function calculadora () {
    let num1 = parseInt(prompt('ingrese un numero'))
    let num2 = parseInt(prompt('ingrese otro numero'))
    let operacion = prompt('ingrese la operacion:\n + \n - \n * \n /')
    let resultado

    if (isNaN(num1) || isNaN(num2))
        alert('ingrese un numero valido')
    }

    switch(operacion){
        case '+':
            resultado = num1 + num2
            break
        case '-':
            resultado = num1 - num2
            break
        case '*':
            resultado = num1 * num2
            break        
        case '/':
            resultado = num1 / num2
            break    
    }

    alert(`El resultado es ${resultado}`)
    alert(`El resultado es ${resultado}`)