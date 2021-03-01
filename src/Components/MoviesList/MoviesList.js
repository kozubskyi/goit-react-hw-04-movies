import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MoviesList.scss';
import routes from '../../routes';

const MoviesList = ({ movies, location }) => {
  return (
    <ul className="movies__list">
      {movies.map(movie => {
        return (
          <li className="movies__item" key={movie.id}>
            <Link
              to={{
                pathname: `${routes.movies}/${movie.id}`,
                state: { from: location },
              }}
            >
              {movie.title || movie.original_name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      original_name: PropTypes.string,
    }).isRequired,
  ).isRequired,

  location: PropTypes.shape().isRequired,
};

export default withRouter(MoviesList);
