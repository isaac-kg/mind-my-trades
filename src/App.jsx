import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-12">
      <button className="bg-blue-400 text-white px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-300 ">Get Started</button>
      <div className="p-4 bg-red-400 rounded-xl mt-12">
        Lorem ipsum dolor sit,
        amet consectetur adipisicing elit. Doloremque nobis placeat vitae.
      </div>
    </div>
  );
}

export default App;
