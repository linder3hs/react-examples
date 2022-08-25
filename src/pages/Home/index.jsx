import { useState, useEffect } from "react";
import { listMovies } from "../../service";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const {data} = await listMovies();
    setMovies(data);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <div className="container">
        <h1>Lista de Películas</h1>
      </div>
      <div className="container__movies">
        {
          movies.length > 0 && movies.map((movie, index) => (
            <div className="card" key={index}>
              <img src={movie.image} />
              <div className="container__detail">
                <h4>{movie.title}</h4>
                <p className="text__description">
                 {movie.description}
                </p>
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default Home;
