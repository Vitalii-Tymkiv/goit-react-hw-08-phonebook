import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from '../../redux/contacts/selectors';

import { SectionWrapper } from '../../UI/SectionWrapper/SectionWrapper';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { InfoMessage } from '../InfoMessage/InfoMessage';
import { Spinner } from '../../UI/Spinner/Spinner';
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
    </>
  );
};

export default Contacts;
