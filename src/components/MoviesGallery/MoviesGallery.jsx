import PropTypes from 'prop-types';
import MovieCard from 'components/MovieCard';
import { MoviesList } from './MoviesGallery.styled';

export default function MoviesGallery({ moviesSet }) {
  return (
    <MoviesList>
      {moviesSet.map(({ id, ...props }) => (
        <MovieCard key={id} id={id} {...props} />
      ))}
    </MoviesList>
  );
}

MoviesGallery.propTypes = {
  moviesSet: PropTypes.array.isRequired,
};
