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

    const [inputValue, setInputValue] = useState("");
    const [guess, setGuess] = useState("");

    const [toque, setToque] = useState(0);
    const [fama, setFama] = useState(0);

    
    
    const handleChangeInput = (event) => {
        if ((event.target.value).length == 1) {
            setInputValue(event.target.value);
        }else {
            setInputValue("")
        }
    };


    const handleChangeGuess = (event) => {
        setGuess(event.target.value)
        console.log(guess)
    };

    const handleClick = (e) => {
        const secretCode = getRandomNumbers(inputValue);
        for (let x in secretCode) {
            console.log(x)
        }
    }

    
    
   

    return (
        <div className="background">
            <div className = "container">
                <div className="content">
                    <label>Number Length</label>
                    <input type="number" className="length" min = {1} max={9} maxLength={1} onChange={handleChangeInput} value = {inputValue} placeholder="Choose a number from 1 to 9"/>
                    <label>Guess the Number</label>
                    <input type="number" className="numbers" placeholder="Guess" onChange={handleChangeGuess}/> 
                    <div className="centerDiv">
                        <h2 className = "secret">?</h2>
                    </div>
                    <div className="btns">
                        <button className="begin">Start</button>
                        <button className="check" onClick={handleClick}>check</button>
                    </div>
                    <div className="stats">
                        <h1>Toques: {toque}</h1>
                        <h1>Famas: {fama}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}