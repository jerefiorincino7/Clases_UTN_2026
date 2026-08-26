import React from 'react'
import ProductCard from './Components/ProductCard/ProductCard'
import Message from './Components/Message/Message'

export default function App() {

  let precio = 40000
  return (
    <div>
      <h1>Hola, esta es mi primera app en React!</h1>
      <a>Click aquí!</a>
      <div>
        El valor del iva de ${precio} ARS es igual a ${precio * 0.21} ARS
      </div>
      <Message
        autor={"YO"}
        content={"Hello, I was wondering when my order will be shipped?"}
        fecha={"1:30PM"}
        estatus_envio={"visto"}
      />
      <Message
      autor={"Pepe"}
        content={"Your order has been processed and we are preparing your item for shipment shortly."}
        fecha={"1:32PM"}
      />
      <Message
      autor={"YO"}
        content={"Thank you!"}
        fecha={"1:32PM"}
        estatus_envio={"visto"}
      />
      <Message
      autor={"Pepe"}
        content={"Your order has been shipped and is expected to be delivered on September 1, 2026"}
        fecha={"12:00PM"}
      />
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </div>
  )
}

