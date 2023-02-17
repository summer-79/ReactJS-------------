import { useState, useEffect } from "react";

function App() {
  const [value, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("all is rendered");
  useEffect(() => {
    console.log("only one render");
  }, []);
  return (
    <div className="App">
      <h1>{value}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
