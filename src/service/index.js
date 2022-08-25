const url = "http://localhost:6003/"

export const listMovies = async () => {
  try {
    const movies = await fetch(url);

    const data = await movies.json();

    return data
  } catch (error) {
    return error.message;
  }
}
