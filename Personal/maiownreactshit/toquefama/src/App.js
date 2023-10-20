import "./App.css";
import { useState } from "react";
import DisplayNumber from "./DisplayNumber";

function App() {
    const [number, setNumber] = useState(0);

    const handleClick = () => {
        setNumber(Math.floor(Math.random() * 9) + 1);
    }
    
  return (
    <div className="container">
        <div className="content">
          <DisplayNumber number={number} onClick={handleClick}/>
        </div>
    </div>
  );
}

export default App;
