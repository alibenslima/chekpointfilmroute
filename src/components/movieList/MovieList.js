import AddMovie from "../addMovie/AddMovie";
import MovieCard from "../movieCard/MovieCard";
import "./MovieList.css";
const MovieList = ({ movie, handelDelete, handleAdd }) => {
  return (
    <div>
      <div className="movielist">
        {movie.map((movie) => (
          <MovieCard key={movie.id} movie={movie} handelDelete={handelDelete} />
        ))}
      </div>
      <div>
        <AddMovie />
      </div>
    </div>
  );
};

export default MovieList;
