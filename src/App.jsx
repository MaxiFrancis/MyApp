import { useState } from "react";
import About from "./components/About";
import Info from "./components/Info";
import Interests from "./components/Interests";
import Social from "./components/Social";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <Info />
      <About />
      <Interests />
      <Social />
    </div>
  );
}

export default App;
