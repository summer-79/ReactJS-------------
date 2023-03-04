import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?sort_by=year&minimum_rating=8.5"
    );
    const json = response.json();
    setMovie(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movie);
  return (
    <div>
      <h1>Movie App</h1>
      <hr />
      {loading ? <strong>Loading...</strong> : null}
    </div>
  );
}

export default App;
