import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from '../redux/selectors';
import { useEffect } from 'react';
import { Container } from '../UI/Container';
import { SectionWrapper } from '../UI/SectionWrapper';
import { ContactForm } from '../components/ContactForm';
import { Filter } from '../components/Filter';
import { ContactList } from '../components/ContactList';
import { InfoMessage } from './InfoMessage/InfoMessage';
import { selectIsLoading, selectError } from '../redux/selectors';
import { Spinner } from '../UI/Spinner/Spinner';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <SectionWrapper title="Phonebook">
        <ContactForm />
      </SectionWrapper>

      <SectionWrapper title="Contact List">
        {isLoading && !error && <Spinner />}
        {contacts.length > 0 ? (
          <>
            <Filter />
            <ContactList />
          </>
        ) : (
          <InfoMessage message={'Contact List is empty'} />
        )}
      </SectionWrapper>
    </Container>
  );
};
