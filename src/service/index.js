import axios from "axios";

const url = "https://rickandmortyapi.com/api/character";

export const listMovies = async () => {
  try {
    const response = await axios.get(url);

    const { results } = response.data;

    return {
      ok: true,
      data: results,
    };
  } catch (error) {
    return {
      ok: false,
      error: error.message,
    };
  }
};
