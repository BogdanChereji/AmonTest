import React, { useEffect, useReducer, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Store } from '../../Store';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  MenuItem,
  Menu,
  Stack,
} from '@mui/material';
import { toast } from 'react-toastify';
import { getError } from '../../utils';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { API_LINK } from '../../ApiLink.js';
import VisibilityIcon from '@mui/icons-material/Visibility';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { styled } from '@mui/material/styles';
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, oferte: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    case 'DELETE_REQUEST':
      return { ...state, loadingDelete: true };
    case 'DELETE_SUCCESS':
      return {
        ...state,
        loadingDelete: false,
        successDelete: true,
      };
    case 'DELETE_FAIL':
      return {
        ...state,
        loadingDelete: false,
        error: action.payload,
        successDelete: false,
      };
    case 'DELETE_RESET':
      return {
        ...state,
        loadingDelete: false,
        successDelete: false,
      };

    default:
      return state;
  }
};

function OferteTable() {
  const { state } = useContext(Store);
  const { userInfo } = state;
  const navigate = useNavigate();
  const [{ oferte, error, loading, loadingDelete, successDelete }, dispatch] =
    useReducer(reducer, {
      oferte: [],
      loading: true,
      error: '',
    });

  useEffect(() => {
    const fetchDataCartInit = async () => {
      try {
        const { data } = await axios.get(`${API_LINK}/api/oferte/mine`, {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchDataCartInit();
  }, [userInfo]);

  const fetchCartData = async () => {
    try {
      const { data } = await axios.get(`${API_LINK}/api/oferte/mine`, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      dispatch({ type: 'FETCH_SUCCESS', payload: data });
    } catch (err) {
      dispatch({ type: 'FETCH_FAIL', payload: err.message });
    }
  };

  const handleDeleteOferta = async (oferta) => {
    // Confirmare ștergere
    const confirmDelete = window.confirm(
      'Sigur dorești să ștergi acest produs din comanda?'
    );
    if (!confirmDelete) {
      return; // Anulează ștergerea dacă utilizatorul a apăsat anulare
    }
    try {
      // Apel către backend pentru ștergerea produsului
      const response = await axios.delete(
        `${API_LINK}/api/oferte/${oferta._id}`,
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
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

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  const ColorButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#06386a',
    '&:hover': {
      backgroundColor: '#003c7f',
    },
  }));

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">Client</TableCell>
            <TableCell align="left">Detalii comandă </TableCell>
            <TableCell align="left">Pret</TableCell>
            <TableCell align="left">Acțiuni</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {oferte.map((oferta) => (
            <React.Fragment key={oferta._id}>
              <StyledTableRow>
                <TableCell>{oferta.client}</TableCell>
                <TableCell>
                  {oferta.products.map((oferta) => (
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        {oferta.produs} {oferta.culoare}
                      </AccordionSummary>
                      <AccordionDetails>
                        {oferta.bandaSnur !== undefined &&
                        oferta.tipMotor !== undefined &&
                        oferta.actionareMotor !== undefined ? (
                          <Table>
                            <TableHead>
                              <TableRow>
                                <TableCell>Înalțime (m)</TableCell>
                                <TableCell>Lățime (m)</TableCell>
                                <TableCell>Balcon</TableCell>
                                <TableCell>Actionare</TableCell>
                                <TableCell>Manual</TableCell>
                                <TableCell>Tip Motor</TableCell>
                                <TableCell>Act. Motor</TableCell>
                                <TableCell>Pret</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              <TableRow sx={{ textTransform: 'uppercase' }}>
                                <TableCell>{oferta.inaltime} </TableCell>
                                <TableCell>{oferta.latime} </TableCell>
                                <TableCell>
                                  {oferta.balcon ? 'DA' : 'NU'}
                                </TableCell>
                                <TableCell>{oferta.bandaSnur} </TableCell>
                                <TableCell>
                                  {oferta.bandaSnur.trim() !== ''
                                    ? oferta.bandaSnur
                                    : 'NU'}
                                </TableCell>
                                <TableCell>
                                  {oferta.tipMotor.trim() !== ''
                                    ? oferta.tipMotor
                                    : 'NU'}{' '}
                                </TableCell>
                                <TableCell>
                                  {oferta.actionareMotor.trim() !== ''
                                    ? ['68', '71', '80', '85'].includes(
                                        oferta.actionareMotor
                                      )
                                      ? 'Întrerupător'
                                      : 'Telecomandă'
                                    : 'NU'}{' '}
                                </TableCell>
                                <TableCell>{oferta.pret} </TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        ) : (
                          <Table>
                            <TableHead>
                              <TableRow>
                                <TableCell>Înalțime (m)</TableCell>
                                <TableCell>Lățime (m)</TableCell>
                                <TableCell>Distantier</TableCell>
                                <TableCell>Pret</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              <TableRow sx={{ textTransform: 'uppercase' }}>
                                <TableCell>{oferta.inaltime} </TableCell>
                                <TableCell>{oferta.latime} </TableCell>
                                <TableCell>
                                  {oferta.distantier ? 'DA' : 'NU'}
                                </TableCell>
                                <TableCell>{oferta.pret} </TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        )}
                        <Accordion>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            Mentiuni
                          </AccordionSummary>
                          <AccordionDetails>
                            {oferta.mentiuni
                              ? oferta.mentiuni
                              : 'Nu exista mențiuni'}
                          </AccordionDetails>
                        </Accordion>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </TableCell>
                <TableCell> {oferta.pret} EUR</TableCell>
                <TableCell>
                  <Stack spacing={2}>
                    <ColorButton
                      sx={{ backgroundcolor: '#06386a' }}
                      variant="contained"
                      dense
                      onClick={() => navigate(`/oferta/${oferta._id}`)}
                    >
                      Vizualizeaza{' '}
                    </ColorButton>
                    <ColorButton
                      sx={{ backgroundcolor: '#06386a' }}
                      variant="contained"
                      dense
                      onClick={() => handleDeleteOferta(oferta)}
                    >
                      Sterge
                    </ColorButton>{' '}
                  </Stack>
                </TableCell>
              </StyledTableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default OferteTable;
