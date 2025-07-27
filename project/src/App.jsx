import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-2 shadow-2xl bg-white px-3 py-2 rounded-lg">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 rounded-full test-white shadow-2xs hover:shadow-2xl"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 rounded-full test-white shadow-2xs hover:shadow-2xl"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 rounded-full test-white shadow-2xs hover:shadow-2xl"
              style={{ backgroundColor: "Blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("olive")}
              className="outline-none px-4 rounded-full test-white shadow-2xs hover:shadow-2xl"
              style={{ backgroundColor: "olive" }}
            >
              Olive
            </button>
            <button
              onClick={() => setColor("pink")}
              className="outline-none px-4 rounded-full test-white shadow-2xs hover:shadow-2xl"
              style={{ backgroundColor: "Pink" }}
            >
              Pink
            </button>
            <button
              onClick={() => setColor("teal")}
              className="outline-none px-4 rounded-full test-white shadow-2xs hover:shadow-2xl"
              style={{ backgroundColor: "Teal" }}
            >
              Teal
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
