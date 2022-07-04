import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/moviesApi';
import PageHeading from 'components/PageHeading';
import MoviesGallery from 'components/MoviesGallery';
import { TextWrapper, NoMovieText } from './HomePageView.styled';

export default function HomePageView() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchTrendingMovies().then(response => setMovies(response.data.results));
  }, []);

  return (
    <>
      <PageHeading text="Trending today" />
      {movies && <MoviesGallery moviesSet={movies} />}
      {movies && movies.length === 0 && (
        <TextWrapper>
          <NoMovieText>
            All filmmakers are on holiday. <br /> There are no trending movies
            for now.
          </NoMovieText>
        </TextWrapper>
      )}
    </>
  );
}
