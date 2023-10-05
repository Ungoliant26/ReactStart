function Wrapper(props) {
  const wrapStyle = {
    backgroundColor: props.color,
    width: '250px',
    padding: '20px',
    margin: '20px auto',
  }
  return <div style={wrapStyle}>{props.children}</div>
}

export default Wrapper
