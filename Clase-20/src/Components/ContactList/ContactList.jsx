const contactos_servidor = [
    {
        id: 1,
        autor: 'Marcos',
        ultimo_mensaje: 'Hay que juntarnos!..',
        imagen: "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fwww.gravatar.com%2Favatar%2F2c7d99fe281ecd3bcd65ab915bac6dd5%3Fs%3D250",
        mensajes_sin_leer: 2,
        fecha_ultimo_mensaje: "12/2/2023 14:30"
    },
    {
        id: 2,
        autor: 'Maria',
        ultimo_mensaje: 'Todo bien?! 😎',
        imagen: "https://pbs.twimg.com/profile_images/2093166557849423873/KPt-enAh_400x400.jpg",
        mensajes_sin_leer: 5,
        fecha_ultimo_mensaje: '26/8/2026 11:55'
    },
    {
        id: 3,
        autor: 'Pedro',
        ultimo_mensaje: 'Estira la mano, toca la fe',
        imagen: "https://pbs.twimg.com/profile_images/2039729379971043328/87AvMjwL_400x400.jpg",
        mensajes_sin_leer: 1,
        fecha_ultimo_mensaje: '2/9/2026 10:15'
    },
    {
        id: 4,
        autor: "Juan",
        ultimo_mensaje: "Estoy dando un paseo con mi mejor amigo",
        imagen: "https://pbs.twimg.com/media/GTLcBFdXQAAA85P?format=jpg&name=360x360",
        mensajes_sin_leer: 1,
        fecha_ultimo_mensaje: "2/9/2026 10:25"
    }
]
const contactos_jsx = []

for (const contacto of contactos_servidor) {
    contactos_jsx.push(
        <div key={contacto.id}>
            <h2>{contacto.autor}</h2>
            <img src={contacto.imagen} alt={contacto.autor} className='imagen-contacto' />
            <p>{contacto.ultimo_mensaje}</p>
            <p>{contacto.mensajes_sin_leer}</p>
            <span>{contacto.fecha_ultimo_mensaje}</span>
            <hr />
        </div>
    )
}
