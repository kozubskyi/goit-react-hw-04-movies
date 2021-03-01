import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './CastList.scss';
import { getMovieCast } from '../../services/services';

const CastList = ({ match }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCast(match.params.movieId).then(cast => {
      // console.log('cast', cast);
      setCast(cast);
    });
  }, [match]);

  return (
    <ul className="CastList">
      {cast.map(actor => {
        return (
          <li className="actor-card" key={actor.id}>
            <img
              className="actor-photo"
              src={actor.profile_path && `https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={actor.name}
              width="150"
              height="225"
            />
            <div className="actor-info">
              <h3 className="actor-name">{actor.name}</h3>
              <p className="actor-character">Character: {actor.character}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

CastList.defaultProps = {
  cast: [],
};

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      profile_path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string,
    }).isRequired,
  ),

  match: PropTypes.shape({
    params: PropTypes.shape({
      movieId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CastList;
