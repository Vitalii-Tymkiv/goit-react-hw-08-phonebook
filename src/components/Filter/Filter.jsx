import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { filterContacts } from 'redux/contacts/filterSlice';
import { Wrapper } from './Filter.styled';
import { indigo } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

export const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);

  const handleInput = event => {
    dispatch(filterContacts(event.target.value));
  };

  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <TextField
          fullWidth
          label="Find contacts by name"
          type="text"
          name="name"
          value={filter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required={true}
          variant="standard"
          margin="normal"
          color="secondary"
          size="normal"
          onChange={handleInput}
        ></TextField>
      </ThemeProvider>
    </Wrapper>
  );
};
