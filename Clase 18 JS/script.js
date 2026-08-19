/* const btn_click = document.getElementById("btn")

function saludar (){
    const div = document.getElementById("cont-principal")
    div.innerHTML = `<h1>Hola que tal!</h1>`
}

btn_click.addEventListener(
    "click",
    saludar
) */

/* const spanContador = document.getElementById("contador")
const btnResta = document.getElementById("btn-resta")
const btnSuma = document.getElementById("btn-suma")

let valorContador = 0;

function decrementar(){
    valorContador--;
    spanContador.textContent = valorContador
}

function incrementar(){
    valorContador++;
    spanContador.textContent = valorContador
}

btnResta.addEventListener(
    "click",
    decrementar
)

btnSuma.addEventListener(
    "click",
    incrementar
) */

const btn1 = document.getElementById("btn_1")
const btn2 = document.getElementById("btn_2")
const btn3 = document.getElementById("btn_3")
const divResultado = document.getElementById("resultado")

function seleccionarOpcion(evento){
    const numeroOpcion = evento.target.getAttribute("data-option-number")
    divResultado.innerText = "Opcion seleccionada: " + numeroOpcion
}

btn1.addEventListener("click", seleccionarOpcion)
btn2.addEventListener("click", seleccionarOpcion)
btn3.addEventListener("click", seleccionarOpcion)