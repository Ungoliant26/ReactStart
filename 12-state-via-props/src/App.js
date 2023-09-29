import { useState } from 'react'
import './App.css'
import {
  Button1,
  Button2,
  Button3,
  Button4,
  ButtonClear,
} from './components/Button'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1)
  }

  const incrementCount2 = () => {
    setCount(count + 10)
  }

  const incrementCount3 = () => {
    setCount(count + 100)
  }

  const incrementCount4 = () => {
    setCount(count + 1000)
  }

  const returnZero = () => {
    setCount(count * 0)
  }

  return (
    <div className="App">
      <Counter count={count} />
      <Button1 onClick={incrementCount} />
      <Button2 onClick={incrementCount2} />
      <Button3 onClick={incrementCount3} />
      <Button4 onClick={incrementCount4} />
      <ButtonClear onClick={returnZero} />
    </div>
  )
}

export default App
