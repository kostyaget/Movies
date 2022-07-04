import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import {
  MovieItem,
  MovieLink,
  MovieImg,
  InfoWrapper,
  MovieName,
  MovieRelease,
  MovieRating,
  VoteNum,
} from './MovieCard.styled';
import defaultPoster from '../../images/noPoster.png';

export default function MovieCard({
  id,
  poster_path,
  release_date,
  title,
  vote_average,
}) {
  const location = useLocation();

  const releaseDate = new Date(release_date);

  return (
    <MovieItem id={id}>
      <MovieLink to={`/movies/${id}`} state={{ from: location }}>
        <MovieImg
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : defaultPoster
          }
          alt={title}
        />
        <InfoWrapper>
          <MovieName>
            {title}
          </MovieName>
          <MovieRelease>
            Release date:
            <br />
            {release_date !== 0 ? releaseDate.toLocaleDateString() : 'unknown'}
          </MovieRelease>
          <MovieRating>
            IMDb Rating:
            <VoteNum>{vote_average !== 0 ? vote_average : 'unrated'}</VoteNum>
          </MovieRating>
        </InfoWrapper>
      </MovieLink>
    </MovieItem>
  );
}

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string,
  release_date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
};
