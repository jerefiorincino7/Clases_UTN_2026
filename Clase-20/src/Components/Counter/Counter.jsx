import { useState } from "react";
import "../Css/Global.css"

function Counter() {
    const [count, setCount] = useState(0);
    function handleIncrement() {
        setCount(count + 1);
    }
    function handleDecrement() {
        setCount(count - 1);
    }
    if (count === 0){
    return (
        <div>
            <button onClick={handleIncrement}>Comprar</button>
        </div>
    )
}
    return(
        <div>
            <h2>Contador: {count}</h2>
            {count === 10 && (
                <p className="limit-message">
                    Has alcanzado el limite
                </p>
            )}
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleIncrement} disabled={count === 10}>+</button>
        </div>
    )
}
export default Counter