import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';

import { Contact } from '../Contact/Contact';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const normalizedFilter = filter.toLowerCase();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <List>
      {visibleContacts.map(({ name, phone, id }) => (
        <Contact key={id} id={id} name={name} phone={phone} />
      ))}
    </List>
  );
};
