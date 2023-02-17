import { useState, useEffect } from "react";

function App() {
  const [value, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);

  const [keyword, setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);

  console.log("all is rendered");
  useEffect(() => {
    console.log("I run only once");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("I run when 'keyword' changes", keyword);
    }
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'value' changes", value);
  }, [value]);
  useEffect(() => {
    console.log(
      "I run when 'keyword' & 'value' changes(둘 중 하나라도 바뀌면 실행)"
    );
  }, [keyword, value]);

  return (
    <div className="App">
      <input value={keyword} onChange={onChange} placeholder="Search here..." />
      <h1>{value}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
