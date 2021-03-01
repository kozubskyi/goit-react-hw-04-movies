import { useState } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MoviesPage.scss';
import { getSeacrhedMovies } from '../../services/services';
import MoviesList from '../../Components/MoviesList/MoviesList';

const MoviesPage = ({ match }) => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleInputValue = event => setQuery(event.target.value);

  const handleFormSubmit = event => {
    event.preventDefault();
    getSeacrhedMovies(query).then(movies => {
      // console.log('movies', movies);
      setMovies(movies);
    });
  };

  //! Если вешать Link на кнопку сабмита формы, то форма не сабмитится
  return (
    <>
      <form className="MoviesPage__form" onSubmit={handleFormSubmit}>
        <input type="search" autoFocus onChange={handleInputValue} />
        {/* <Link
          to={{
            pathname: match.path,
            search: `?query=${query}`,
          }}
        > */}
        <button type="submit">Seacrh</button>
        {/* </Link> */}
      </form>
      <Route path={`${match.path}`} render={() => <MoviesList movies={movies} />} />
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
