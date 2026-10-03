const Part = (props) => {
  return (
    <p>
      {props.name} {props.units}
    </p>
  )
}

const App = () => {
  const course = 'CSIT340'

  const part1 = 'CSIT340'
  const units1 = 3

  const part2 = 'CSIT321'
  const units2 = 3

  const part3 = 'CSIT327'
  const units3 = 3

  return (
    <div>
      <h1>{course}</h1>

      <Part name={part1} units={units1} />
      <Part name={part2} units={units2} />
      <Part name={part3} units={units3} />

      <p>
        Number of units {units1 + units2 + units3}
      </p>
    </div>
  )
}

export default App