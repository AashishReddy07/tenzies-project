import { useState } from "react"
import './App.css'
import Die from './Die'

export default function App() {
  const [dice, setDice] = useState(generateAllNewDice())

  function generateAllNewDice() {
    return new Array(10)
      .fill(0)
      .map(() => ({
        val: Math.ceil(Math.random() * 6), 
        isHeld: false
      }) )
  }

  function rollDice() {
    setDice(dice.map(dieObj => 
      dieObj.isHeld ? 
        dieObj :
        { ...dieObj, val: Math.ceil(Math.random() * 6)}
    ))
  }

  function hold(index) {
    setDice(dice.map((dieObj, i) => {
      if (index === i) {
        return { ...dieObj, isHeld: !dieObj.isHeld }
      }
      return dieObj
    }))
  }

  return (
    <main>
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
      <button className="roll" onClick={rollDice}>Roll</button>
    </main>
 )
}
