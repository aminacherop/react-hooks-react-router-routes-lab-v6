import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/movies") // <-- change to your correct port
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setMovies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {loading ? (
          <p>Loading movies...</p>
        ) : (
          <div className="movie-list">
            {movies.length === 0 ? (
              <p>No movies found.</p>
            ) : (
              movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))
            )}
          </div>
        )}
      </main>
    </>
  );
}

export default Home;
