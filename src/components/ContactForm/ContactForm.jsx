import { useState } from 'react';
import { Input, Btn } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setPhone] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const type = e.target.name;
    switch (type) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setPhone(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      reset();

      return Notiflix.Notify.info(`${name} is already in contacts`);
    }
    dispatch(addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={name}
        onChange={handleChange}
        type="text"
        name="name"
        placeholder="Enter Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <Input
        value={number}
        onChange={handleChange}
        type="tel"
        name="number"
        placeholder="Enter Phone Number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <Btn type="submit">Add contacts</Btn>
    </form>
  );
};

// import { Input, Btn } from './ContactForm.styled';

// import { selectContacts } from 'redux/contacts/selectors';
// import { useDispatch, useSelector } from 'react-redux';
// import { useState } from 'react';
// import { addContact } from 'redux/contacts/operations';
// import { showAlertMessage } from 'UI/AlertMessage/AlertMessage';

// export const ContactForm = () => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');
//   const contacts = useSelector(selectContacts);
//   const dispatch = useDispatch();

//   const handleChangeForm = ({ target }) => {
//     const { name, value } = target;

//     switch (name) {
//       case 'name':
//         setName(value);
//         break;
//       case 'number':
//         setNumber(value);
//         break;
//       default:
//         return;
//     }
//   };

//   const handleSubmit = event => {
//     event.preventDefault();

//     const handleCheckContact = name => {
//       const isExistContact = contacts.find(contact => contact.name === name);
//       isExistContact && showAlertMessage(name);
//       return isExistContact;
//     };
//     const normName = name.trim();
//     if (handleCheckContact(name)) return;
//     dispatch(addContact({ name: normName, number }));
//     resetForm();
//   };

//   const resetForm = () => {
//     setName('');
//     setNumber('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <Input
//         type="text"
//         name="name"
//         value={name}
//         placeholder="Enter Name"
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//         onChange={handleChangeForm}
//       ></Input>

//       <Input
//         type="text"
//         name="number"
//         value={number}
//         placeholder="Enter Phone Number"
//         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//         required
//         onChange={handleChangeForm}
//       ></Input>

//       <Btn type="submit">Add Contact</Btn>
//     </form>
//   );
// };
