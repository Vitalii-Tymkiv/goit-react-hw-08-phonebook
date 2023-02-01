import { logIn } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { Form, InputWrapper } from './LoginForm.styled';
import { Notify } from 'notiflix';

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
    )
      .unwrap()
      .then()
      .catch(() =>
        Notify.warning(`Enter correct email and password!`, notifyOptions)
      );

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="on">
      <ThemeProvider theme={theme}>
        <InputWrapper>
          <TextField
            fullWidth
            name="email"
            type="email"
            required={true}
            label="Email"
            variant="outlined"
            margin="normal"
            color="secondary"
            size="small"
          />
        </InputWrapper>
      </ThemeProvider>
      <ThemeProvider theme={theme}>
        <InputWrapper>
          <TextField
            sx={{ width: 300 }}
            name="password"
            type="password"
            required={true}
            label="Password"
            variant="outlined"
            margin="normal"
            color="secondary"
            size="small"
          />
        </InputWrapper>
      </ThemeProvider>
      <ThemeProvider theme={theme}>
        <Button type="submit" variant="outlined" sx={{ mt: 2 }}>
          Log in
        </Button>
      </ThemeProvider>
    </Form>
  );
};
