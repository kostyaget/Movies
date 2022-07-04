import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const AppNav = styled.nav`
  margin: 0 auto;
`;

export const AppNavLink = styled(NavLink)`
  display: inline-block;
  padding: 12px 20px;
  letter-spacing: 4px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 20px;
  color: #ffffff;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    text-shadow: 1px 0 11px rgb(255 255 255 / 90%);
  }

  &.active {
    color: #000000;
    text-shadow: 0px 0px 11px rgba(150, 150, 150, 1);
  }
`;
