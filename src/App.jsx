import { useState } from "react"
import './App.css'
import Die from './Die'

export default function App() {
const [dice, setDice] = useState(generateAllNewDice())
  function generateAllNewDice() {
    return new Array(10)
      .fill(0)
      .map(() => Math.ceil(Math.random() * 6))
  }

 return (
  <main>
    <div className="dice-container">
      {dice.map(num => (
        <Die number = {num} />
      ))}
    </div>
  </main>
 )
}
