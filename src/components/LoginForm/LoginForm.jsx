import { logIn } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { indigo } from '@mui/material/colors';
import { Form } from './LoginForm.styled';

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

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
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
          Log in
        </Button>
      </ThemeProvider>
    </Form>
  );
};
