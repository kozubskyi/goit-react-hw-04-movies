import axios from 'axios';

const basicUrl = 'https://api.themoviedb.org/3/';
const apiKey = '6da14ee54f4b325908f75ac46dfb1018';

const getTrendMovies = () => {
  return axios.get(`${basicUrl}trending/movie/day?api_key=${apiKey}`).then(response => response.data.results);
};

const getSeacrhedMovies = query => {
  return axios.get(`${basicUrl}search/movie?query=${query}&api_key=${apiKey}`).then(response => response.data.results);
};

const getMovie = movieId => {
  return axios.get(`${basicUrl}movie/${movieId}?api_key=${apiKey}`).then(response => response.data);
};

const getMovieCast = movieId => {
  return axios.get(`${basicUrl}movie/${movieId}/credits?api_key=${apiKey}`).then(response => response.data.cast);
};

const getMovieReviews = movieId => {
  return axios.get(`${basicUrl}movie/${movieId}/reviews?api_key=${apiKey}`).then(response => response.data.results);
};

export { getTrendMovies, getSeacrhedMovies, getMovie, getMovieCast, getMovieReviews };
