// Actividad 11 - JS

// 1. Funciones de declaración

// a. Saludar
function saludar() {
    console.log('¡Hola, bienvenido!')
}

saludar()

// b. Saludar persona
function saludarPersona(nombre) {
    console.log(`¡Hola ${nombre}, bienvenido!`)
}

saludarPersona('Lucas')

// c. Es mayor de edad
function esMayorDeEdad(edad) {
    if (edad >= 18) {
        return true
    } else {
        return false
    }
}

const esMayor = esMayorDeEdad(20)
console.log(esMayor)


// 2. Funciones de flecha

// a. Es mayor de edad (flecha)
const esMayorDeEdadFlecha = (edad) => {
    return edad >= 18
}

const resultadoMayor = esMayorDeEdadFlecha(15)
console.log(resultadoMayor)

// b y c. Comparar números en un bucle
const compararNumeros = (parametro1, parametro2) => {
    if (parametro1 < parametro2) {
        console.log(`El número ${parametro1} es menor que ${parametro2}.`)
    } else if (parametro1 === parametro2) {
        console.log(`El número ${parametro1} es igual que  ${parametro22}.`)
    } else {
        console.log(`El número ${parametro1} es mayor que ${parametro2}.`)
    }
}

for (let i = 0; i <= 10; i += 5) {
    compararNumeros(i, 5)
}


// 3. Funciones callback

const suma = (a, b) => {
    const resultado = a + b
    console.log(`El resultado de la suma es ${resultado}.`)
}

const resta = (a, b) => {
    const resultado = a - b
    console.log(`El resultado de la resta es ${resultado}.`)
}

const operacion = (num1, num2, cb) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        console.log('Debe ingresar solo números.')
        return
    }
    cb(num1, num2)
}

// Pruebas
operacion(10, 5, suma)
operacion(10, 5, resta)
operacion('10', 5, suma)