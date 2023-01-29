import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Form } from './RegisterForm.styled';
import { indigo } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: indigo[500],
    },
    secondary: {
      main: '#fff',
    },
  },
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <TextField
        sx={{ width: 300 }}
        name="name"
        required={true}
        label="Username"
        variant="outlined"
        margin="normal"
      />
      <TextField
        sx={{ width: 300 }}
        name="email"
        required={true}
        label="Email"
        variant="outlined"
        margin="normal"
      />
      <TextField
        sx={{ width: 300 }}
        name="password"
        required={true}
        type="password"
        label="Password"
        variant="outlined"
        margin="normal"
      />
      <ThemeProvider theme={theme}>
        <Button type="submit" variant="outlined">
          Register
        </Button>
      </ThemeProvider>
    </Form>
  );
};
