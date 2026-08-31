import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)
    const handleIncrement = () => setCount(count + 1)
    const handleDecrement = () => setCount(count - 1)
    return(
        <div>
            <h2>Contador: {count}</h2>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleIncrement}>+</button>
        </div>
    )
}
export default Counter