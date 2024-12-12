export default function Die({ number, isHeld, onClick }) {
    return (
        <button className={`dice ${isHeld ? "held" : ""}`} onClick={onClick} >
            {number}
        </button>
    )
}
