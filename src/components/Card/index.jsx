const Card = ({ movie }) => {
  return (
    <div className="card">
      <img src={movie.image} />
      <div className="container__detail">
        <h4>{movie.name}</h4>
        <p className="text__description">
          Especie: <strong>{movie.species}</strong>
        </p>
      </div>
    </div>
  );
};

export default Card;
