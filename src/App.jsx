import "./App.css";
// import ToDo from "./ToDo";
// import Actors from "./Actors";
import Singers from "./Singers";
import Library from "./Library";

function App() {
  // const time = 50;

  // const actors = ["Bappa", "Omar", "Salman", "SRK"];

  const books = [
    { id: 1, name: "Physics", price: 250 },
    { id: 2, name: "Chemistry", price: 350 },
    { id: 3, name: "Math", price: 255 },
    { id: 4, name: "Biology", price: 290 },
  ];

  const singers = [
    { id: 1, name: "Eminem", age: 50 },
    { id: 2, name: "50", age: 48 },
    { id: 3, name: "Snoop", age: 55 },
  ];

  return (
    <>
      <h1>React Core Components</h1>
      <Library books={books}></Library>
      {/* 
      {actors.map((actor) => (
        <Actors actor={actor}></Actors>
      ))} */}

      {singers.map((singer) => (
        <Singers key={singer.id} singer={singer}></Singers>
      ))}

      {/* <ToDo task="Learn React" isDone={true} time={time}></ToDo>
      <ToDo task="Revise JS" isDone={false}></ToDo>
      <ToDo task="Take a showr" isDone={false}></ToDo> */}

      {/* <Sports></Sports>
      <Student></Student>
      <Student></Student>
      <Person></Person>
      <Developer name="Mozumdar" tech="JS"></Developer>
      <Developer name="Rajon" tech="Python"></Developer>
      <Developer name="Shabana" tech="Java"></Developer>
      <Player name="tamim" runs="5000"></Player>
      <Player name="shakib"></Player> */}
    </>
  );
}

// const {name, runs} = {name: 'tamim', runs: '5000'}

function Player({ name, runs = 0 }) {
  // console.log(props)
  return (
    <div className="student">
      <h3>Name: {name}</h3>
      <p>Runs: {runs}</p>
    </div>
  );
}

function Sports() {
  const age = 17;
  return <div>Cricket's age is {age} years old</div>;
}

function Student() {
  return (
    <div className="student">
      <p>Name: </p>
      <p>Dept: </p>
    </div>
  );
}

function Person() {
  const age = 17;
  const name = "Jolil";

  const personStyle = {
    color: "red",
    fontSize: "40px",
    textAlign: "right",
  };

  return (
    <p id="" title="tooltip" style={personStyle}>
      {" "}
      I am a person: {name} {age}
    </p>
  );
}

// const { name, tech } = { name: "Mozumder", tech: "JS" };

function Developer(props) {
  console.log(props);
  return (
    <div
      style={{
        border: "2px solid green",
        borderRadius: "20px",
      }}
    >
      <h3>Developer: {props.name}</h3>
      <p>Technology: {props.tech} </p>
    </div>
  );
}

export default App;
