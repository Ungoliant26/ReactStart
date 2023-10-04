import { useState } from 'react'
import './App.css'
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
    setCount(0)
  }

  const buttonStyle = { backgroundColor: 'lightblue' }

  return (
    <div className="App">
      <Counter count={count} />
      <div>
        <button onClick={incrementCount} style={buttonStyle}>
          +1 Click
        </button>
        {count >= 10 && (
          <button onClick={incrementCount2} style={buttonStyle}>
            +10 Clicks
          </button>
        )}
        {count >= 100 && (
          <button onClick={incrementCount3} style={buttonStyle}>
            +100 Clicks
          </button>
        )}
        {count >= 1000 && (
          <button onClick={incrementCount4} style={buttonStyle}>
            +1000 Clicks
          </button>
        )}
      </div>
      {!!count && (
        <div>
          <button onClick={returnZero} style={{ backgroundColor: '#dd7474' }}>
            Reset 0
          </button>
        </div>
      )}
    </div>
  )
}

export default App
