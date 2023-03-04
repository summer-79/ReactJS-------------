function Movie({ item }) {
  return (
    <div>
      <img src={item.medium_cover_image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.summary}</p>
      <ul>
        {item.genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}
export default Movie;
