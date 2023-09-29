import { useState } from 'react'
import generateRandomNum from '../utilities/generateRandomNum'

function RandomNumber() {
  console.log('rendered')
  const maxNum = 10000
  const [randomNum, setRandomNum] = useState(generateRandomNum(maxNum))
  const changeRandomNum = () => {
    setRandomNum(generateRandomNum(maxNum))
  }

  return (
    <div>
      <h1>{randomNum}</h1>
      <button onClick={changeRandomNum}>Random number</button>
    </div>
  )
}

export default RandomNumber
