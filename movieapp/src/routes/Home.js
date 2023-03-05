import { useState, useEffect } from "react";
import Movie from "../component/Movie";
import styles from "./Home.module.css";
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
    <div className={styles.container}>
      <h1>Movie App</h1>
      <hr />
      {loading ? (
        <div className={styles.loader}>
          <strong>Loading...</strong>
        </div>
      ) : (
        <div className={styles.movies}>
          {movie.map((item) => (
            <Movie
              key={item.id}
              id={item.id}
              coverImg={item.medium_cover_image}
              title={item.title}
              year={item.year}
              summary={item.summary}
              genres={item.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;
