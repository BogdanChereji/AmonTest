import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Store } from '../Store';
import { getError } from '../utils';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { API_LINK } from '../ApiLink.js';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function ComandaSinglePage() {
  const { state } = useContext(Store);
  const { userInfo } = state;
  const [{ loading, error }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
  });
  const params = useParams();
  const navigate = useNavigate();
  const { id: ofertaId } = params;

  const [client, setClient] = useState('');
  const [adresa, setAdresa] = useState('');
  const [pret, setPret] = useState('');
  const [user, setUser] = useState('');
  const [produse, setProduse] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`${API_LINK}/api/oferte/${ofertaId}`);
        setClient(data.client);
        setAdresa(data.adresa);
        setPret(data.pret);
        setUser(data.user);
        setProduse(data.products);
        setUsername(data.username);
      } catch (err) {
        dispatch({
          type: 'FETCH_FAIL',
          payload: getError(err),
        });
      }
    };
    fetchData();
  }, [ofertaId]);

  return (
    <Container
      maxWidth="xxl"
      sx={{
        mt: 6,
        mb: 6,
        backgroundColor: '#f9f9fb',
      }}
    >
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
                  label="Nume client"
                  variant="standard"
                  aria-readonly
                  value={client}
                />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="adresa"
                  sx={{ mt: 1 }}
                  id="adresa"
                  label="Adresa"
                  variant="standard"
                  aria-readonly
                  value={adresa}
                />
              </FormGroup>
              {userInfo && userInfo.isAdmin ? (
                <FormGroup>
                  <TextField
                    controlid="adresa"
                    sx={{ mt: 1 }}
                    id="adresa"
                    label="Agent"
                    variant="standard"
                    aria-readonly
                    value={username}
                  />
                </FormGroup>
              ) : (
                ''
              )}
            </Box>
            <Box sx={{ marginLeft: 'auto' }}>
              <Button
                variant="contained"
                type="submit"
                disabled
                sx={{
                  backgroundColor: '#06386a',
                  '&:hover': {
                    backgroundColor: '#003c7f',
                  },
                }}
              >
                Printeaza oferta
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
                  {produse.map((product, index) => (
                    <TableRow key={index}>
                      <TableCell align="left">{product.produs}</TableCell>
                      <TableCell align="right">{product.culoare}</TableCell>
                      <TableCell align="right">{product.inaltime}</TableCell>
                      <TableCell align="right">{product.latime}</TableCell>
                      <TableCell align="center">
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
                                  <TableRow sx={{ textTransform: 'uppercase' }}>
                                    <TableCell>
                                      {product.balcon ? 'DA' : 'NU'}
                                    </TableCell>
                                    <TableCell>
                                      {product.actionareInterior}
                                    </TableCell>
                                    <TableCell>
                                      {product.bandaSnur.trim() !== ''
                                        ? product.bandaSnur
                                        : 'NU'}
                                    </TableCell>
                                    <TableCell>
                                      {product.tipMotor.trim() !== ''
                                        ? product.tipMotor
                                        : 'NU'}
                                    </TableCell>
                                    <TableCell>
                                      {product.actionareMotor.trim() !== ''
                                        ? ['68', '71', '80', '85'].includes(
                                            product.actionareMotor
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
                                  {product.mentiuni
                                    ? product.mentiuni
                                    : 'Nu exista mențiuni'}
                                </AccordionDetails>
                              </Accordion>
                            </AccordionDetails>
                          </Accordion>
                        </TableCell>
                      </TableCell>
                      <TableCell align="right">{product.pret} EUR</TableCell>
                      <TableCell />
                    </TableRow>
                  ))}
                </TableBody>{' '}
              </Table>
            </TableContainer>
            <Typography
              variant="h6"
              sx={{ textAlign: 'right', fontWeight: 'bold', mr: 2, mt: 2 }}
            >
              TOTAL: {pret} EUR
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
