import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { Button } from './ContactForm.styled';
import { showAlertMessage } from 'UI/AlertMessage/AlertMessage';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { indigo } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: indigo[500],
    },
    secondary: {
      main: '#728697',
    },
  },
});
export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setPhone] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChangeForm = e => {
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

      return showAlertMessage(name);
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
      <ThemeProvider theme={theme}>
        <TextField
          value={name}
          onChange={handleChangeForm}
          type="text"
          name="name"
          label="Enter Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required={true}
          variant="outlined"
          color="secondary"
        />
      </ThemeProvider>
      <ThemeProvider theme={theme}>
        <TextField
          value={number}
          onChange={handleChangeForm}
          type="tel"
          name="number"
          label="Enter Phone Number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required={true}
          variant="outlined"
          sx={{ ml: 2 }}
          color="secondary"
        />
      </ThemeProvider>
      <Button type="submit" variant="contained" sx={{ ml: 2, mt: 1.2 }}>
        Add contact
      </Button>
    </form>
  );
};
