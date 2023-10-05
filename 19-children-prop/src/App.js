import './App.css'
import Wrapper from './components/Wrapper'

function App() {
  return (
    <div className="App">
      <Wrapper color="lightblue">
        <h2>Text inside</h2>
        <button>Click me</button>
      </Wrapper>
      <Wrapper color="lightgreen">
        <h2>Text inside again</h2>
        <p>Input field</p>
        <input type="text" placeholder="Enter value"></input>
      </Wrapper>
    </div>
  )
}

export default App
