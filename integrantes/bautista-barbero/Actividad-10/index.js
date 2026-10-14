// Verificar si una persona es mayor o menor de edad
let edad = 19;

if (edad >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}

// Verificar si un numero es par o impar
let numero = 8;

if (numero % 2 === 0) {
    console.log("El número es par");
} else {
    console.log("El número es impar");
}

//Verificar si la nota es reprobado, aprobado o excelente
let nota = 8;

if (nota < 4) {
    console.log("Reprobado");
} else if (nota <= 7) {
    console.log("Aprobado");
} else {
    console.log("Excelente");
}


//Imprimir los numeros del 1 al 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Imprimir los numeros del 10 al 1
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

//Mostrar si cada numero es par o impar (20 iteraciones desde 0)
for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }
}

//Mostrar el numero y si es par o impar usando template literals
for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log(`El número ${i} es par`);
    } else {
        console.log(`El número ${i} es impar`);
    }
}
