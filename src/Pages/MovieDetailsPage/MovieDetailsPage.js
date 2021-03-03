import { useState, useEffect } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MovieDetailsPage.scss';
import { getMovie } from '../../services/services';
// import routes from '../../routes';
import CastList from '../../Components/CastList/CastList';
import ReviewsList from '../../Components/ReviewsList/ReviewsList';

//* MovieDetailsPage Hook
const MovieDetailsPage = ({ match, history, location }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [score, setScore] = useState('');
  const [genres, setGenres] = useState([]);
  const [image, setImage] = useState('');

  useEffect(() => {
    getMovie(match.params.movieId).then(movie => {
      // console.log('movie', movie);
      const { title, original_name, overview, vote_average, genres, poster_path, backdrop_path } = movie;
      setTitle(title || original_name);
      setDescription(overview);
      setScore(vote_average);
      setGenres(genres);
      setImage((poster_path || backdrop_path) && `https://image.tmdb.org/t/p/w500${poster_path || backdrop_path}`);
    });
  }, [match]);

  const handleBackButtonClick = () => history.push(location?.state?.from);

  return (
    <div className="MovieDetailsPage">
      <button type="button" className="back-btn" onClick={handleBackButtonClick}>
        Back
      </button>
      <div className="main-info">
        <div className="image">
          <img src={image} alt={`Poster of ${title}`} width="300" />
        </div>
        <div className="description">
          <h1>{title}</h1>
          <p>User score: {score * 10}%</p>
          <h2>Overview</h2>
          <p>{description}</p>
          <h2>Genres</h2>
          <ul className="genres-list">
            {genres.map(genre => {
              return (
                <li className="genres-item" key={genre.id}>
                  {genre.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="additional-info">
        <h2 className="additional-info__title">Additional information</h2>
        <ul className="additional-info__list">
          <li className="additional-info__item">
            <NavLink
              to={{
                pathname: `${match.url}/cast`,
                state: { from: location.state.from },
              }}
            >
              Cast
            </NavLink>
          </li>
          <li className="additional-info__item">
            <NavLink
              to={{
                pathname: `${match.url}/reviews`,
                state: { from: location.state.from },
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <Route path={`${match.path}/cast`} component={CastList} />
        <Route path={`${match.path}/reviews`} component={ReviewsList} />
      </div>
    </div>
  );
};

MovieDetailsPage.defaultProps = {
  title: '',
  description: '',
  score: '',
  genres: [],
  image: '',
};

MovieDetailsPage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  score: PropTypes.string,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
  image: PropTypes.string,

  match: PropTypes.shape({
    params: PropTypes.shape({
      movieId: PropTypes.string.isRequired,
    }).isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.shape().isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      from: PropTypes.shape({
        pathname: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default withRouter(MovieDetailsPage);
