import {
  Box,
  Button,
  Container,
  FormControl,
  FormGroup,
  TextField,
  Typography,
} from '@mui/material';
import Axios from 'axios';
import { Store } from '../Store';
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { getError } from '../utils';
import { API_LINK } from '../ApiLink.js';

export default function SignInPage() {
  const { dispatch: ctxDispatch } = useContext(Store);
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const submitHandlerSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Parolele nu se potrivesc');
      return;
    }
    try {
      const { data } = await Axios.post(`${API_LINK}/api/users/signup`, {
        name,
        email,
        password,
      });
      toast.success('Contul a fost înregistrat');
      navigate('/');
      // ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      // localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (err) {
      toast.error(getError(err));
    }
  };

  return (
    <Container
      maxWidth="xxl"
      sx={{
        backgroundColor: '#f9f9fb',
        height: '100vh',
        padding: '16px',

        // Stiluri specifice pentru ecrane mai mici
        '@media (max-width: 800px)': {
          backgroundColor: '#fff',
          width: '100%', // Lățime mai mare pentru ecrane mici
          padding: '10px',
        },
      }}
    >
      <form onSubmit={submitHandlerSignUp}>
        <Box
          sx={{
            margin: 'auto',
            marginTop: '80px',
            width: '30%', // Lățimea originală pentru desktop
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            borderRadius: 2,

            // Stiluri specifice pentru ecrane mai mici
            '@media (max-width: 800px)': {
              width: '100%', // Lățime mai mare pentru ecrane mici
              marginTop: '60px',
              border: 'none',
              padding: '10px',
            },
          }}
        >
          <Box>
            <Typography
              sx={{
                color: '#06386a',
                textAlign: 'center',
                mt: 5,
                fontWeight: 'regular',
              }}
              variant="h5"
              noWrap
              component="div"
            >
              Înregistrează cont nou
            </Typography>
            <Box maxWidth="70%" sx={{ margin: 'auto', mt: 5 }}>
              <FormGroup>
                <TextField
                  controlid="name"
                  id="name"
                  label="Introduceți numele clientului"
                  variant="outlined"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
                <FormControl type="text" required />
              </FormGroup>

              <FormGroup>
                <TextField
                  controlid="email"
                  sx={{ mt: 2 }}
                  id="email"
                  label="Introduceți adresa de email"
                  variant="outlined"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FormControl type="email" required />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="password"
                  sx={{ mt: 2 }}
                  id="password"
                  label="Introduceți parola"
                  variant="outlined"
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FormControl type="password" required />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="confirmpassword"
                  sx={{ mt: 2 }}
                  id="confirmpassword"
                  label="Reintroduceti parola"
                  variant="outlined"
                  type="password"
                  required
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <FormControl type="password" required />
              </FormGroup>
            </Box>
          </Box>
          <FormGroup>
            <Button
              variant="contained"
              maxWidth="xxl"
              type="submit"
              sx={{
                m: 'auto',
                mt: 4,
                mb: 4,
                backgroundColor: '#327c3d',
                width: '70%',
                height: '50px',
                borderRadius: '30px',
                '&:hover': {
                  backgroundColor: '#329c3d',
                },
              }}
              autoFocus
            >
              Înregistrează contul!
            </Button>
          </FormGroup>
          <Typography
            sx={{
              color: '#1f1f1f',
              textAlign: 'center',
              mb: 5,
              fontSize: '0.7rem', // Ajustează dimensiunea textului

              // Stiluri specifice pentru ecrane mai mici
              '@media (max-width: 800px)': {
                display: 'block', // Afișează pe un rând nou
                fontSize: '0.6rem', // Ajustează dimensiunea textului
              },
            }}
            variant="span"
            noWrap
            component="div"
          >
            Câmpurile cu * trebuie completate obligatoriu.
          </Typography>
        </Box>
      </form>
    </Container>
  );
}
