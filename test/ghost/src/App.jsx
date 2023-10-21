import DisplayBtns from "../DisplayBtns";
import "./styles.css"
import { useState } from "react";



export default function App() {

    const handleButtonClick = (value) => {
        setNumber(value)
    }

    const [number, setNumber] = useState(0);



    return (
        <div className = "container">
             <div className="info">
                {number}
            </div>
            <div className="content">
                <div className ="grid">
                    <DisplayBtns value={7} onClick={handleButtonClick}/>
                    <DisplayBtns value={8} onClick={handleButtonClick}/>
                    <DisplayBtns value={9} onClick={handleButtonClick}/>
                </div>
        
                <div className ="grid">
                    <DisplayBtns value={4} onClick={handleButtonClick}/>
                    <DisplayBtns value={5} onClick={handleButtonClick}/>
                    <DisplayBtns value={6} onClick={handleButtonClick}/>
                </div >
        
                <div className ="grid">
                    <DisplayBtns value={1} onClick={handleButtonClick}/>
                    <DisplayBtns value={2} onClick={handleButtonClick}/>
                    <DisplayBtns value={3} onClick={handleButtonClick}/>
                </div>

                <div className="grid">
                    <DisplayBtns value={0} onClick={handleButtonClick}/>
                </div>
            </div>
            
        </div>
    )
}