import "./App.css";
import { useState } from "react";
// import Button from "./components/Button";
function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2  rounded-2xl">
            {/* <Button defColor="pink" /> */}
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 rounded-full text-white shadow-lg bg-white"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 rounded-full text-white shadow-lg bg-white"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 rounded-full text-black shadow-lg bg-white"
              style={{ backgroundColor: "yellow" }}
            >
              yellow
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 rounded-full text-white shadow-lg bg-white"
              style={{ backgroundColor: "Blue" }}
            >
              Blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;