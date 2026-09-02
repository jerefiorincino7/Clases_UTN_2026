import React from 'react'
import ProductCard from './Components/ProductCard/ProductCard'
import Message from './Components/Message/Message'
import Counter from "./Components/Counter/Counter"

export default function App() {

  let precio = 40000
  return (
    <div>
      <h1>Hola, esta es mi primera app en React!</h1>
      <a>Click aquí!</a>
      <div>
        El valor del iva de ${precio} ARS es igual a ${precio * 0.21} ARS
      </div>
      <Counter/>
    </div>
    
  )
}

