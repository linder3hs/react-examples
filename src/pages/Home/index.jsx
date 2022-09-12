import { useState, useEffect } from "react";
import { listMovies } from "../../service";
import { Card } from "../../components";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const { ok, data } = await listMovies();

    if (!ok) return;

    setMovies(data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <div className="container">
        <h1>Lista de Personajes</h1>
      </div>
      <div className="container__movies">
        {movies.length > 0 ? (
          movies.map((movie, index) => <Card movie={movie} key={index} />)
        ) : (
          <div>
            <h4>Aun no hay peliculas</h4>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
