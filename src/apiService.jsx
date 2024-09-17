import axios from 'axios';


const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});


export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';


const fetchPopularMovies = async () => {
  try {
    const response = await api.get("/movie/popular?api_key=3a1475ec3551ecc5efc1192090e961e8");
    return response.data.results;
  } catch (error) {
    console.error('Erro ao buscar filmes populares', error);
    throw error;
  }
};

export default fetchPopularMovies;
