import { useState } from "react";

function getRandomNumbers(numbers) {
    let arr = [];
    
    for (let x = 0; x < numbers; x++) {
        let random = Math.trunc(Math.random() * 9 + 1);
        if (!(arr.includes(random))) {
            arr.push(random);
        }else {
            x--;
        }
    }

    return arr
}


export default function DisplayInfo() { 
    const [length, setLength] = useState("");


    const [toque, setToque] = useState(0);
    const [fama, setFama] = useState(0);

    
    
    const handleChange = (event) => {
        let secretCode = getRandomNumbers(event.target.value) ;

        console.log(secretCode)
        setLength(event.target.value);
        
      };

    return (
        <div className="background">
            <div className = "container">
                <div className="content">
                    <label>Number Length</label>
                    <input type="number" className="length" value = {length} onChange={handleChange}/>
                    <label>Guess the Number</label>
                    <input type="number" className="numbers"/> 
                    <div className="centerDiv">
                        <h1 className = "secret">?</h1>
                    </div>
                    <div className="btns">
                        <button className="begin">Start</button>
                        <button className="check">check</button>
                    </div>
                    <div className="stats">
                        <h1>Toques: {length}</h1>
                        <h1>Famas: {fama}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}