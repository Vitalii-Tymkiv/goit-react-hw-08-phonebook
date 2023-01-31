import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from '../redux/contacts/selectors';

import { SectionWrapper } from '../UI/SectionWrapper/SectionWrapper';
import { ContactForm } from '../components/ContactForm';
import { Filter } from '../components/Filter';
import { ContactList } from '../components/ContactList';
import { InfoMessage } from '../components/InfoMessage';
import { Spinner } from '../UI/Spinner/Spinner';
import { fetchContacts } from 'redux/contacts/operations';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <SectionWrapper title="Add new contact">
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
    </>
  );
};

export default Contacts;
