import { useState, useEffect } from "react";

function App() {
  const [value, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);

  const [keyword, setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);

  console.log("all is rendered");
  useEffect(() => {
    console.log("CALL THE API ... only one render");
  }, []);
  useEffect(() => {
    if (keyword != "" && keyword.length > 5) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);

  return (
    <div className="App">
      <input value={keyword} onChange={onChange} placeholder="Search here..." />
      <h1>{value}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
