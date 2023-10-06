import './App.css'
import Info from './components/Info'

function App() {
  return (
    <div className="App">
      <Info />
      <div className="info">
        <h1>App component front</h1>
        <h2>Hello from my Pekarniya</h2>
        <button className="my-knopka">App component knopka</button>
        <input placeholder="Read..."></input>
      </div>
    </div>
  )
}

export default App
