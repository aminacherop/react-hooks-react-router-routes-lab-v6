import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

function Directors() {
  const [directors, setDirectors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((response) => response.json())
      .then((data) => {
        setDirectors(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching directors:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {loading ? (
          <p>Loading directors...</p>
        ) : (
          directors.map((director) => (
            <article key={director.id}>
              <h2>{director.name}</h2>
              <ul>
                {director.movies.map((movie, index) => (
                  <li key={index}>{movie}</li>
                ))}
              
                

                

              </ul>
            </article>
          ))
        )}
      </main>
    </>
  );
}

export default Directors;
