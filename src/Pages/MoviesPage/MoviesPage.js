import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './MoviesPage.scss';
import { getSeacrhedMovies } from '../../services/services';
import MoviesList from '../../Components/MoviesList/MoviesList';

const MoviesPage = ({ history, location }) => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  //* componentDidMount
  useEffect(() => {
    location.search &&
      getSeacrhedMovies(location.search.substr(7)).then(movies => {
        // console.log('movies', movies);
        setMovies(movies);
      });
  }, [location]);

  const handleInputValue = event => setQuery(event.target.value);

  const handleFormSubmit = event => {
    event.preventDefault();
    query && history.push({ search: `query=${query}` });
  };

  return (
    <>
      <form className="MoviesPage__form" onSubmit={handleFormSubmit}>
        <input type="search" autoFocus onChange={handleInputValue} />
        <button type="submit">Seacrh</button>
      </form>
      <MoviesList movies={movies} />
    </>
  );
};

MoviesPage.defaultProps = {
  query: '',
  movies: [],
};

MoviesPage.propTypes = {
  query: PropTypes.string,
  movies: PropTypes.arrayOf(PropTypes.shape().isRequired),

  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default MoviesPage;
