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
import { API_LINK } from '../ApiLink.js';

export default function SignInPage() {
  const { dispatch: ctxDispatch } = useContext(Store);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submitHandlerSignIn = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post(`${API_LINK}/api/users/signin`, {
        email,
        password,
      });
      toast.success('Te-ai conectat cu succes');
      navigate('/');
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (err) {
      toast.error('Email-ul și parola nu corespund ', {
        position: toast.POSITION.BOTTOM_CENTER,
      });
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
      <form onSubmit={submitHandlerSignIn}>
        <Box
          sx={{
            margin: 'auto',
            marginTop: '100px',
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
          {' '}
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
              Conectează-te!
            </Typography>
            <Box maxWidth="70%" sx={{ margin: 'auto', mt: 5 }}>
              <FormGroup>
                <TextField
                  controlid="email"
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
            >
              Conectează-te!
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
            În caz ca întâmpini probleme cu contul, te rugăm să ne contactezi.
          </Typography>
        </Box>
      </form>
    </Container>
  );
}
