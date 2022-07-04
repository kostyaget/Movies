import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchMovieCredits } from 'services/moviesApi';
import ActorCard from 'components/ActorCard';
import ButtonLink from 'components/ButtonLink';
import Loader from 'components/Loader';
import {
  LoaderWrapper,
  CastList,
  NoCastText,
  BtnWrapper,
} from './CastView.styled';

export default function CastView() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    fetchMovieCredits(movieId)
      .then(response => setCast(response.data.cast))
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  const fromPage = location.state?.from ?? '/';

  const reducedCast = [...cast].slice(0, 10);

  return !isLoading ? (
    cast.length > 0 ? (
      <>
        <CastList>
          {reducedCast.map(({ id, ...props }) => (
            <ActorCard key={id} {...props} />
          ))}
        </CastList>
        <BtnWrapper>
          <ButtonLink
            to={`/movies/${movieId}`}
            text="Close"
            state={{ from: fromPage }}
          />
        </BtnWrapper>
      </>
    ) : (
      <>
        <NoCastText>Actors cast is absent</NoCastText>
        <BtnWrapper>
          <ButtonLink
            to={`/movies/${movieId}`}
            text="Close"
            state={{ from: fromPage }}
          />
        </BtnWrapper>
      </>
    )
  ) : (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  );
}
