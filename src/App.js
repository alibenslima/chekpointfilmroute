import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Filter from "./components/filter/Filter";
import MovieDetails from "./components/movieDetails/MovieDetails";
import MovieList from "./components/movieList/MovieList";
import { moviedata } from "./Data";

function App() {
  const [movies, setMovies] = useState(moviedata);
  const [name, setName] = useState("");
  const [rate, setRate] = useState(0);
  const handelDelete = (id) => {
    setMovies(movies.filter((el) => el.id !== id));
  };
  const handleAdd = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const ratingChanged = (rate) => {
    setRate(rate);
  };
  return (
    <div className="App">
      <Filter
        handleChange={handleChange}
        ratingChanged={ratingChanged}
        name={name}
      />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MovieList
                movie={movies.filter(
                  (elt) =>
                    elt.title
                      .trim()
                      .toUpperCase()
                      .includes(name.trim().toUpperCase()) && elt.rate >= rate
                )}
                handelDelete={handelDelete}
                handleAdd={handleAdd}
              />
            }
          />

          <Route
            path="/Details/:id"
            element={<MovieDetails movie={movies} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
