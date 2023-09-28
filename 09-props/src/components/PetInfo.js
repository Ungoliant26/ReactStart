function PetInfo(props) {
  const { animal, old, feature } = props

  return (
    <h1>
      My {animal} is {old} years old. She is {feature}
    </h1>
  )
}

export default PetInfo
