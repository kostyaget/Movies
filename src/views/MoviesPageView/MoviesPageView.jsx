import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import usePrevious from 'hooks/usePrevious';
import { fetchSearchMovie } from 'services/moviesApi';
import * as notify from 'utils/notifications';
import PageHeading from 'components/PageHeading';
import SearchForm from 'components/SearchForm';
import MoviesGallery from 'components/MoviesGallery';
import Loader from 'components/Loader';
import {
  LoaderWrapper,
  TextWrapper,
  WelcomeText,
} from './MoviesPageView.styled';

export default function MoviesPageView() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('query'));
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const prevSearchQuery = usePrevious(searchQuery);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    setIsLoading(true);

    fetchSearchMovie(searchQuery)
      .then(response => {
        const { results, total_results } = response.data;

        if (total_results === 0) {
          notify.showIncorrectQuery(searchQuery);
          moviesReset();
          return;
        }

        notify.showSearchResult(total_results);
        setMovies(results);
      })
      .catch(error => {
        return notify.showQueryError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchQuery]);

  const moviesReset = () => {
    setMovies([]);
  };

  const onFormSubmit = searchQuery => {
    if (searchQuery === '') {
      notify.showSearchQueryAbsence();
      return;
    }

    if (prevSearchQuery === searchQuery) {
      notify.showSearchQueryRepeat(searchQuery);
      return;
    }

    setSearchParams({ query: searchQuery });
    setSearchQuery(searchQuery);
    moviesReset();
  };

  return (
    <>
      <PageHeading text="Movies" />
      <SearchForm onSubmit={onFormSubmit} />
      {movies.length > 0 ? (
        <MoviesGallery moviesSet={movies} />
      ) : !isLoading ? (
        <TextWrapper>
          <WelcomeText>
            All filmmakers are waiting for your search query to show movies.
          </WelcomeText>
        </TextWrapper>
      ) : (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
    </>
  );
}
