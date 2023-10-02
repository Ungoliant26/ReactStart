function Button1({ onClick }) {
  return <button onClick={onClick}>Click here +1</button>
}

function Button2({ onClick }) {
  return (
    <button onClick={onClick} disabled={true}>
      Click here +10
    </button>
  )
}

function Button3({ onClick }) {
  return (
    <button onClick={onClick} disabled>
      Click here +100
    </button>
  )
}

function Button4({ onClick }) {
  return (
    <button onClick={onClick} disabled>
      Click here +1000
    </button>
  )
}

function ButtonClear({ onClick }) {
  return (
    <button className="zero" onClick={onClick}>
      Reset to 0
    </button>
  )
}

export { Button1 }
export { Button2 }
export { Button3 }
export { Button4 }
export { ButtonClear }
