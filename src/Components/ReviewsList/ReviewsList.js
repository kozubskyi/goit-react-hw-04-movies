import { useState, useEffect } from 'react';
import { getMovieReviews } from '../../services/services';
import PropTypes from 'prop-types';

const ReviewsList = ({ match }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(match.params.movieId).then(reviews => {
      // console.log('reviews', reviews);
      setReviews(reviews);
    });
  }, [match]);

  return reviews.length === 0 ? (
    <p className="no-reviews-text">We don't have any reviews for this movie.</p>
  ) : (
    <ul className="ReviewsList">
      {reviews.map(review => {
        return (
          <li key={review.id}>
            <h3 className="review-author">{review.author}</h3>
            <p className="review-text">{review.content}</p>
          </li>
        );
      })}
    </ul>
  );
};

ReviewsList.defaulrProps = {
  reviews: [],
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),

  match: PropTypes.shape({
    params: PropTypes.shape({
      movieId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ReviewsList;
