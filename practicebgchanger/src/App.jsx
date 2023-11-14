import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("rgb(103,188,250)");
  const R = Math.floor(Math.random() * 255);
  const G = Math.floor(Math.random() * 255);
  const B = Math.floor(Math.random() * 255);
  return (
    <>
      <div
        className="w-full h-screen flex  justify-center items-center "
        style={{ backgroundColor: color }}
      >
        <div>
          <button
            onClick={() => setColor(`rgb(${R},${G},${B})`)}
            className="text-black  h-20  border-2 "
            style={{ backgroundColor: "white" }}
          >
            <p>
              The BackgroundColor is rgb({R},{G},{B})
            </p>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
