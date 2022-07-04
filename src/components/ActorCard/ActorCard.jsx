import PropTypes from 'prop-types';
import { ActorItem, ActorImg, ActorName, ActorRole } from './ActorCard.styled';
import defaultActor from '../../images/noActor.jpg';

export default function ActorCard({ profile_path, name, character }) {
  return (
    <ActorItem>
      <ActorImg
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w300${profile_path}`
            : defaultActor
        }
        alt={name}
      />
      <ActorName>{name}</ActorName>
      <ActorRole>Role: {character}</ActorRole>
    </ActorItem>
  );
}

ActorCard.propTypes = {
  profile_path: PropTypes.string,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};
