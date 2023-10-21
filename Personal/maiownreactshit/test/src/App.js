import "./styles.css"

export default function App() {

    const handleClick = () => {
        return (
            <div>
                <h1>chao</h1>
            </div>
        )
    }

    return (
        <div>
            <div>
                <input type ="text" />
                <button onClick={handleClick}>Click</button>
            </div>
        </div>
    ) 
}