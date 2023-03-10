import { AuthNav } from '../AuthNav/AuthNav';
import { HeaderNav } from '../HeaderNav/HeaderNav';
import { UserMenu } from '../UserMenu/UserMenu';
import { useAuth } from 'components/hooks';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <HeaderNav />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
