import { useState, useEffect } from "react";
import Movie from "../component/Movie";
function Home() {
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
          <Movie
            key={item.id}
            coverImg={item.medium_cover_image}
            title={item.title}
            summary={item.summary}
            genres={item.genres}
          />
        ))
      )}
    </div>
  );
}
export default Home;