const Part = (props) => {
  return (
    <p>
      {props.partName} {props.excersizeNumber}
    </p>
  );
};

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Content = (props) => {
  return (
    <>
      <Part partName={props.partName} excersizeNumber={props.parNumber} />
      <Part partName={props.part2name} excersizeNumber={props.parte2number} />
      <Part partName={props.part3name} excersizeNumber={props.parte3number} />
    </>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises{" "}
      {props.excersizeNumber1 + props.excersizeNumber2 + props.excersizeNumber3}
    </p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header course={course} partName={part1} excersizeNumber={course} />
      <Content
        partName={part1.name}
        parNumber={part1.exercises}
        part2name={part2.name}
        parte2number={part2.exercises}
        part3name={part3.name}
        parte3number={part3.exercises}
      />
      <Total
        excersizeNumber1={part1.exercises}
        excersizeNumber2={part2.exercises}
        excersizeNumber3={part3.exercises}
      />
    </div>
  );
};

export default App;
