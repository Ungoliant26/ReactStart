import UserContext from '../context/UserContext'
import { useContext } from 'react'

function ChangeUser() {
  const { userName, changeUserName } = useContext(UserContext)

  return (
    <button
      onClick={() => changeUserName(userName === 'Kirill' ? 'Kane' : 'Kirill')}
    >
      Change Man
    </button>
  )
}

export default ChangeUser
