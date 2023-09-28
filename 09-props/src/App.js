import './App.css'
import PetInfo from './components/PetInfo'

function App() {
  return (
    <div className="App">
      <PetInfo animal="dog" old={3} feature="young" />
      <PetInfo animal="cat" old={15} feature="relict" />
    </div>
  )
}

export default App
