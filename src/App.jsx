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
      <Part name={props.parts[0].name} units={props.parts[0].units} />
      <Part name={props.parts[1].name} units={props.parts[1].units} />
      <Part name={props.parts[2].name} units={props.parts[2].units} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of units {props.parts[0].units + props.parts[1].units + props.parts[2].units}
    </p>
  )
}

const Course = (props) => {
  return (
    <div>
      <Header course={props.course.name} />
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts} />
    </div>
  )
}

const Footer = (props) => {
  return (
    <p>
      {props.name} - {props.course} - {props.section}
    </p>
  )
}

const App = () => {
  const course = {
    name: 'CSIT340',
    parts: [
      { name: 'CSIT340', units: 3 },
      { name: 'CSIT321', units: 3 },
      { name: 'CSIT327', units: 3 }
    ]
  }

  const studentName = 'Danielle Ben Ibale'
  const courseCode = 'CSIT340'
  const section = 'G6'

  return (
    <div>
      <Course course={course} />
      <Footer
        name={studentName}
        course={courseCode}
        section={section}
      />
    </div>
  )
}

export default App