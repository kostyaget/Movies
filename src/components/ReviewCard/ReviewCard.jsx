import PropTypes from 'prop-types';
import { ReviewItem, AuthorName, ReviewText } from './ReviewCard.styled';

export default function ReviewCard({ author, content }) {
  return (
    <ReviewItem>
      <AuthorName>{author}</AuthorName>
      <ReviewText>{content}</ReviewText>
    </ReviewItem>
  );
}

ReviewCard.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
