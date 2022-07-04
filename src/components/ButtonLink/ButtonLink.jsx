import PropTypes from 'prop-types';
import { ButtonWrapper, NavButton } from './ButtonLink.styled';

export default function ButtonLink({ to, text, state }) {
  return (
    <ButtonWrapper>
      <NavButton to={to} state={state} end>
        {text}
      </NavButton>
    </ButtonWrapper>
  );
}

ButtonLink.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  text: PropTypes.string.isRequired,
  state: PropTypes.object,
};
