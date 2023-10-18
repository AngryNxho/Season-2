import { useState } from "react"

export default function App() {

    const [number, setNumber] = useState(0);

    const handleClick = () => {
        setNumber(number + 1);
    }

    return (
        <div>
            <h1>Number: {number}</h1>
            <button onClick = {handleClick}>Click</button>
        </div>
    )
}