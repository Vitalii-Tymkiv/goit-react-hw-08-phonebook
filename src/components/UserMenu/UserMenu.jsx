import { useDispatch } from 'react-redux';

import { logOut } from 'redux/auth/operations';
import { useAuth } from '../hooks';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <p>
        Welcome, <span>{user.name}</span>
      </p>
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};
