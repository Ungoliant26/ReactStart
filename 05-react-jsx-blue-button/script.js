const App = ({ initialButtonText, initialClassesList }) => {
  const [buttonText, setButtonText] = React.useState(initialButtonText)
  const [classesList, setClassesList] = React.useState(initialClassesList)

  const onButtonClick = () => {
    setButtonText('Hello from React')
    setClassesList('blue-button')
  }

  return (
    <div className="app">
      <button className={classesList} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  )
}

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(<App initialButtonText="Click me Now!" initialClassesList="" />)
