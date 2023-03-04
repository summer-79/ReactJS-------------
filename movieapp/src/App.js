import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?sort_by=year&minimum_rating=8.5"
    );
    const json = await response.json();
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
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        movie.map((item) => (
          <div key={item.id}>
            <img src={item.medium_cover_image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <ul>
              {item.genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
