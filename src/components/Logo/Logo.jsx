import { NavLink } from 'react-router-dom';
import { AppName, AppNameExpansion } from './Logo.styled';

export default function Logo() {
  return (
    <AppName>
      <NavLink to="/">Filmer</NavLink>
      <AppNameExpansion>.app</AppNameExpansion>
    </AppName>
  );
}
