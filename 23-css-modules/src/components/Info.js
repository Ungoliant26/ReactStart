import './Info.css'
import styles from './Info.module.css'

function Info() {
  return (
    <div className={styles.info}>
      <h1>Hello from my PC</h1>
      <h2>Hello from my Pekarniya</h2>
      <button className="my-knopka">Push!</button>
      <input placeholder="Write..."></input>
    </div>
  )
}

export default Info
