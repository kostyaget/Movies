import { NavLink } from 'react-router-dom';
import { AppName, AppNameExpansion } from './Logo.styled';

export default function Logo() {
  return (
    <AppName>
      <NavLink to="/">Filmoteka</NavLink>
      <AppNameExpansion></AppNameExpansion>
    </AppName>
  );
}
