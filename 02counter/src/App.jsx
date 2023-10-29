import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setcounter] = useState(0);

  // let counter = 5;
  const addValue = () => {
    if (counter < 20) {
      setcounter(counter + 1);
      console.log("value incremented:", counter);
    } else {
      console.log("value cant be  incremented above 20:", counter);
    }
  };
  const subValue = () => {
    if (counter > 0) {
      setcounter(counter - 1);
      console.log("value decremented:", counter);
    } else {
      console.log("value cant be  decremented below 0:", counter);
    }
  };
  return (
    <>
      <h1>Chai Aaur react</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={subValue}>SUB value</button>
    </>
  );
}

export default App;
