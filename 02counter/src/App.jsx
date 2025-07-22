import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    console.log("VAlue added", Math.random());
    //counter = counter +1;
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const removevalue = () => {
    console.log("VAlue added", Math.random());
    //counter = counter +1;
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value :{counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br></br>
      <button onClick={removevalue}>Decrease value</button>
    </>
  );
}

export default App;
