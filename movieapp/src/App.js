import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/ReactJS-------------" element={<Home />}></Route>
        <Route
          path="/movie/ReactJS-------------/:id"
          element={<Detail />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
