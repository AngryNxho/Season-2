export default function DisplayBtns({value, onClick}) {
    return (
        <div>
            <div>
                <button onClick={() => onClick(value)}>{value}</button>
            </div>
        </div>
        )
}