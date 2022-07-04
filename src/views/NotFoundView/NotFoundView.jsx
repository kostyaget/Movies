import ButtonLink from 'components/ButtonLink';
import { NotFoundMessage, NotFoundWrapper } from './NotFoundView.styled';

export default function NotFoundView() {
  return (
    <NotFoundWrapper>
      <NotFoundMessage>🐒 404 Page not found 🙈 🙉 🙊</NotFoundMessage>
      <ButtonLink to="/" text="Go Home" />
    </NotFoundWrapper>
  );
}
