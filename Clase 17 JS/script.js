/* const producto = {
    id: 1,
    titulo: 'Tv Samsung 52"',
    precio: 4000
}

const productCard = document.getElementById("product-card")
productCard.innerHTML = `
    <h2>${producto.titulo}</h2>
    <div>
        <span>Precio: <strong>$${producto.precio}</strong></span>
    </div>
    <button>Comprar</button>
` */

const mensajes = [
    {
        autor: 'pepe',
        mensaje: "hola que tal!",
        fecha: '21:30',
        id: 1
    },
    {
        autor: 'Tu',
        mensaje: "Todo bien y vos?",
        fecha: '21:32',
        id: 2
    },
    {
        autor: 'pepe',
        mensaje: 'Genial!',
        fecha: '21:35',
        id: 3
    }
]
const caja = document.getElementById("caja")

let html_mensajes = ""
for(let msj of mensajes){
    html_mensajes = html_mensajes + `
        <div>
            <h3>${msj.autor}</h3>
            <p>${msj.mensaje}</p>
            <span>Enviado a las: ${msj.fecha}</span>
            <hr/>
        </div>
    `
}

caja.innerHTML = html_mensajes

/* 
Renderizar la lista de mensajes
<div>
    <h3>Autor</h3>
    <p>Mensaje</p>
    <span>Fecha</span>
    <hr>
</div>
*/

/* let html_productos = ''
for(let producto of productos){
    html_productos = html_productos + `
        <div>
            <h2 class='producto_titulo'>${producto.titulo}</h2>
            <div>
                <div>Precio: <strong>$${producto.precio}</strong></div>
                <div>Stock disponible: ${producto.stock}</div>
            </div>
            <button>Comprar</button>
            <hr/>
        </div>
    `
} */