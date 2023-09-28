function PetInfo(props) {
  const { animal, old, feature, hasPet } = props

  return hasPet ? (
    <h1>{`My ${animal} is ${old} years old. She is ${feature}`}</h1>
  ) : (
    <h2>I don't have an animal</h2>
  )
}

export default PetInfo
