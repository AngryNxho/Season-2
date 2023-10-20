export default function DisplayNumber({number, onClick}) {
    return (
        <div>
            <div>
                <h1>Numero: {number}</h1>
                <button onClick = {onClick}>Random</button>
            </div>
        </div>
    )
}