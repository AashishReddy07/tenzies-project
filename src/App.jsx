import { useState, useRef, useEffect } from "react"
import './App.css'
import Die from './Die'

export default function App() {
  const [dice, setDice] = useState(() => generateAllNewDice())
  const buttonRef = useRef(null)

  const gameWon = dice.every(dieObj => dieObj.isHeld) && 
    dice.every(dieObj => dieObj.val === dice[0].val)

  useEffect(() => {
    gameWon && buttonRef.current.focus()
    },[gameWon])

  function generateAllNewDice() {
    return new Array(10)
      .fill(0)
      .map(() => ({
        val: Math.ceil(Math.random() * 6), 
        isHeld: false
      }) )
  }

  function rollDice() {
    !gameWon && setDice(dice.map(dieObj => 
      dieObj.isHeld ? 
        dieObj :
        { ...dieObj, val: Math.ceil(Math.random() * 6)}
    ))
    gameWon && setDice(generateAllNewDice())
  }

  function hold(index) {
    setDice(dice.map((dieObj, i) =>
      (index === i) ? 
        { ...dieObj, isHeld: !dieObj.isHeld } :
        dieObj
    ))
  }

  return (
    <main>
      <div aria-live="polite" className=".sr-only">Congrats! You won the game. Click on new game button to start new game</div>
      <div className="dice-container">
        {dice.map((dieObj, index) => (
          <Die 
          key={index} 
          number = {dieObj.val} 
          isHeld={dieObj.isHeld}  
          onClick={() => hold(index)}
          />
        ))}
      </div>
      <button ref={buttonRef} className="roll" onClick={rollDice}>{gameWon ? "New Game" : "Roll"}</button>
    </main>
 )
}
