import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './HomePage.scss';
import { getTrendMovies } from '../../services/services';
import MoviesList from '../../Components/MoviesList/MoviesList';

//* HomePage Hook
const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendMovies().then(movies => {
      // console.log('movies', movies);
      setMovies(movies);
    });
  }, []);

  return (
    <div className="HomePage">
      <h1>Trending Today</h1>
      <MoviesList movies={movies} />
    </div>
  );
};

HomePage.defaultProps = {
  movies: [],
};

HomePage.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape().isRequired),
};

export default HomePage;
