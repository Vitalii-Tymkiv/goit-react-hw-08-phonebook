import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Notify } from 'notiflix';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Form } from './RegisterForm.styled';
import { grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: grey[600],
    },
    secondary: {
      main: '#728697',
    },
  },
});
const notifyOptions = {
  position: 'center-top',
  fontSize: '16px',
  clickToClose: true,
  width: '450px',
  timeout: 2000,
  backOverlay: true,
  warning: { background: '#728697', notiflixIconColor: '#fff' },
};

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
    )
      .unwrap()
      .then()
      .catch(() =>
        Notify.warning(
          `An account with this email already exist!`,
          notifyOptions
        )
      );

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="on">
      <ThemeProvider theme={theme}>
        <TextField
          sx={{ width: 300 }}
          name="name"
          type="text"
          required={true}
          label="Username"
          variant="outlined"
          margin="normal"
          color="secondary"
          size="small"
        />
      </ThemeProvider>
      <ThemeProvider theme={theme}>
        <TextField
          sx={{ width: 300 }}
          name="email"
          type="email"
          required={true}
          label="Email"
          variant="outlined"
          margin="normal"
          color="secondary"
          size="small"
        />
      </ThemeProvider>
      <ThemeProvider theme={theme}>
        <TextField
          sx={{ width: 300 }}
          name="password"
          required={true}
          type="password"
          label="Password"
          variant="outlined"
          margin="normal"
          color="secondary"
          size="small"
        />
      </ThemeProvider>
      <ThemeProvider theme={theme}>
        <Button type="submit" variant="outlined" color="primary" sx={{ mt: 2 }}>
          Sign Up
        </Button>
      </ThemeProvider>
    </Form>
  );
};
