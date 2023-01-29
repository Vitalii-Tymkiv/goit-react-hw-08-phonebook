import { useAuth } from '../hooks';
import { Wrapper, StyledLink } from './HeaderNav.styled';

export const HeaderNav = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Wrapper>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && (
        <>
          <StyledLink to="/contacts">Contacts</StyledLink>
        </>
      )}
    </Wrapper>
  );
};
