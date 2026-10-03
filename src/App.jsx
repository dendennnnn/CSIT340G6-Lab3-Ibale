const App = () => {
  const course = 'CSIT340'

  const part1 = 'CSIT340'
  const exercises1 = 3

  const part2 = 'CSIT321'
  const exercises2 = 3

  const part3 = 'CSIT327'
  const exercises3 = 3

  return (
    <div>
      <h1>{course}</h1>

      <p>
        {part1} {exercises1}
      </p>

      <p>
        {part2} {exercises2}
      </p>

      <p>
        {part3} {exercises3}
      </p>

      <p>
        Number of units {exercises1 + exercises2 + exercises3}
      </p>
    </div>
  )
}

export default App