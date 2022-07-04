import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchMovieReviews } from 'services/moviesApi';
import ReviewCard from 'components/ReviewCard';
import ButtonLink from 'components/ButtonLink';
import Loader from 'components/Loader';
import {
  LoaderWrapper,
  ReviewsList,
  NoReviewsText,
  BtnWrapper,
} from './ReviewsView.styled';

export default function ReviewsView() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    fetchMovieReviews(movieId)
      .then(response => setReviews(response.data.results))
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  const fromPage = location.state?.from ?? '/';

  return !isLoading ? (
    reviews.length > 0 ? (
      <>
        <ReviewsList>
          {reviews.map(({ id, ...props }) => (
            <ReviewCard key={id} {...props} />
          ))}
        </ReviewsList>
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
        <NoReviewsText>Reviews are absent</NoReviewsText>
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
