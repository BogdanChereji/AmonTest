import React, { useEffect, useReducer, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
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
} from '@mui/material';
import { toast } from 'react-toastify';
import { getError } from '../../utils';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { API_LINK } from '../../ApiLink.js';
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, produse: action.payload, loading: false };
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

function ProduseTable() {
  const apiLink = '/api/produse';
  const { state } = useContext(Store);
  const { userInfo } = state;
  const navigate = useNavigate();
  const [{ produse, error, loading, loadingDelete, successDelete }, dispatch] =
    useReducer(reducer, {
      produse: [],
      loading: true,
      error: '',
    });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${API_LINK}/api/produse`, {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };

    fetchData();

    if (successDelete) {
      dispatch({ type: 'DELETE_REQUEST' });
    } else {
      fetchData();
    }
  }, [userInfo, successDelete]);

  const deleteHandler = async (produs) => {
    if (window.confirm('Ești sigur ca vrei să ștergi produsul?')) {
      try {
        await axios.delete(`${API_LINK}/api/produse/${produs._id}`, {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        toast.success('Produsul a fost șters cu succes');
        dispatch({
          type: 'DELETE_SUCCESS',
        });
      } catch (err) {
        toast.error(getError(error));
        dispatch({
          type: 'DELETE_FAIL',
        });
      }
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">Denumire produse</TableCell>
            <TableCell align="left">Culoare</TableCell>
            <TableCell align="right">Acțiuni</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {produse.map((produs) => (
            <TableRow key={produs._id}>
              <TableCell>{produs.Nume}</TableCell>
              <TableCell>{produs.NumeCuloare}</TableCell>
              <TableCell align="right">
                <Button
                  sx={{ color: 'red' }}
                  onClick={() => deleteHandler(produs)}
                >
                  <HighlightOffIcon sx={{ color: 'red' }} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ProduseTable;
