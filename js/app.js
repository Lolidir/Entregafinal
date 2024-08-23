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


    let nombre = 'pepe'
    let apellido = 'perez'
    let edad = 23
    let casado = true;

    let persona = {
        nombre: nombre,
        apellido: 'rodriguez',
        edad: 24,
        casado: false,
    }

    console.log ('nombre1', nombre)
    console.log (persona)

    let mesa = {
        madera: 'roble',
        color: 'oscuro',
        tamaño: 'grande',
        precio: 10000,
        cantidad_patas: 4,
    }

    //?obteniendo propiedades de un objto

    console.log(mesa.precio)

    console.table(mesa)

    //? Constructores obj

    function Producto(id, name, price, stock, description) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.description = description;

        this.agregar = function () { console.log (`Producto ${this.name} agregado`)}
    }

    const producto1 = new Producto ('1', 'Laptop', 130000, 3, 'computadora portatil');

//? For in recorre todas las propiedades de un objeto

for (const propiedad in producto1){
    console.log(producto1[propiedad])
    console.log(propiedad)
}

//? Clases

class Persona {
    constructor (nombre, edad, sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre}`)
    }
}

function agregarPersona() {
    let nombre = prompt('Agregue su nombre por favor');
    let edad = parseInt(prompt('Agregue su edad por favor'));
    let sexo = prompt('Agregue su sexo');

    return new Persona(nombre, edad, sexo);
}

const persona1 = new Persona('Goku', 29, Masculino)

const persona2 = agregarPersona();

console.log(persona2)
persona2.saludar()

class Producto {
    constructor(id, name, price, stock, description) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.description = description;
    }

    sumarIva () {
        this.precio = this.precio * 1.21;
    }
}

//? Arrays - Listas

const mix = [1, 'holi', true, [1, 2, 3]];
console.log(mix[3][2])

//? Metodo length

for (let inicial = 0; inicial < mix.length; inicial++ ) {
    console.log(mix[inicial])
}

//Agregando elementos

mix.push('nuevo elemento')
console.log(mix)


//quita primer elemento
productos.shift 
//quita ultimo elemento
productos.pop

//primer parametro indicamos donde queremos arrancar, si no le pasamos
//segundo borra todo
//splice elimina uno o mas elementos del array, indicamos la cantidad
//a eliminar en el primer parametro
//productos.splice(1)


//tambien podemos agregar en cualquier posicion de array, primer parametro
//agrega segundo reemplaza
productos.splice(3, 1, 'nuevo elemento')

// metodo join, generar un string con todos los elementos del array,
//en el parametro podemos pasarle el separador de los elementos

const miArray = ['fer','gmail']
console.log(miArray.join("-"))

//metodo concat combina dos arrays en uno
const frutas = ['manzana','pera','banana']
const verduras = ['tomate','cebolla','morron']
const ensaladaFit = frutas.concat(verduras)
console.log(ensaladaFit)

//metodo slice copia una parte del array 
//sin contar el ultimo elemento

const muebles = productos.slice(1, 3)
console.log(muebles)

const newMueble = productos.slice(1, 3).concat(productos.slice(3, 5))
console.log(newMueble)

//Metodo indexOf devuelve el indice del elemento del array que coincide con el parametro, no puede ser un objeto
console.log(frutas.indexOF('manzana'))

//Metodo includes devuelve true o false si el elemento exsiste en el array
console.log(frutas.includes(pera))

let busqueda = prompt('ingresa que queres buscar en la lista').toLocaleLowerCase()

if (frutas.includes(busqueda))
    console.log(`si hay ${busqueda} en la lista`)
else {
    console.log(`no hay ${busqueda} en la lista`)
}

//Metodo de array para encontra el indice de un elemento dentro de un objeto
//Metodo findIndex si se necesita acceder al iindice de un objeto

const index = productos.findIndex(producto => producto.name == busqueda)

console.log(index)


//Funciones de orden superior

function mayorQue(numero){
    console.log(numero)
    return(m) => m > numero;
}
let mayorQueDiez - mayorQue(10);

console.log(mayorQueDiez(15))

function asignarOperacion(op) {
    if (op == 'sumar') {
        return (a, b) => a + b
    }   else if (op == 'restar') {
        return (a, b) => a - b
    }
}

let sumar = asignarOperacion('sumar');
let restar = asignarOperacion('restar');

console.log(sumar(2,4))
console.log(restar(20,12))

//recibir funciones por parametros

function porCadaUno(array, funcion) {
    for (const elemento of array) {
        funcion(elemento)
    }
}

const numeros = [1, 2, 3, 4, 5]

porCadaUno(numeros,console.log)

const viajes = [
    { id: 'asdjqwejkqewe-sdjkhsdjh', nombre: 'Buenos Aires', precio: 1000},
    { id: 'jfdgjebrhjerbr-i232i34', nombre: 'Robertolandia', precio: 0001}
]

viajes.forEach((viaje) => ) {
    console.log(`el paquete hacia ${viaje.nombre} vale ${viaje.precio} pesardos`)
}

//find me devuelve solo el primer elemento que cumpla con la cond

const viajeEncontrado = viajes.find((viaje) => viaje.precio == 2000)
console.log(viajeEncontrado)

//Filter me devuelve un array nbuevo con todos los elementos que cumplan con la cond

const filtrarPrecio = viajes.filter((viaje) => viaje.precio == 2000)
console.log(filtrarPrecio)

//Some

const existe = viajes.some((viaje) => viaje.nombre == 'Roma')
console.log(existe)

//map
const precios = viajes.map((viaje) => {
    return viaje.precio * 2
})
console.log(precios)

//reduce

const total = viajes.reduce ((total, viaje) => total + viaje.precio, 0)