import axios from 'axios';
import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Store } from '../Store.js';
import { toast } from 'react-toastify';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getError } from '../utils.js';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { API_LINK } from '../ApiLink.js';

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_REQUEST':
      return { ...state, loading: true };
    case 'CREATE_SUCCESS':
      return {
        ...state,
        loading: false,
      };
    case 'CREATE_FAIL':
      return { ...state, loading: false, error: action.payload };
    case 'FETCH_Produs_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_Produs_SUCCESS':
      return { ...state, produse: action.payload, loading: false };
    case 'FETCH_Produs_FAIL':
      return { ...state, loading: false, error: action.payload };
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

function CalculatorRulouriTencuibilePage() {
  //Template
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const navigate = useNavigate();
  const [{ produse, carts, successDelete }, dispatch] = useReducer(reducer, {
    produse: [],
    carts: [],
    loading: true,
    error: '',
  });

  //Constante
  const [selectedCuloare, setSelectedCuloare] = useState('');
  const [selectedProdus, setSelectedProdus] = useState('');
  const [actionareInterior, setActionareInterior] = useState('');
  const [inaltime, setInaltime] = useState('');
  const [latime, setLatime] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [culoareUnica, setCuloareUnica] = useState([]);
  const [checkBoxExcludeD137, setCheckBoxExcludeD137] = useState(false);
  const [checkBoxManual, setCheckBoxManual] = useState(false);
  const [checkBoxMotor, setCheckBoxMotor] = useState(false);
  const [bandaSnur, setBandaSnur] = useState('');
  const [selectedMotor, setSelectedMotor] = useState('');
  const [selectedMotorSomfySmart, setSelectedMotorSomfySmart] = useState('');
  const [produs, setProdus] = useState('');
  const [culoare, setCuloare] = useState('');
  const [balcon, setBalcon] = useState(false);
  const [mentiuni, setMentiuni] = useState('');
  const [adaos, setAdaos] = useState('');
  const [tipMotor, setTipMotor] = useState('');
  const [actionareMotor, setActionareMotor] = useState('');
  const [user, setUser] = useState('');
  const [pret, setPret] = useState('');

  //HandleChange
  const handleChangeProduct = (event) => {
    setSelectedProdus(event.target.value);
  };
  const handleChangeActionareInterior = (event) => {
    setActionareInterior(event.target.value);
  };
  const handleChangeBandaSnur = (event) => {
    setBandaSnur(event.target.value);
  };
  const handleChangeSelectedMotor = (event) => {
    setSelectedMotor(event.target.value);
  };
  const handleChangeSelectedMotorSomfySmart = (event) => {
    setSelectedMotorSomfySmart(event.target.value);
  };
  const handleCheckBoxExcludeD137 = () => {
    setCheckBoxExcludeD137(!checkBoxExcludeD137);
  };
  const handleCheckBoxManual = () => {
    setCheckBoxManual(!checkBoxManual);
    setCheckBoxMotor(false);
  };

  const handleCheckBoxMotor = () => {
    setCheckBoxMotor(!checkBoxMotor);
    setCheckBoxManual(false);
    setSelectedMotorSomfySmart('');
    setSelectedMotor('');
  };
  const handleChangeColor = (event) => {
    const selectedColor = event.target.value;
    setSelectedCuloare(selectedColor);
  };
  const total = carts.reduce((acc, item) => acc + item.pret, 0);
  // =============== Filtrare culoare

  useEffect(() => {
    setFilteredProducts(
      produse.filter((produs) => produs.NumeCuloare === selectedCuloare)
    );
  }, [produse, selectedCuloare]);

  useEffect(() => {
    // Folosim un Set pentru a ține evidența culorilor unice
    const colorSet = new Set(produse.map((produs) => produs.NumeCuloare));
    setCuloareUnica(Array.from(colorSet));
  }, [produse]);

  //FetchData - Apelează baza de date

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${API_LINK}/api/produsetencuibil`, {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: 'FETCH_Produs_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_Produs_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, [userInfo]);

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

  // Adauga la comanda
  const createHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: 'CREATE_REQUEST' });
      const calculatedPret = calculPretTotalCuAdaos();
      const numericPret = parseFloat(calculatedPret);
      setPret(numericPret);
      const { data } = await axios.post(
        `${API_LINK}/api/cart`,
        {
          produs,
          culoare,
          latime,
          inaltime,
          balcon,
          actionareInterior,
          bandaSnur,
          mentiuni,
          adaos,
          tipMotor,
          actionareMotor,
          pret: numericPret,
          user,
        },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      setSelectedCuloare('');
      setSelectedProdus('');
      setSelectedMotor('');
      setSelectedMotorSomfySmart('');
      setProdus(''); // înlocuiți cu valoarea inițială a lui produs
      setCuloare(''); // înlocuiți cu valoarea inițială a lui culoare
      setLatime(''); // înlocuiți cu valoarea inițială a lui latime
      setInaltime(''); // înlocuiți cu valoarea inițială a lui inaltime
      setActionareInterior(''); // înlocuiți cu valoarea inițială a lui actionareInterior
      setBandaSnur(''); // înlocuiți cu valoarea inițială a lui bandaSnur
      setMentiuni(''); // înlocuiți cu valoarea inițială a lui mentiuni
      setAdaos(''); // înlocuiti cu valoarea inițiala a lui adaos
      setTipMotor(''); // înlocuiți cu valoarea inițială a lui tipMotor
      setActionareMotor(''); // înlocuiți cu valoarea inițială a lui actionareMotor
      setPret(''); // înlocuiți cu valoarea inițială a lui pret
      setUser(''); // înlocuiți cu valoarea inițială a lui user
      await fetchCartData();
      dispatch({ type: 'CREATE_SUCCESS' });
    } catch (err) {
      dispatch({
        type: 'CREATE_FAIL',
        payload: getError(err),
      });
      toast.error('Ai întâmpinat o problemă');
    }
  };

  //Sterge din cos

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

  //CalculPretTotal
  const calculPretTotal = () => {
    if (inaltime && latime) {
      const selectedProduct = produse.find(
        (produs) => produs._id === selectedProdus
      );
      if (selectedProdus) {
        if (!checkBoxMotor) {
          if (inaltime >= 0.5 && inaltime <= 2.4) {
            let pretTotal =
              latime * selectedProduct.D165.TocRulouTencuibil165pe20.pret +
              latime * selectedProduct.D165.SinaTencuibilaPanelService.pret +
              latime * selectedProduct.D165.PanelService165pe20.pret +
              latime * selectedProduct.D165.PolistirenExtrudat.pret +
              (parseFloat(latime) - 0.05) *
                selectedProduct.D165.AxOctogonal40.pret +
              ((parseFloat(inaltime) * 100) / 3.9) *
                (parseFloat(latime) - 0.05) *
                selectedProduct.D165.LamelaAluminiu.pret +
              (parseFloat(latime) - 0.05) *
                selectedProduct.D165.LamelaTerminala.pret +
              (parseFloat(latime) - 0.05) *
                selectedProduct.D165.GarnituraDeContact.pret +
              (parseFloat(inaltime) - 0.1) *
                2 *
                selectedProduct.D165.GhidajAlu.pret +
              (parseFloat(inaltime) - 0.1) *
                4 *
                selectedProduct.D165.PerieGhidaj.pret +
              1 * selectedProduct.D165.CapacLateral165pe20.pret +
              1 * selectedProduct.D165.Fulie165.pret +
              1 * selectedProduct.D165.Dop40.pret +
              2 * selectedProduct.D165.Rulment.pret +
              6 * selectedProduct.D165.Snur.pret +
              1 * selectedProduct.D165.PalnieGhidaj.pret +
              9 * selectedProduct.D165.OrnamentPlastic.pret +
              1 * selectedProduct.D165.RolaPlastic.pret +
              1 * selectedProduct.D165.ArcCilindric.pret +
              1 * selectedProduct.D165.Automat.pret +
              2 * selectedProduct.D165.OpritorAscuns.pret +
              64 * selectedProduct.D165.Arriter.pret;

            if (parseFloat(latime) <= 1) {
              pretTotal += 3 * selectedProduct.D165.AgatatorCovor170.pret;
            } else if (parseFloat(latime) > 1 && parseFloat(latime) <= 1.5) {
              pretTotal += 4 * selectedProduct.D165.AgatatorCovor170.pret;
            } else if (parseFloat(latime) > 1.5 && parseFloat(latime) <= 2) {
              pretTotal += 5 * selectedProduct.D165.AgatatorCovor170.pret;
            } else pretTotal += 6 * selectedProduct.D165.AgatatorCovor170.pret;

            if (parseFloat(latime) <= 1) {
              pretTotal += 3 * selectedProduct.D165.Inel40.pret;
            } else if (parseFloat(latime) > 1 && parseFloat(latime) <= 1.5) {
              pretTotal += 4 * selectedProduct.D165.Inel40.pret;
            } else if (parseFloat(latime) > 1.5 && parseFloat(latime) <= 2) {
              pretTotal += 5 * selectedProduct.D165.Inel40.pret;
            } else pretTotal += 6 * selectedProduct.D165.Inel40.pret;

            return pretTotal.toFixed(2); // Afișăm doar 5 zecimale pentru preț
          }
          if (inaltime > 2.4 && inaltime <= 2.9) {
            let pretTotal =
              latime * selectedProduct.D180.TocRulouTencuibil165pe20.pret +
              latime * selectedProduct.D180.SinaTencuibilaPanelService.pret +
              latime * selectedProduct.D180.PanelService165pe20.pret +
              latime * selectedProduct.D180.PolistirenExtrudat.pret +
              (parseFloat(latime) - 0.05) *
                selectedProduct.D180.AxOctogonal60.pret +
              ((parseFloat(inaltime) * 100) / 3.9) *
                (parseFloat(latime) - 0.05) *
                selectedProduct.D180.LamelaAluminiu.pret +
              (parseFloat(latime) - 0.05) *
                selectedProduct.D180.LamelaTerminala.pret +
              (parseFloat(latime) - 0.05) *
                selectedProduct.D180.GarnituraDeContact.pret +
              (parseFloat(inaltime) - 0.1) *
                2 *
                selectedProduct.D180.GhidajAlu.pret +
              (parseFloat(inaltime) - 0.1) *
                4 *
                selectedProduct.D180.PerieGhidaj.pret +
              1 * selectedProduct.D180.CapacLateral165pe20.pret +
              1 * selectedProduct.D180.Fulie165.pret +
              1 * selectedProduct.D180.Dop60.pret +
              2 * selectedProduct.D180.Rulment.pret +
              6 * selectedProduct.D180.Snur.pret +
              1 * selectedProduct.D180.PalnieGhidaj.pret +
              9 * selectedProduct.D180.OrnamentPlastic.pret +
              1 * selectedProduct.D180.RolaPlastic.pret +
              1 * selectedProduct.D180.ArcCilindric.pret +
              1 * selectedProduct.D180.Automat.pret +
              2 * selectedProduct.D180.OpritorAscuns.pret +
              64 * selectedProduct.D180.Arriter.pret;

            if (parseFloat(latime) <= 1) {
              pretTotal += 3 * selectedProduct.D180.AgatatorCovor170.pret;
            } else if (parseFloat(latime) > 1 && parseFloat(latime) <= 1.5) {
              pretTotal += 4 * selectedProduct.D180.AgatatorCovor170.pret;
            } else if (parseFloat(latime) > 1.5 && parseFloat(latime) <= 2) {
              pretTotal += 5 * selectedProduct.D180.AgatatorCovor170.pret;
            } else pretTotal += 6 * selectedProduct.D180.AgatatorCovor170.pret;

            if (parseFloat(latime) <= 1) {
              pretTotal += 3 * selectedProduct.D180.Inel60.pret;
            } else if (parseFloat(latime) > 1 && parseFloat(latime) <= 1.5) {
              pretTotal += 4 * selectedProduct.D180.Inel60.pret;
            } else if (parseFloat(latime) > 1.5 && parseFloat(latime) <= 2) {
              pretTotal += 5 * selectedProduct.D180.Inel60.pret;
            } else pretTotal += 6 * selectedProduct.D180.Inel60.pret;

            return pretTotal.toFixed(2); // Afișăm doar 5 zecimale pentru preț
          }
        }
        if (checkBoxMotor) {
          if (inaltime >= 0.5 && inaltime <= 2.4) {
            let pretTotal =
              latime * selectedProduct.D165.TocRulouTencuibil165pe20.pret +
              latime * selectedProduct.D165.SinaTencuibilaPanelService.pret +
              latime * selectedProduct.D165.PanelService165pe20.pret +
              latime * selectedProduct.D165.PolistirenExtrudat.pret +
              (parseFloat(latime) - 0.05) *
                selectedProduct.D165.AxOctogonal40.pret +
              ((parseFloat(inaltime) * 100) / 3.9) *
                (parseFloat(latime) - 0.05) *
                selectedProduct.D165.LamelaAluminiu.pret +
              (parseFloat(latime) - 0.05) *
                selectedProduct.D165.LamelaTerminala.pret +
              (parseFloat(latime) - 0.05) *
                selectedProduct.D165.GarnituraDeContact.pret +
              (parseFloat(inaltime) - 0.1) *
                2 *
                selectedProduct.D165.GhidajAlu.pret +
              (parseFloat(inaltime) - 0.1) *
                4 *
                selectedProduct.D165.PerieGhidaj.pret +
              1 * selectedProduct.D165.CapacLateral165pe20.pret +
              1 * selectedProduct.D165.Fulie165.pret +
              1 * selectedProduct.D165.Dop40.pret +
              2 * selectedProduct.D165.Rulment.pret +
              6 * selectedProduct.D165.Snur.pret +
              1 * selectedProduct.D165.PalnieGhidaj.pret +
              9 * selectedProduct.D165.OrnamentPlastic.pret +
              1 * selectedProduct.D165.RolaPlastic.pret +
              1 * selectedProduct.D165.ArcCilindric.pret +
              1 * selectedProduct.D165.Automat.pret +
              2 * selectedProduct.D165.OpritorAscuns.pret +
              64 * selectedProduct.D165.Arriter.pret;

            if (parseFloat(latime) <= 1) {
              pretTotal += 3 * selectedProduct.D165.AgatatorCovor170.pret;
            } else if (parseFloat(latime) > 1 && parseFloat(latime) <= 1.5) {
              pretTotal += 4 * selectedProduct.D165.AgatatorCovor170.pret;
            } else if (parseFloat(latime) > 1.5 && parseFloat(latime) <= 2) {
              pretTotal += 5 * selectedProduct.D165.AgatatorCovor170.pret;
            } else pretTotal += 6 * selectedProduct.D165.AgatatorCovor170.pret;

            if (parseFloat(latime) <= 1) {
              pretTotal += 3 * selectedProduct.D165.Inel40.pret;
            } else if (parseFloat(latime) > 1 && parseFloat(latime) <= 1.5) {
              pretTotal += 4 * selectedProduct.D165.Inel40.pret;
            } else if (parseFloat(latime) > 1.5 && parseFloat(latime) <= 2) {
              pretTotal += 5 * selectedProduct.D165.Inel40.pret;
            } else pretTotal += 6 * selectedProduct.D165.Inel40.pret;
            if (
              selectedMotorSomfySmart === '71' ||
              selectedMotorSomfySmart === '118' ||
              selectedMotorSomfySmart === '80' ||
              selectedMotorSomfySmart === '130'
            ) {
              pretTotal += parseFloat(selectedMotorSomfySmart); // Adaugă valoarea pentru Somfy
            } else if (
              selectedMotorSomfySmart === '68' ||
              selectedMotorSomfySmart === '84' ||
              selectedMotorSomfySmart === '85' ||
              selectedMotorSomfySmart === '110'
            ) {
              pretTotal += parseFloat(selectedMotorSomfySmart); // Adaugă valoarea pentru Smart
            }
            return pretTotal.toFixed(2); // Afișăm doar 5 zecimale pentru preț
          }
          if (inaltime >= 0.5 && inaltime <= 2.9) {
            let pretTotal =
              latime * selectedProduct.D180.TocRulouTencuibil165pe20.pret +
              latime * selectedProduct.D180.SinaTencuibilaPanelService.pret +
              latime * selectedProduct.D180.PanelService165pe20.pret +
              latime * selectedProduct.D180.PolistirenExtrudat.pret +
              (parseFloat(latime) - 0.05) *
                selectedProduct.D180.AxOctogonal60.pret +
              ((parseFloat(inaltime) * 100) / 3.9) *
                (parseFloat(latime) - 0.05) *
                selectedProduct.D180.LamelaAluminiu.pret +
              (parseFloat(latime) - 0.05) *
                selectedProduct.D180.LamelaTerminala.pret +
              (parseFloat(latime) - 0.05) *
                selectedProduct.D180.GarnituraDeContact.pret +
              (parseFloat(inaltime) - 0.1) *
                2 *
                selectedProduct.D180.GhidajAlu.pret +
              (parseFloat(inaltime) - 0.1) *
                4 *
                selectedProduct.D180.PerieGhidaj.pret +
              1 * selectedProduct.D180.CapacLateral165pe20.pret +
              1 * selectedProduct.D180.Fulie165.pret +
              1 * selectedProduct.D180.Dop60.pret +
              2 * selectedProduct.D180.Rulment.pret +
              6 * selectedProduct.D180.Snur.pret +
              1 * selectedProduct.D180.PalnieGhidaj.pret +
              9 * selectedProduct.D180.OrnamentPlastic.pret +
              1 * selectedProduct.D180.RolaPlastic.pret +
              1 * selectedProduct.D180.ArcCilindric.pret +
              1 * selectedProduct.D180.Automat.pret +
              2 * selectedProduct.D180.OpritorAscuns.pret +
              64 * selectedProduct.D180.Arriter.pret;

            if (parseFloat(latime) <= 1) {
              pretTotal += 3 * selectedProduct.D180.AgatatorCovor170.pret;
            } else if (parseFloat(latime) > 1 && parseFloat(latime) <= 1.5) {
              pretTotal += 4 * selectedProduct.D180.AgatatorCovor170.pret;
            } else if (parseFloat(latime) > 1.5 && parseFloat(latime) <= 2) {
              pretTotal += 5 * selectedProduct.D180.AgatatorCovor170.pret;
            } else pretTotal += 6 * selectedProduct.D180.AgatatorCovor170.pret;

            if (parseFloat(latime) <= 1) {
              pretTotal += 3 * selectedProduct.D180.Inel60.pret;
            } else if (parseFloat(latime) > 1 && parseFloat(latime) <= 1.5) {
              pretTotal += 4 * selectedProduct.D180.Inel60.pret;
            } else if (parseFloat(latime) > 1.5 && parseFloat(latime) <= 2) {
              pretTotal += 5 * selectedProduct.D180.Inel60.pret;
            } else pretTotal += 6 * selectedProduct.D180.Inel60.pret;
            if (
              selectedMotorSomfySmart === '71' ||
              selectedMotorSomfySmart === '118' ||
              selectedMotorSomfySmart === '80' ||
              selectedMotorSomfySmart === '130'
            ) {
              pretTotal += parseFloat(selectedMotorSomfySmart); // Adaugă valoarea pentru Somfy
            } else if (
              selectedMotorSomfySmart === '68' ||
              selectedMotorSomfySmart === '84' ||
              selectedMotorSomfySmart === '85' ||
              selectedMotorSomfySmart === '110'
            ) {
              pretTotal += parseFloat(selectedMotorSomfySmart); // Adaugă valoarea pentru Smart
            }
            return pretTotal.toFixed(2); // Afișăm doar 5 zecimale pentru preț
          }
        }
      }
    }
    return 0;
  };

  const calculPretTotalCuAdaos = () => {
    const pretInitial = calculPretTotal();
    const valoareAdaos = adaos || 0; // Presupun că ai această variabilă definită undeva în codul tău

    // Asigură-te că pretInitial și valoareAdaos sunt numere
    const pretInitialNumeric = parseFloat(pretInitial);
    const valoareAdaosNumeric = parseFloat(valoareAdaos);

    if (isNaN(pretInitialNumeric) || isNaN(valoareAdaosNumeric)) {
      return pretInitial;
    }

    // Calculează pretFinal ca un număr, nu ca un șir de caractere
    const pretFinal =
      pretInitialNumeric + (pretInitialNumeric * valoareAdaosNumeric) / 100;

    // Utilizează toFixed pentru a afișa doar două zecimale
    return pretFinal.toFixed(2) + ' EUR';
  };

  return (
    <Container
      maxWidth="xxl"
      sx={{
        mt: 10,
        backgroundColor: '#f9f9fb',
        height: '100lvh',
      }}
    >
      <form onSubmit={createHandler}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={6}
            sx={{
              backgroundColor: '#fff',
              marginLeft: 'auto',
              marginRight: '5px',
              padding: '20px',
            }}
          >
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="subtitle1" style={{ color: '#06386a' }}>
                  Informații despre produs
                </Typography>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <FormControl sx={{ mt: 2 }} fullWidth>
                    <InputLabel id="selecteazaCuloare">
                      Selectează culoarea produsului
                    </InputLabel>
                    <Select
                      labelId="selecteazaColuare"
                      id="selecteazaCuloare"
                      label="Selectează culoarea produsului"
                      value={selectedCuloare}
                      onChange={(event) => {
                        handleChangeColor(event);
                        setCuloare(event.target.value);
                      }}
                    >
                      {culoareUnica.map((color, index) => (
                        <MenuItem key={`${color}_${index}`} value={color}>
                          {color}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl sx={{ mt: 2 }} fullWidth>
                    <InputLabel id="selecteazaProdus">
                      Selectează un produs
                    </InputLabel>
                    <Select
                      labelId="selecteazaProdus"
                      id="selecteazaProdus"
                      label="Selectează un produs"
                      value={selectedProdus}
                      onChange={(event) => {
                        handleChangeProduct(event);
                        const selectedProduct = filteredProducts.find(
                          (produs) => produs._id === event.target.value
                        );
                        setProdus(selectedProduct ? selectedProduct.Nume : '');
                      }}
                    >
                      {selectedCuloare ? (
                        filteredProducts.map((produs) => (
                          <MenuItem key={produs._id} value={produs._id}>
                            {produs.Nume}
                          </MenuItem>
                        ))
                      ) : (
                        <MenuItem disabled>Selectati culoarea</MenuItem>
                      )}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <FormGroup>
                    <TextField
                      controlid="latime"
                      sx={{ mt: 2 }}
                      id="latime"
                      label="Lațime"
                      value={latime}
                      variant="outlined"
                      onChange={(e) => setLatime(e.target.value)}
                    />
                  </FormGroup>
                </Grid>
                <Grid item xs={6}>
                  <FormGroup>
                    <TextField
                      controlid="inaltime"
                      sx={{ mt: 2 }}
                      id="inaltime"
                      label="Inaltime"
                      value={inaltime}
                      variant="outlined"
                      onChange={(e) => setInaltime(e.target.value)}
                    />
                  </FormGroup>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  mt: 2,
                  backgroundColor: '#fff',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography variant="subtitle1" style={{ color: '#06386a' }}>
                  Configurare produs
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} sx={{ mb: 1 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(event) => {
                        handleCheckBoxExcludeD137(event);
                        setBalcon(event.target.checked);
                      }}
                    />
                  }
                  label="Balcon împărțit"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleCheckBoxManual}
                      checked={checkBoxManual}
                    />
                  }
                  label="Acționare manuală"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleCheckBoxMotor}
                      checked={checkBoxMotor}
                    />
                  }
                  label="Acționare automată"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="actionareInterior">
                    Actionare din interior
                  </InputLabel>
                  <Select
                    labelId="actionareInterior"
                    id="actionareInterior"
                    label="Acționare din interior"
                    value={actionareInterior}
                    onChange={(event) => {
                      handleChangeActionareInterior(event);
                      setActionareInterior(event.target.value);
                    }}
                  >
                    <MenuItem value={'stanga'}>Stanga</MenuItem>
                    <MenuItem value={'dreapta'}>Dreapta</MenuItem>
                  </Select>
                </FormControl>
                {checkBoxManual && (
                  <FormControl sx={{ mt: 2 }} fullWidth>
                    <InputLabel id="bandaSnur">Alege banda sau snur</InputLabel>
                    <Select
                      labelId="bandaSnur"
                      id="bandaSnur"
                      label="Alege banda sau șnur"
                      value={bandaSnur}
                      onChange={(event) => {
                        handleChangeBandaSnur(event);
                        setBandaSnur(event.target.value);
                      }}
                    >
                      <MenuItem value={'banda'}>Banda</MenuItem>
                      <MenuItem value={'snur'}>Snur</MenuItem>
                    </Select>
                  </FormControl>
                )}
                {checkBoxMotor && (
                  <FormControl sx={{ mt: 2 }} fullWidth>
                    <InputLabel id="alegeMotor">
                      Alege tipul de motor
                    </InputLabel>
                    <Select
                      labelId="alegeMotor"
                      id="alegeMotor"
                      label="Alege tipul de motor"
                      value={selectedMotor}
                      onChange={(event) => {
                        handleChangeSelectedMotor(event);
                        setTipMotor(event.target.value);
                      }}
                    >
                      <MenuItem value={'somfy'}>Somfy</MenuItem>
                      <MenuItem value={'smart'}>Smart</MenuItem>
                    </Select>
                  </FormControl>
                )}
                {checkBoxMotor && selectedMotor && (
                  <FormControl sx={{ mt: 2 }} fullWidth>
                    <InputLabel id="somfySmart">
                      Alege întrerupator sau telecomandă
                    </InputLabel>
                    <Select
                      labelId="somfySmart"
                      id="somfySmart"
                      label="Alege intrerupator sau telecomanda"
                      value={selectedMotorSomfySmart}
                      onChange={(event) => {
                        handleChangeSelectedMotorSomfySmart(event);
                        setActionareMotor(event.target.value);
                      }}
                    >
                      {selectedMotor === 'somfy' && inaltime * latime <= 4.3
                        ? [
                            <MenuItem key="71" value="71">
                              Întrerupator
                            </MenuItem>,
                            <MenuItem key="118" value="118">
                              Telecomandă
                            </MenuItem>,
                            <MenuItem disabled>
                              Pentru mai multe opțiuni, vă rugăm să ne
                              contactați
                            </MenuItem>,
                          ]
                        : selectedMotor === 'somfy' && inaltime * latime > 4.3
                        ? [
                            <MenuItem key="80" value="80">
                              Întrerupator
                            </MenuItem>,
                            <MenuItem key="130" value="130">
                              Telecomandă
                            </MenuItem>,
                            <MenuItem disabled>
                              Pentru mai multe opțiuni, vă rugăm să ne
                              contactați
                            </MenuItem>,
                          ]
                        : null}

                      {selectedMotor === 'smart' && inaltime * latime <= 4.3
                        ? [
                            <MenuItem key="68" value="68">
                              Întrerupator
                            </MenuItem>,
                            <MenuItem key="84" value="84">
                              Telecomandă
                            </MenuItem>,
                            <MenuItem disabled>
                              Pentru mai multe opțiuni, vă rugăm să ne
                              contactați
                            </MenuItem>,
                          ]
                        : selectedMotor === 'smart' && inaltime * latime > 4.3
                        ? [
                            <MenuItem key="85" value="85">
                              Întrerupator
                            </MenuItem>,
                            <MenuItem key="110" value="110">
                              Telecomandă
                            </MenuItem>,
                            <MenuItem disabled>
                              Pentru mai multe opțiuni, vă rugăm să ne
                              contactați
                            </MenuItem>,
                          ]
                        : null}
                    </Select>
                  </FormControl>
                )}
                <FormGroup>
                  <TextField
                    controlid="mentiuni"
                    sx={{ mt: 2 }}
                    id="mentiuni"
                    label="Mentiuni"
                    value={mentiuni}
                    variant="outlined"
                    multiline
                    onChange={(e) => setMentiuni(e.target.value)}
                  />
                </FormGroup>
                {userInfo && userInfo.isAdmin ? (
                  <FormGroup>
                    <TextField
                      controlid="Adaos"
                      sx={{ mt: 2 }}
                      id="adaos"
                      label="Adaos în procent"
                      value={adaos}
                      variant="outlined"
                      multiline
                      onChange={(e) => setAdaos(e.target.value)}
                    />
                  </FormGroup>
                ) : (
                  ''
                )}
                <Typography
                  variant="subtitle1"
                  sx={{ color: '#06386a', mt: 2 }}
                >
                  Preț rulou: {calculPretTotalCuAdaos()}
                </Typography>
                <Button
                  type="submit"
                  variant="contained"
                  onClick={createHandler}
                  sx={{
                    mt: 2,
                    backgroundColor: '#06386a',
                    '&:hover': {
                      backgroundColor: '#003c7f',
                    },
                  }}
                >
                  Adaugă la comandă
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={3}
            sx={{
              backgroundColor: '#fff',
              marginRight: 'auto',
              marginLeft: '5px',
              flexDirection: 'column',
            }}
          >
            <Box>
              <Typography
                variant="subtitle1"
                sx={{ textAlign: 'center', fontWeight: 'bold' }}
              >
                Comanda ta:
              </Typography>
              <Box
                sx={{
                  overflowY: 'auto',
                  maxHeight: '400px',
                }}
              >
                {carts.length > 0 ? (
                  carts.map((item) => (
                    <Box key={item.produsId}>
                      <Typography
                        sx={{ mt: 2, fontWeight: 'bold' }}
                        key={item.produsId}
                      >
                        {item.produs}
                        <Button
                          sx={{ ml: 2, color: 'red' }}
                          onClick={() => handleDeleteProduct(item)}
                        >
                          <HighlightOffIcon />
                        </Button>
                      </Typography>
                      <Box>
                        <Box sx={{ ml: '10px' }}>
                          <Typography key={item.produsId}>
                            Culoare: {item.culoare}
                          </Typography>
                          <Typography key={item.produsId}>
                            Înaltime: {item.inaltime} m
                          </Typography>
                          <Typography key={item.produsId}>
                            Lătime: {item.latime} m
                          </Typography>{' '}
                          {userInfo && userInfo.isAdmin ? (
                            <Typography key={item.produsId}>
                              Adaos: {item.adaos} %
                            </Typography>
                          ) : (
                            ''
                          )}
                          <Typography
                            sx={{ fontWeight: 'bold' }}
                            key={item.produsId}
                          >
                            Pret: {item.pret} EUR
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  ))
                ) : (
                  <Typography
                    variant="subtitle1"
                    sx={{ textAlign: 'center', fontWeight: 'bold' }}
                  >
                    Niciun produs adăugat în comandă
                  </Typography>
                )}
              </Box>
            </Box>
            <Box sx={{ marginTop: 'auto' }}>
              {carts.length > 0 && (
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ textAlign: 'right', fontWeight: 'bold', mr: 2 }}
                  >
                    TOTAL: {total} EUR
                  </Typography>
                  <Button
                    type="submit"
                    onClick={() => navigate(`/finalizeaza`)}
                    variant="contained"
                    sx={{
                      width: '96%',
                      mt: 1,
                      backgroundColor: '#06386a',
                      '&:hover': {
                        backgroundColor: '#003c7f',
                      },
                    }}
                  >
                    Finalizează comanda
                  </Button>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default CalculatorRulouriTencuibilePage;
