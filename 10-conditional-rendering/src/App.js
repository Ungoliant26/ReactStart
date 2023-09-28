import './App.css'
import PetInfo from './components/PetInfo'

function App() {
  return (
    <div className="App">
      <PetInfo animal="dog" old={3} feature="young" hasPet />
      <PetInfo animal="cat" old={15} feature="relict" hasPet={false} />
    </div>
  )
}

export default App
