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

const texts = [
  'Click me +1',
  'Click me +10',
  'Click me +100',
  'Click me +1000',
  'Reset 0',
]

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
      {texts.map((text, index) => {
        return <Button1 onClick={incrementCount} text={text} key={index} />
      })}

      {/* <Button1 onClick={incrementCount} text={texts[0]} />
      <Button2 onClick={incrementCount2} text={texts[1]} />
      <Button3 onClick={incrementCount3} text={texts[2]} />
      <Button4 onClick={incrementCount4} text={texts[3]} />
      <ButtonClear onClick={returnZero} text={texts[4]} /> */}
    </div>
  )
}

export default App
