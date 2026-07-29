/*
let edad = Number(prompt("ingrese su edad"));

if (edad < 16) {
    console.log("es menor de edad");
} 
else if (edad >= 16 && edad < 18) {
    console.log("casi deja de ser menor de edad");
} 
else {
    console.log("es mayor de edad");
}
*/

/*
let numeroA = Number(prompt("Ingrese un numero:"))

let numeroB = Number(prompt("Ingrese otro numero:"))

let operacion = prompt("Ingrese una operacion (+, -, sumar, restar):")

if (operacion === "+" || operacion === "sumar"){
    let numeroC = numeroA + numeroB
    console.log("el resultado de la suma es: " + numeroC)
}

else if(operacion === "-" || operacion === "restar"){
    let numeroC = numeroA - numeroB
    console.log("el resultado de la resta es: " + numeroC)
}

else{
    console.log("operacion invalida, vuelva a intentar")
}
*/

/*
let accion = "SALTAR"

switch(accion){
    case "SALTAR":
        console.log("Estoy saltando!")
        break
    case "CORRER":
        console.log("Estoy corriendo!")
        break
    case "CAMINAR":
        console.log("Estoy caminando!")
        break
}
*/

/*
let numeroA = Number(prompt("Ingrese un numero:"))
let numeroB = Number(prompt("Ingrese otro numero:"))
let operacion = prompt("Ingrese una operacion (+, -, sumar, restar):")

switch(operacion){
    case "+":
    case "sumar":
        let suma = numeroA + numeroB
        console.log("El resultado de la suma es: " + suma)
        break
    case "-":
    case "restar":
        let resta = numeroA - numeroB
        console.log("El resultado de la resta es: " + resta)
        break
    default:
        console.log("Operaacion invalida, vuelva a intentar")
}
*/

/*
let numero = prompt("Ingrese un numero")

while(isNaN(numero) || numero === null || numero ===""){
    alert("Error, numero no valido")
    numero = prompt("Ingrese el numero")
}

alert("Numero valido")
*/

let numeroA = Number(prompt("Ingrese el primer número:"));
let numeroB = Number(prompt("Ingrese el segundo número:"));
let operacion = prompt("Ingrese una operacion (+, -, sumar, restar)");

while(operacion !== "+" && operacion !== "-" && operacion !== "sumar" && operacion !== "restar"){
    alert("Error, operacion no valida");
    operacion = prompt("Ingrese una operacion (+, -, sumar, restar)");
}

alert("Operacion valida");

if (operacion === "+" || operacion === "sumar") {
    alert("El resultado es: " + (numeroA + numeroB));
} else if (operacion === "-" || operacion === "restar") {
    alert("El resultado es: " + (numeroA - numeroB));
}