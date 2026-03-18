import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import StarRating from "./StarRating";
const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];
const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

function NavBar({ children }) {
  return <div className="nav">{children}</div>;
}
function Search() {
  const [query, setQuery] = useState("");
  return (
    <input
      className="search"
      type="text"
      placeholder="Search Movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
function Logo() {
  return <h3>🍿 usePopcorn</h3>;
}
function NumResults({ movies }) {
  return <p>Found {movies.length} results</p>;
}
function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="movies-lists">
      <button
        className="button-toggle"
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? "-" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}
function MovieList({ movies }) {
  return (
    <ul>
      {movies.map((movie) => (
        <li className="movie-details" key={movie.imdbID}>
          <img
            src={movie.Poster}
            alt={movie.imdbID}
            height={"100px"}
            weight={"100px"}
          />
          <div>
            <h3 className="title">{movie.Title}</h3>
            <h4 className="title">{movie.Year}</h4>
          </div>
        </li>
      ))}
    </ul>
  );
}
function WatchedSummary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  return (
    <div className="summary">
      <h3 className="title">Movies you watched</h3>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}
function WatchedList({ watched }) {
  return (
    <ul>
      {watched.map((movie) => (
        <li className="watched-lists" key={movie.imdbID}>
          <img
            src={movie.Poster}
            alt={movie.imdbID}
            height={"100px"}
            weight={"100px"}
          />
          <div>
            <h3 className="title">{movie.Title}</h3>
            <div className="watched-rating-details">
              <p className="title">
                <span>🐌</span>
                {movie.imdbRating}
              </p>
              <p className="title">
                <span>🍔</span>
                {movie.userRating}
              </p>
              <p className="title">
                <span>🤩</span>
                {movie.runtime} min
              </p>

            </div>
            <StarRating maxRating={10}/>
          </div>
        </li>
      ))}
    </ul>
  );
}
function Main({ children }) {
  return <div className="main">{children}</div>;
}
function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  return (
    <div className="App">
      <NavBar>
        <Logo />
        <Search />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box movies={movies}>
          <MovieList movies={movies} />
        </Box>
        <Box watched={watched}>
          <WatchedSummary watched={watched} />
          <WatchedList watched={watched} />
        </Box>
      </Main>
    </div>
  );
}

export default App;
