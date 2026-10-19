function saludar() {
    console.log("¡Hola, bienvenido!");
}
saludar(); 


function saludarPersona(nombre) {
    console.log(`¡Hola ${nombre}, bienvenido!`);
}
saludarPersona("santino"); 


function esMayorDeEdad(edad) {
    if (edad >= 19) {
        return true;
    } else {
        return false;
    }
}

let resultadoMayorEdad = esMayorDeEdad(20);
console.log(`¿Es mayor de edad?: ${resultadoMayorEdad}`);



const esMayorDeEdadFlecha = (edad) => {
    return edad >= 18;
};

let resultadoFlecha = esMayorDeEdadFlecha(16);
console.log(`¿Es mayor de edad (con función flecha)?: ${resultadoFlecha}`);


const compararNumeros = (a, b) => {
    if (a < b) {
        console.log(`El número ${a} es menor que ${b}`);
    } else if (a === b) {
        console.log(`El número ${a} es igual que ${b}`);
    } else {
        console.log(`El número ${a} es mayor que ${b}`);
    }
};

console.log("--- Bucle de comparación ---");
for (let i = 1; i <= 5; i++) {
    compararNumeros(i, 3);
}



const suma = (num1, num2) => {
    let resultado = num1 + num2;
    console.log(`El resultado de la suma es ${resultado}`);
};

const resta = (a, b) => {
    let resultado = a - b;
    console.log(`El resultado de la resta es ${resultado}`);
};

const operacion = (a, b, callback) => {
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        console.log("Debe ingresar solo números.");
        return;
    }
    
    callback(a, b);
};

console.log("--- Pruebas de Operaciones ---");
operacion(10, 5, suma);   
operacion(10, 5, resta);  

operacion("10", 5, suma);

