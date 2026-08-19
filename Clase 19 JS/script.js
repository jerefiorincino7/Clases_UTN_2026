let productos =[
    {
        id: 1,
        titulo: "Silla oficina",
        precio: 320000,
        stock: 10
    },
    {
        id: 2,
        titulo: "Escritorio madera",
        precio: 120000,
        stock: 3
    },
    {
        id: 3,
        titulo: "Alfombra roja",
        precio: 60000,
        stock: 7
    }
]


function renderProductos(lista){
    const contenedor = document.getElementById("contenedor-productos")
    if (lista.length === 0){
        contenedor.innerHTML = "<p>Lista de productos vacia</p>"
        return;
    }
    let html = "";
    for (const producto of lista){
        html += `
            <div>
                <h2>${producto.titulo}</h2>
                <div><b>Precio:</b> $${producto.precio}</div>
                <div><b>Stock:</b> ${producto.stock}</div>
                <button>Eliminar</button>
                <button>Editar</button>
            </div>
        `
    }
    contenedor.innerHTML = html;
}

function setProductos(nuevoValor){
    productos = nuevoValor;
    renderProductos(productos);
}



function crearProducto (titulo, precio, stock){
    const nuevo_producto = {
        id: productos.length + 1,
        titulo: titulo,
        precio: precio,
        stock: stock
    }

    const productos_clonado = [...productos]
    productos_clonado.push(nuevo_producto)

    setProductos(productos_clonado)
}


function eliminarProductoPorId(id){
    const indice = productos.findIndex(function(producto){
        return producto.id === id
    })

    if (indice === -1){
        return null
    }

    const productos_clonado = [...productos]
    productos_clonado.splice(indice, 1)

    setProductos(productos_clonado)
}

renderProductos(productos)
crearProducto("test", 4000, 20)
/* setProductos([]) */
eliminarProductoPorId(-1)