import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`;

export const StyledLink = styled(NavLink)`
  position: relative;
  padding: 8px 0;

  color: #728697;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;

  &.active {
    color: #fff;
  }

  :hover,
  :focus {
    color: #fff;
  }
`;
