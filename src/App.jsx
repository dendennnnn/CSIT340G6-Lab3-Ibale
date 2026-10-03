const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.units}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.part1} units={props.units1} />
      <Part name={props.part2} units={props.units2} />
      <Part name={props.part3} units={props.units3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of units {props.units1 + props.units2 + props.units3}
    </p>
  )
}

const Course = (props) => {
  return (
    <div>
      <Header course={props.course} />
      <Content
        part1={props.part1}
        units1={props.units1}
        part2={props.part2}
        units2={props.units2}
        part3={props.part3}
        units3={props.units3}
      />
      <Total
        units1={props.units1}
        units2={props.units2}
        units3={props.units3}
      />
    </div>
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
    <Course
      course={course}
      part1={part1}
      units1={units1}
      part2={part2}
      units2={units2}
      part3={part3}
      units3={units3}
    />
  )
}

export default App