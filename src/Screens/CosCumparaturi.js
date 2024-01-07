// src/App.js
import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  FormGroup,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import logoBlue from '../components/Layout/logoBlue.svg'; // Înlocuiește cu calea către imaginea ta SVG
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Store } from '../Store';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { toast } from 'react-toastify';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { API_LINK } from '../ApiLink.js';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_CART_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_CART_SUCCESS':
      return { ...state, carts: action.payload, loading: false };
    case 'FETCH_CART_FAIL':
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

function CosCumparaturi() {
  //Template
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const navigate = useNavigate();
  const [{ carts, successDelete }, dispatch] = useReducer(reducer, {
    carts: [],
    loading: true,
    error: '',
  });
  const [user, setUser] = useState('');
  const [client, setClient] = useState('');
  const [adresa, setAdresa] = useState('');
  const [username, setUsename] = useState(userInfo.name);
  useEffect(() => {
    const fetchDataCartInit = async () => {
      try {
        const { data } = await axios.get(`${API_LINK}/api/cart/mine`, {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: 'FETCH_CART_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_CART_FAIL', payload: err.message });
      }
    };
    fetchDataCartInit();
  }, [userInfo]);

  //Adauga la oferta
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${API_LINK}/api/cart/combinaproduse`,
        {
          productIds: carts.map((item) => item._id),
          pret: total, // Asigură-te că total este definit în codul tău
          user: user,
          adresa: adresa,
          client: client,
          username,
        },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      console.log(response.data);
      handleDeleteFullCart();
      toast.success('Comanda a fost trimisă cu succes!'); // Mesaj de succes
    } catch (error) {
      console.error('Eroare la trimiterea comenzii:', error);
      toast.error('A apărut o problemă la trimiterea comenzii.'); // Mesaj de eroare
    }
  };

  //Sterge din cos

  const fetchCartData = async () => {
    try {
      const { data } = await axios.get(`${API_LINK}/api/cart/mine`, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      dispatch({ type: 'FETCH_CART_SUCCESS', payload: data });
    } catch (err) {
      dispatch({ type: 'FETCH_CART_FAIL', payload: err.message });
    }
  };

  const handleDeleteProduct = async (item) => {
    // Confirmare ștergere
    const confirmDelete = window.confirm(
      'Sigur dorești să ștergi acest produs din comanda?'
    );
    if (!confirmDelete) {
      return; // Anulează ștergerea dacă utilizatorul a apăsat anulare
    }
    try {
      // Apel către backend pentru ștergerea produsului
      const response = await axios.delete(`${API_LINK}/api/cart/${item._id}`, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      // Verifică răspunsul de la server
      if (response.data.message) {
        console.log(response.data.message);
        // Reîncarcă datele coșului după ștergere
        fetchCartData();
      } else {
        toast.error('A apărut o problemă la ștergerea produsului.');
      }
    } catch (error) {
      console.error('Eroare la ștergerea produsului:', error);
      toast.error('A apărut o problemă la ștergerea produsului.');
    }
  };

  const handleDeleteFullCart = async (item) => {
    // Confirmare ștergere
    try {
      // Apel către backend pentru ștergerea produsului
      const response = await axios.delete(`${API_LINK}/api/cart`, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      // Verifică răspunsul de la server
      if (response.data.message) {
        console.log(response.data.message);
        // Reîncarcă datele coșului după ștergere
        fetchCartData();
        navigate(`/comenzi`);
      } else {
        toast.error('A apărut o problemă la ștergerea produsului.');
      }
    } catch (error) {
      console.error('Eroare la ștergerea produsului:', error);
      toast.error('A apărut o problemă la ștergerea produsului.');
    }
  };

  const total = carts.reduce((acc, item) => acc + item.pret, 0);
  return (
    <Container
      maxWidth="xxl"
      sx={{
        mt: 6,
        mb: 6,
        backgroundColor: '#f9f9fb',
        height: carts.length < 2 ? '100vh' : 'auto',
      }}
    >
      <form onSubmit={handleSubmit}>
        <Grid
          container
          sx={{ backgroundColor: 'white', margin: 'auto', padding: 3 }}
        >
          <Grid item xs={12}>
            <Box sx={{ mt: 1, width: '200px' }}>
              <img src={logoBlue} alt="" />
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Box
                sx={{
                  maxWidth: '20%',
                }}
              >
                <Typography variant="subtitle1" sx={{ color: '#06386a' }}>
                  Detalii client:
                </Typography>
                <FormGroup>
                  <TextField
                    controlid="client"
                    sx={{ mt: 2 }}
                    id="client"
                    required
                    label="Nume client"
                    variant="standard"
                    onChange={(e) => setClient(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <TextField
                    controlid="adresa"
                    sx={{ mt: 1 }}
                    id="adresa"
                    required
                    label="Adresa"
                    variant="standard"
                    onChange={(e) => setAdresa(e.target.value)}
                  />
                </FormGroup>
              </Box>
              <Box sx={{ marginLeft: 'auto' }}>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    backgroundColor: '#06386a',
                    '&:hover': {
                      backgroundColor: '#003c7f',
                    },
                  }}
                >
                  Trimite comanda
                </Button>
              </Box>
            </Box>
            <Box sx={{ mt: 2 }}>
              <TableContainer>
                <Table aria-label="collapsible table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">Produs</TableCell>
                      <TableCell align="right">Culoare</TableCell>
                      <TableCell align="right">Înălțime (m)</TableCell>
                      <TableCell align="right">Lățime (m)</TableCell>
                      <TableCell align="center">Detalii produs</TableCell>
                      <TableCell align="right">SubTotal (EUR)</TableCell>
                      <TableCell />
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {carts.map((item) => (
                      <React.Fragment key={item._id}>
                        <TableRow>
                          <TableCell align="left">{item.produs}</TableCell>
                          <TableCell align="right">{item.culoare}</TableCell>
                          <TableCell align="right">{item.inaltime}</TableCell>
                          <TableCell align="right">{item.latime}</TableCell>
                          <TableCell>
                            <Accordion>
                              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                Detalii produs
                              </AccordionSummary>
                              <AccordionDetails>
                                <Table>
                                  <TableHead>
                                    <TableRow>
                                      <TableCell align="left">Balcon</TableCell>
                                      <TableCell align="left">
                                        Actionare
                                      </TableCell>
                                      <TableCell align="left">Manual</TableCell>
                                      <TableCell align="left">
                                        Tip Motor
                                      </TableCell>
                                      <TableCell align="left">
                                        Act. Motor
                                      </TableCell>
                                    </TableRow>
                                  </TableHead>
                                  <TableBody>
                                    <TableRow
                                      sx={{ textTransform: 'uppercase' }}
                                    >
                                      <TableCell>
                                        {item.balcon ? 'DA' : 'NU'}
                                      </TableCell>
                                      <TableCell>
                                        {item.actionareInterior}
                                      </TableCell>
                                      <TableCell>
                                        {item.bandaSnur.trim() !== ''
                                          ? item.bandaSnur
                                          : 'NU'}
                                      </TableCell>
                                      <TableCell>
                                        {item.tipMotor.trim() !== ''
                                          ? item.tipMotor
                                          : 'NU'}
                                      </TableCell>
                                      <TableCell>
                                        {item.actionareMotor.trim() !== ''
                                          ? ['68', '71', '80', '85'].includes(
                                              item.actionareMotor
                                            )
                                            ? 'Întrerupător'
                                            : 'Telecomandă'
                                          : 'NU'}
                                      </TableCell>{' '}
                                    </TableRow>
                                  </TableBody>
                                </Table>
                                <Accordion>
                                  <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                  >
                                    Mențiuni
                                  </AccordionSummary>
                                  <AccordionDetails>
                                    {item.mentiuni
                                      ? item.mentiuni
                                      : 'Nu exista mențiuni'}
                                  </AccordionDetails>
                                </Accordion>
                              </AccordionDetails>
                            </Accordion>
                          </TableCell>
                          <TableCell align="right">{item.pret}</TableCell>
                          <TableCell align="right">
                            <Button onClick={() => handleDeleteProduct(item)}>
                              <HighlightOffIcon sx={{ color: 'red' }} />
                            </Button>
                          </TableCell>
                        </TableRow>
                      </React.Fragment>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Typography
                variant="h6"
                sx={{ textAlign: 'right', fontWeight: 'bold', mr: 2, mt: 2 }}
              >
                TOTAL: {total} EUR
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default CosCumparaturi;
