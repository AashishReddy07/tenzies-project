export default function Die({ number, isHeld, onClick }) {
    return (
        <button
         className={`dice ${isHeld ? "held" : ""}`} 
         onClick={onClick} 
         aria-label= {`Die showing ${number}`}
         aria-pressed={isHeld}
        >
            {number}
        </button>
    )
}
