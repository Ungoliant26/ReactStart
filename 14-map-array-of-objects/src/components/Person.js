function Person(props) {
  const { firstName, lastName, email, img } = props

  return (
    <div className="card">
      <img src={img} />
      <h3>{`Имя: ${firstName}`}</h3>
      <h3>{`Фамилия: ${lastName}`}</h3>
      <h4>{email}</h4>
    </div>
  )
}

export default Person
