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
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} partName={part1} excersizeNumber={exercises1} />
      <Content
      partName={part1}
              parNumber={exercises1}
        part2name={part2}
        parte2number={exercises2}
        part3name={part3}
        parte3number={exercises3}
      />
      <Total
        excersizeNumber1={exercises1}
        excersizeNumber2={exercises2}
        excersizeNumber3={exercises3}
      />
    </div>
  );
};

export default App;
