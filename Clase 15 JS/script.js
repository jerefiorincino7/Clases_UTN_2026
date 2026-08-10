//Funciones
//Sirven para guardar bloques de codigo parametrizables
//Las funciones pueden retornar un resultado
//Cuando usamos el retorno, la funcion corta su ejecucion


//tipoIva = "general", "reducido", "aumentado"

/* function determinarFactorPorcentajeIva (tipoIva){
    let factor_porcentaje = 0
    if(tipoIva === "general"){
        factor_porcentaje = 21
    }
    else if(tipoIva === "reducido"){
        factor_porcentaje = 10.5
    }
    else if(tipoIva === "aumentado"){
        factor_porcentaje = 27
    }
    return factor_porcentaje
}

function calcularIva (precio, tipoIva){
     let iva = precio * (determinarFactorPorcentajeIva(tipoIva) / 100)
    return iva
}

let iva800 = calcularIva(800, "reducido")
console.log("El iva de 800$ es $" + iva800)

let iva1000 = calcularIva(1000) */

/*function calcular(a, b, operacion){
    let resultado
    if (operacion === "+"){
        resultado = (a + b)
    }
    else if (operacion === "-"){
        resultado = (a - b)
    }
    else{
        return null
    }
    return resultado
}

console.log (calcular(50, 50, "+"))
console.log (calcular(50, 50, "-"))*/

//Arrays
//Los arrays nos permiten almacenar una lista de datos
//Sinonimos: array, listas, colecciones, matrices

//Los datos dentro de un array tienen un numero de indice que indicara su posicion dentro de este
//La cantidad de elementos en un array es infinita
/*let nombres = [
    "pepe", //Indice 0
    "maria", //Indice 1
    "juan" //Indice 2
]
console.log("El segundo nombre de la lista es " + nombres[1])*/

//Los arrays guardan la propiedad .length, esta indica la cantidad de elementos que hay dentro del array
/*console.log("La cantidad de nombres es " + nombres.length)*/

//Ejemplos:
/*let notas = ["5", "10", "7"]
let datos = [true, null, 10, "hola"]*/

/*let tipos_iva_disponibles = [
    "reducido",
    "aumentado",
    "general"
]

let tipos_iva_seleccionado = "aumentado"
if(!tipos_iva_disponibles.includes(tipos_iva_seleccionado)){
    console.log("Error, tipo de iva invalido")
}*/

//Los arrays son interables, o sea podemos recorrerlos con bucles

/*let nombres = ["pepe","maria","juan"]

for(
    let indice = 0;
    indice < nombres.length;
    indice = indice + 1
){
    console.log("Indice: " + indice)
    console.log("hola " + nombres[indice])
}*/

/* let numeros = [500, 400, 100]
let sumatoria = 0

for(
    let indice = 0;
    indice < numeros.length;
    indice = indice + 1
){
    sumatoria = sumatoria + numeros[indice];
}

console.log("Resultado final: " + sumatoria); */

let tipos_iva = [
    ["general", 21],
    ["reducido", 10.5],
    ["aumentado", 27]
]

function obtenerIva(tipoIva) {
    for (
        let indice = 0;
        indice < tipos_iva.length;
        indice = indice + 1
    ) {
        let nombre_tipo_iva = tipos_iva[indice][0]
        let valor_tipo_iva = tipos_iva[indice][1]
        if (nombre_tipo_iva === tipoIva) {
            return valor_tipo_iva
        }
    }
    return null
}

console.log(obtenerIva('general'));  // Retorna 21
console.log(obtenerIva('aumentado')); // Retorna 10.5
console.log(obtenerIva('pepe'));     // Retorna null