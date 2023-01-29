import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { useDispatch } from 'react-redux';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from './hooks';

const HomePage = lazy(() => import('../components/pages/Home'));
const RegisterPage = lazy(() => import('../components/pages/Register'));
const LoginPage = lazy(() => import('../components/pages/Login'));
const ContactsPage = lazy(() => import('../components/pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {!isRefreshing && (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route
              path="register"
              element={
                <RestrictedRoute
                  component={<RegisterPage />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  component={<LoginPage />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  component={<ContactsPage />}
                  redirectTo="/login"
                />
              }
            />
          </Route>
        </Routes>
      )}
    </>
  );

  // return (
  //   <Container>
  //     <SectionWrapper title="Phonebook">
  //       <ContactForm />
  //     </SectionWrapper>

  //     <SectionWrapper title="Contact List">
  //       {isLoading && !error && <Spinner />}
  //       {contacts.length > 0 ? (
  //         <>
  //           <Filter />
  //           <ContactList />
  //         </>
  //       ) : (
  //         <InfoMessage message={'Contact List is empty'} />
  //       )}
  //     </SectionWrapper>
  //   </Container>
  // );
};
