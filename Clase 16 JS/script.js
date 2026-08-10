/* let nombres = ["pepe", 'juan', 'maria', 'carlos', 'jose', 'julieta', 'ana']

if (nombres.includes("pedro")){
    console.log("Pedro!")
}

let indice_maria = nombres.indexOf('maria')
nombres.splice(indice_maria, 1)

let indice_jose = nombres.indexOf('jose')
nombres.splice(indice_jose, 1, 'josesito')

console.log(nombres) */

/* const notas = [90, 40, 100]

function calcularPromedio (lista){
    let suma = 0;
    for(const nota of lista){
    suma += nota;
}
    return suma / lista.length;
}

console.log(calcularPromedio(notas)); */

/* let nombres = ["tv noblex", "tv samsung", "tv noblex"]

function contarNombres(lista, nombreBuscado){
    let contador = 0;
    for(const nombre of lista){
        if(nombre === nombreBuscado){
            contador += 1
        }
    }
    return contador;
}

console.log(contarNombres(nombres, 'tv noblex')); // Devuelve 2
console.log(contarNombres(nombres, 'pepito'));    // Devuelve 0
console.log(contarNombres(nombres, 'tv samsung')); // Devuelve 1 */

const productos = [
    {
        nombre: "tv samsung",
        id: 1,
        precio: 1200000,
        categorias:["Tecnologia", "Hogar"]
    },
    {
        nombre: "tv noblex",
        id: 2,
        precio: 2000000,
        categorias: ["Tecnologia", "Hogar"]
    }
]

function subirPrecio (productos, idProducto, precioASubir){
    for(const producto of productos){
        if(producto.id === idProducto){
            producto.precio += precioASubir
            break;
        }
    }
}

subirPrecio (productos, 2, 200000);
console.log (productos)