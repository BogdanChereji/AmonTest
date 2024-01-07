import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Store } from '../Store';
import { getError } from '../utils';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import {
  Button,
  Container,
  FormControl,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { toast } from 'react-toastify';
import { LocalConvenienceStoreOutlined } from '@material-ui/icons';

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

export default function ProdusEditPage() {
  const { state } = useContext(Store);
  const { userInfo } = state;
  const params = useParams();
  const { id: produsId } = params;
  const [{ loading, error }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
  });
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // sau alt breakpoint în loc de 'sm' după necesitate

  const [Nume, setNume] = useState('');
  const [NumeCuloare, setNumeCuloare] = useState('');
  const [D137, setD137] = useState({
    aluFata: {
      pret: '',
    },
    aluSpate: {
      pret: '',
    },
    lamelaAlu: {
      pret: '',
    },
    lamelaTerminala: {
      pret: '',
    },
    garnituraDeContact: {
      pret: '',
    },
    axOctogonal40: {
      pret: '',
    },
    ghidajAlu: {
      pret: '',
    },
    perieGhidaj: {
      pret: '',
    },
    agatatorCovor130: {
      pret: '',
    },
    inel40: {
      pret: '',
    },
    capacLateral: {
      pret: '',
    },
    fulie120: {
      pret: '',
    },
    dop: {
      pret: '',
    },
    rulment: {
      pret: '',
    },
    snur: {
      pret: '',
    },
    automat: {
      pret: '',
    },
    opritorAscuns: {
      pret: '',
    },
    palnieGhidaj: {
      pret: '',
    },
    ornamentPlastic: {
      pret: '',
    },
    rolaPlasticCuCilindru: {
      pret: '',
    },
    arcCilindru: {
      pret: '',
    },
    arriter: {
      pret: '',
    },
  });
  const [D165, setD165] = useState({
    aluFata: {
      pret: '',
    },
    aluSpate: {
      pret: '',
    },
    lamelaAlu: {
      pret: '',
    },
    lamelaTerminala: {
      pret: '',
    },
    garnituraDeContact: {
      pret: '',
    },
    axOctogonal40: {
      pret: '',
    },
    ghidajAlu: {
      pret: '',
    },
    perieGhidaj: {
      pret: '',
    },
    agatatorCovor170: {
      pret: '',
    },
    inel40: {
      pret: '',
    },
    capacLateral: {
      pret: '',
    },
    fulie165: {
      pret: '',
    },
    dop: {
      pret: '',
    },
    rulment: {
      pret: '',
    },
    snur: {
      pret: '',
    },
    automat: {
      pret: '',
    },
    opritorAscuns: {
      pret: '',
    },
    palnieGhidaj: {
      pret: '',
    },
    ornamentPlastic: {
      pret: '',
    },
    rolaPlasticCuCilindru: {
      pret: '',
    },
    arcCilindru: {
      pret: '',
    },
    arriter: {
      pret: '',
    },
  });
  const [D180, setD180] = useState({
    aluFata: {
      pret: '',
    },
    aluSpate: {
      pret: '',
    },
    lamelaAlu: {
      pret: '',
    },
    lamelaTerminala: {
      pret: '',
    },
    garnituraDeContact: {
      pret: '',
    },
    axOctogonal60: {
      pret: '',
    },
    ghidajAlu: {
      pret: '',
    },
    perieGhidaj: {
      pret: '',
    },
    agatatorCovor170: {
      pret: '',
    },
    inel60: {
      pret: '',
    },
    capacLateral: {
      pret: '',
    },
    fulie180: {
      pret: '',
    },
    dop60: {
      pret: '',
    },
    rulment: {
      pret: '',
    },
    snur: {
      pret: '',
    },
    automat: {
      pret: '',
    },
    opritorAscuns: {
      pret: '',
    },
    palnieGhidaj: {
      pret: '',
    },
    ornamentPlastic: {
      pret: '',
    },
    rolaPlasticCuCilindru: {
      pret: '',
    },
    arcCilindru: {
      pret: '',
    },
    arriter: {
      pret: '',
    },
    reductie: {
      pret: '',
    },
  });
  const [D205, setD205] = useState({
    aluFata: {
      pret: '',
    },
    aluSpate: {
      pret: '',
    },
    lamelaAlu: {
      pret: '',
    },
    lamelaTerminala: {
      pret: '',
    },
    garnituraDeContact: {
      pret: '',
    },
    axOctogonal60: {
      pret: '',
    },
    ghidajAlu: {
      pret: '',
    },
    perieGhidaj: {
      pret: '',
    },
    agatatorCovor170: {
      pret: '',
    },
    inel60: {
      pret: '',
    },
    capacLateral: {
      pret: '',
    },
    fulie180: {
      pret: '',
    },
    dop60: {
      pret: '',
    },
    rulment: {
      pret: '',
    },
    snur: {
      pret: '',
    },
    automat: {
      pret: '',
    },
    opritorAscuns: {
      pret: '',
    },
    palnieGhidaj: {
      pret: '',
    },
    ornamentPlastic: {
      pret: '',
    },
    rolaPlasticCuCilindru: {
      pret: '',
    },
    arcCilindru: {
      pret: '',
    },
    arriter: {
      pret: '',
    },
    reductie: {
      pret: '',
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/api/produse/${produsId}`);
        console.log('Date primite de la server:', data);
        setNume(data.Nume);
        setNumeCuloare(data.NumeCuloare);

        // Verificăm dacă cheia aluFata există în data și este definită
        if (data.aluFata && data.aluFata.pret) {
          setD137({
            aluFata: {
              pret: data.aluFata.pret,
            },
            // ... alte chei
          });
        } else {
          console.error(
            'Cheia aluFata lipsește sau este undefined în datele primite de la server'
          );
        }
      } catch (err) {
        console.error('Eroare la preluarea datelor', err);
      }
    };
    fetchData();
  }, [produsId]);

  return (
    <Container
      maxWidth="lg"
      sx={{
        backgroundColor: '#f9f9fb',
        height: '100vh',
      }}
    >
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              sx={{
                color: '#06386a',
                textAlign: 'left',
                fontWeight: 'regular',
                '@media (max-width: 800px)': {
                  textAlign: 'center',
                },
              }}
              variant="h5"
              noWrap
              component="div"
            >
              Adaugă produs nou
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              <TextField
                controlid="numeProdus"
                id="numeProdus"
                required
                label="Introduceți numele produsului"
                variant="outlined"
                value={Nume}
                onChange={(e) => setNume(e.target.value)}
              />
              <FormControl type="text" />
            </FormGroup>
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              <TextField
                controlid="numeCuloareC1"
                id="numeCuloareC1"
                label="Introduceți culoarea produsului"
                variant="outlined"
                value={NumeCuloare}
                onChange={(e) => setNumeCuloare(e.target.value)}
              />
              <FormControl type="text" />
            </FormGroup>
          </Grid>
          <Grid item xs={isSmallScreen ? 12 : 3}>
            <Typography> D137</Typography>
            <FormGroup>
              <TextField
                controlid="aluFataC1D137"
                sx={{ mt: 2 }}
                id="aluFataC1D137"
                label="Introduceți aluFata"
                variant="outlined"
                value={D137.aluFata.pret}
                onChange={(e) =>
                  setD137((prevState) => ({
                    ...prevState,
                    aluFata: {
                      ...prevState.aluFata,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="aluSpateC1D137"
                sx={{ mt: 2 }}
                id="aluSpateC1D137"
                label="Introduceți aluSpate"
                variant="outlined"
                value={D137.aluSpate.pret}
                onChange={(e) =>
                  setD137((prevState) => ({
                    ...prevState,
                    aluSpate: {
                      ...prevState.aluSpate,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="lamelaAluC1D137"
                sx={{ mt: 2 }}
                id="lamelaAluC1D137"
                label="Introduceți lamelaAlu"
                variant="outlined"
                value={D137.lamelaAlu.pret}
                onChange={(e) =>
                  setD137((prevState) => ({
                    ...prevState,
                    lamelaAlu: {
                      ...prevState.lamelaAlu,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="lamelaTerminalaC1D137"
                sx={{ mt: 2 }}
                id="lamelaTerminalaC1D137"
                label="Introduceți lamelaTerminala"
                variant="outlined"
                value={D137.lamelaTerminala.pret}
                onChange={(e) =>
                  setD137((prevState) => ({
                    ...prevState,
                    lamelaTerminala: {
                      ...prevState.lamelaTerminala,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="garnituraDeContactC1D137"
                sx={{ mt: 2 }}
                id="garnituraDeContactC1D137"
                label="Introduceți garnituraDeContact"
                variant="outlined"
                value={D137.garnituraDeContact.pret}
                onChange={(e) =>
                  setD137((prevState) => ({
                    ...prevState,
                    garnituraDeContact: {
                      ...prevState.garnituraDeContact,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="axOctogonal40C1D137"
                sx={{ mt: 2 }}
                id="axOctogonal40C1D137"
                label="Introduceți axOctogonal40"
                variant="outlined"
                value={D137.axOctogonal40.pret}
                onChange={(e) =>
                  setD137((prevState) => ({
                    ...prevState,
                    axOctogonal40: {
                      ...prevState.axOctogonal40,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="ghidajAluC1D137"
                sx={{ mt: 2 }}
                id="ghidajAluC1D137"
                label="Introduceți ghidajAlu"
                variant="outlined"
                value={D137.ghidajAlu.pret}
                onChange={(e) =>
                  setD137((prevState) => ({
                    ...prevState,
                    ghidajAlu: {
                      ...prevState.ghidajAlu,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="perieGhidajC1D137"
                sx={{ mt: 2 }}
                id="perieGhidajC1D137"
                label="Introduceți perieGhidaj"
                variant="outlined"
                value={D137.perieGhidaj.pret}
                onChange={(e) =>
                  setD137((prevState) => ({
                    ...prevState,
                    perieGhidaj: {
                      ...prevState.perieGhidaj,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="agatatorCovor130C1D137"
                sx={{ mt: 2 }}
                id="agatatorCovor130C1D137"
                label="Introduceți agatatorCovor130"
                variant="outlined"
                value={D137.agatatorCovor130.pret}
                onChange={(e) =>
                  setD137((prevState) => ({
                    ...prevState,
                    agatatorCovor130: {
                      ...prevState.agatatorCovor130,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="inel40C1D137"
                sx={{ mt: 2 }}
                id="inel40C1D137"
                label="Introduceți inel40"
                variant="outlined"
                value={D137.inel40.pret}
                onChange={(e) =>
                  setD137((prevState) => ({
                    ...prevState,
                    inel40: {
                      ...prevState.inel40,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="capacLateralC1D137"
                sx={{ mt: 2 }}
                id="capacLateralC1D137"
                label="Introduceți capacLateral"
                variant="outlined"
                value={D137.capacLateral.pret}
                onChange={(e) =>
                  setD137((prevState) => ({
                    ...prevState,
                    capacLateral: {
                      ...prevState.capacLateral,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="fulie120C1D137"
                sx={{ mt: 2 }}
                id="fulie120C1D137"
                label="Introduceți fulie120"
                variant="outlined"
                value={D137.fulie120.pret}
                onChange={(e) =>
                  setD137((prevState) => ({
                    ...prevState,
                    fulie120: {
                      ...prevState.fulie120,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="dopC1D137"
                sx={{ mt: 2 }}
                id="dopC1D137"
                label="Introduceți dop"
                variant="outlined"
                value={D137.dop.pret}
                onChange={(e) =>
                  setD137((prevState) => ({
                    ...prevState,
                    dop: {
                      ...prevState.dop,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="rulmentC1D137"
                sx={{ mt: 2 }}
                id="rulmentC1D137"
                label="Introduceți rulment"
                variant="outlined"
                value={D137.rulment.pret}
                onChange={(e) =>
                  setD137((prevState) => ({
                    ...prevState,
                    rulment: {
                      ...prevState.rulment,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="snurC1D137"
                sx={{ mt: 2 }}
                id="snurC1D137"
                label="Introduceți snur"
                variant="outlined"
                value={D137.snur.pret}
                onChange={(e) =>
                  setD137((prevState) => ({
                    ...prevState,
                    snur: {
                      ...prevState.snur,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="automatC1D137"
                sx={{ mt: 2 }}
                id="automatC1D137"
                label="Introduceți automat"
                variant="outlined"
                value={D137.automat.pret}
                onChange={(e) =>
                  setD137((prevState) => ({
                    ...prevState,
                    automat: {
                      ...prevState.automat,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="opritorAscunsC1D137"
                sx={{ mt: 2 }}
                id="opritorAscunsC1D137"
                label="Introduceți opritorAscuns"
                variant="outlined"
                value={D137.opritorAscuns.pret}
                onChange={(e) =>
                  setD137((prevState) => ({
                    ...prevState,
                    opritorAscuns: {
                      ...prevState.opritorAscuns,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="palnieGhidajC1D137"
                sx={{ mt: 2 }}
                id="palnieGhidajC1D137"
                label="Introduceți palnieGhidaj"
                variant="outlined"
                value={D137.palnieGhidaj.pret}
                onChange={(e) =>
                  setD137((prevState) => ({
                    ...prevState,
                    palnieGhidaj: {
                      ...prevState.palnieGhidaj,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="ornamentPlasticC1D137"
                sx={{ mt: 2 }}
                id="ornamentPlasticC1D137"
                label="Introduceți ornamentPlastic"
                variant="outlined"
                value={D137.ornamentPlastic.pret}
                onChange={(e) =>
                  setD137((prevState) => ({
                    ...prevState,
                    ornamentPlastic: {
                      ...prevState.ornamentPlastic,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="rolaPlasticCuCilindruC1D137"
                sx={{ mt: 2 }}
                id="rolaPlasticCuCilindruC1D137"
                label="Introduceți rolaPlasticCuCilindru"
                variant="outlined"
                value={D137.rolaPlasticCuCilindru.pret}
                onChange={(e) =>
                  setD137((prevState) => ({
                    ...prevState,
                    rolaPlasticCuCilindru: {
                      ...prevState.rolaPlasticCuCilindru,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="oarcCilindruC1D137"
                sx={{ mt: 2 }}
                id="arcCilindruC1D137"
                label="Introduceți arcCilindru"
                variant="outlined"
                value={D137.arcCilindru.pret}
                onChange={(e) =>
                  setD137((prevState) => ({
                    ...prevState,
                    arcCilindru: {
                      ...prevState.arcCilindru,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="arriterC1D137"
                sx={{ mt: 2 }}
                id="arriterC1D137"
                label="Introduceți arriter"
                variant="outlined"
                value={D137.arriter.pret}
                onChange={(e) =>
                  setD137((prevState) => ({
                    ...prevState,
                    arriter: {
                      ...prevState.arriter,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
          </Grid>
          <Grid item xs={isSmallScreen ? 12 : 3}>
            {' '}
            <Typography> D165</Typography>
            <FormGroup>
              <TextField
                controlid="aluFataC1D165"
                sx={{ mt: 2 }}
                id="aluFataC1D165"
                label="Introduceți aluFata"
                variant="outlined"
                value={D165.aluFata.pret}
                onChange={(e) =>
                  setD165((prevState) => ({
                    ...prevState,
                    aluFata: {
                      ...prevState.aluFata,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="aluSpateC1D165"
                sx={{ mt: 2 }}
                id="aluSpateC1D165"
                label="Introduceți aluSpate"
                variant="outlined"
                value={D165.aluSpate.pret}
                onChange={(e) =>
                  setD165((prevState) => ({
                    ...prevState,
                    aluSpate: {
                      ...prevState.aluSpate,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="lamelaAluC1D165"
                sx={{ mt: 2 }}
                id="lamelaAluC1D165"
                label="Introduceți lamelaAlu"
                variant="outlined"
                value={D165.lamelaAlu.pret}
                onChange={(e) =>
                  setD165((prevState) => ({
                    ...prevState,
                    lamelaAlu: {
                      ...prevState.lamelaAlu,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="lamelaTerminalaC1D165"
                sx={{ mt: 2 }}
                id="lamelaTerminalaC1D165"
                label="Introduceți lamelaTerminala"
                variant="outlined"
                value={D165.lamelaTerminala.pret}
                onChange={(e) =>
                  setD165((prevState) => ({
                    ...prevState,
                    lamelaTerminala: {
                      ...prevState.lamelaTerminala,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="garnituraDeContactC1D165"
                sx={{ mt: 2 }}
                id="garnituraDeContactC1D165"
                label="Introduceți garnituraDeContact"
                variant="outlined"
                value={D165.garnituraDeContact.pret}
                onChange={(e) =>
                  setD165((prevState) => ({
                    ...prevState,
                    garnituraDeContact: {
                      ...prevState.garnituraDeContact,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="axOctogonal40C1D165"
                sx={{ mt: 2 }}
                id="axOctogonal40C1D165"
                label="Introduceți axOctogonal40"
                variant="outlined"
                value={D165.axOctogonal40.pret}
                onChange={(e) =>
                  setD165((prevState) => ({
                    ...prevState,
                    axOctogonal40: {
                      ...prevState.axOctogonal40,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="ghidajAluC1D165"
                sx={{ mt: 2 }}
                id="ghidajAluC1D165"
                label="Introduceți ghidajAlu"
                variant="outlined"
                value={D165.ghidajAlu.pret}
                onChange={(e) =>
                  setD165((prevState) => ({
                    ...prevState,
                    ghidajAlu: {
                      ...prevState.ghidajAlu,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="perieGhidajC1D165"
                sx={{ mt: 2 }}
                id="perieGhidajC1D165"
                label="Introduceți perieGhidaj"
                variant="outlined"
                value={D165.perieGhidaj.pret}
                onChange={(e) =>
                  setD165((prevState) => ({
                    ...prevState,
                    perieGhidaj: {
                      ...prevState.perieGhidaj,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="agatatorCovor130C1D165"
                sx={{ mt: 2 }}
                id="agatatorCovor170C1D165"
                label="Introduceți agatatorCovor170"
                variant="outlined"
                value={D165.agatatorCovor170.pret}
                onChange={(e) =>
                  setD165((prevState) => ({
                    ...prevState,
                    agatatorCovor170: {
                      ...prevState.agatatorCovor170,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="inel40C1D165"
                sx={{ mt: 2 }}
                id="inel40C1D165"
                label="Introduceți inel40"
                variant="outlined"
                value={D165.inel40.pret}
                onChange={(e) =>
                  setD165((prevState) => ({
                    ...prevState,
                    inel40: {
                      ...prevState.inel40,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="capacLateralC1D165"
                sx={{ mt: 2 }}
                id="capacLateralC1D165"
                label="Introduceți capacLateral"
                variant="outlined"
                value={D165.capacLateral.pret}
                onChange={(e) =>
                  setD165((prevState) => ({
                    ...prevState,
                    capacLateral: {
                      ...prevState.capacLateral,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="fulie165C1D165"
                sx={{ mt: 2 }}
                id="fulie165C1D165"
                label="Introduceți fulie165"
                variant="outlined"
                value={D165.fulie165.pret}
                onChange={(e) =>
                  setD165((prevState) => ({
                    ...prevState,
                    fulie165: {
                      ...prevState.fulie165,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="dopC1D165"
                sx={{ mt: 2 }}
                id="dopC1D165"
                label="Introduceți dop"
                variant="outlined"
                value={D165.dop.pret}
                onChange={(e) =>
                  setD165((prevState) => ({
                    ...prevState,
                    dop: {
                      ...prevState.dop,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="rulmentC1D165"
                sx={{ mt: 2 }}
                id="rulmentC1D165"
                label="Introduceți rulment"
                variant="outlined"
                value={D165.rulment.pret}
                onChange={(e) =>
                  setD165((prevState) => ({
                    ...prevState,
                    rulment: {
                      ...prevState.rulment,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="snurC1D165"
                sx={{ mt: 2 }}
                id="snurC1D165"
                label="Introduceți snur"
                variant="outlined"
                value={D165.snur.pret}
                onChange={(e) =>
                  setD165((prevState) => ({
                    ...prevState,
                    snur: {
                      ...prevState.snur,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="automatC1D165"
                sx={{ mt: 2 }}
                id="automatC1D165"
                label="Introduceți automat"
                variant="outlined"
                value={D165.automat.pret}
                onChange={(e) =>
                  setD165((prevState) => ({
                    ...prevState,
                    automat: {
                      ...prevState.automat,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="opritorAscunsC1D165"
                sx={{ mt: 2 }}
                id="opritorAscunsC1D165"
                label="Introduceți opritorAscuns"
                variant="outlined"
                value={D165.opritorAscuns.pret}
                onChange={(e) =>
                  setD165((prevState) => ({
                    ...prevState,
                    opritorAscuns: {
                      ...prevState.opritorAscuns,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="palnieGhidajC1D165"
                sx={{ mt: 2 }}
                id="palnieGhidajC1D165"
                label="Introduceți palnieGhidaj"
                variant="outlined"
                value={D165.palnieGhidaj.pret}
                onChange={(e) =>
                  setD165((prevState) => ({
                    ...prevState,
                    palnieGhidaj: {
                      ...prevState.palnieGhidaj,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="ornamentPlasticC1D165"
                sx={{ mt: 2 }}
                id="ornamentPlasticC1D165"
                label="Introduceți ornamentPlastic"
                variant="outlined"
                value={D165.ornamentPlastic.pret}
                onChange={(e) =>
                  setD165((prevState) => ({
                    ...prevState,
                    ornamentPlastic: {
                      ...prevState.ornamentPlastic,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="rolaPlasticCuCilindruC1D165"
                sx={{ mt: 2 }}
                id="rolaPlasticCuCilindruC1D165"
                label="Introduceți rolaPlasticCuCilindru"
                variant="outlined"
                value={D165.rolaPlasticCuCilindru.pret}
                onChange={(e) =>
                  setD165((prevState) => ({
                    ...prevState,
                    rolaPlasticCuCilindru: {
                      ...prevState.rolaPlasticCuCilindru,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="oarcCilindruC1D165"
                sx={{ mt: 2 }}
                id="arcCilindruC1D165"
                label="Introduceți arcCilindru"
                variant="outlined"
                value={D165.arcCilindru.pret}
                onChange={(e) =>
                  setD165((prevState) => ({
                    ...prevState,
                    arcCilindru: {
                      ...prevState.arcCilindru,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="arriterC1D165"
                sx={{ mt: 2 }}
                id="arriterC1D165"
                label="Introduceți arriter"
                variant="outlined"
                value={D165.arriter.pret}
                onChange={(e) =>
                  setD165((prevState) => ({
                    ...prevState,
                    arriter: {
                      ...prevState.arriter,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
          </Grid>
          <Grid item xs={isSmallScreen ? 12 : 3}>
            {' '}
            <Typography> D180</Typography>
            <FormGroup>
              <TextField
                controlid="aluFataC1D180"
                sx={{ mt: 2 }}
                id="aluFataC1D180"
                label="Introduceți aluFata"
                variant="outlined"
                value={D180.aluFata.pret}
                onChange={(e) =>
                  setD180((prevState) => ({
                    ...prevState,
                    aluFata: {
                      ...prevState.aluFata,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="aluSpateC1D180"
                sx={{ mt: 2 }}
                id="aluSpateC1D180"
                label="Introduceți aluSpate"
                variant="outlined"
                value={D180.aluSpate.pret}
                onChange={(e) =>
                  setD180((prevState) => ({
                    ...prevState,
                    aluSpate: {
                      ...prevState.aluSpate,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="lamelaAluC1D180"
                sx={{ mt: 2 }}
                id="lamelaAluC1D180"
                label="Introduceți lamelaAlu"
                variant="outlined"
                value={D180.lamelaAlu.pret}
                onChange={(e) =>
                  setD180((prevState) => ({
                    ...prevState,
                    lamelaAlu: {
                      ...prevState.lamelaAlu,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="lamelaTerminalaC1D180"
                sx={{ mt: 2 }}
                id="lamelaTerminalaC1D180"
                label="Introduceți lamelaTerminala"
                variant="outlined"
                value={D180.lamelaTerminala.pret}
                onChange={(e) =>
                  setD180((prevState) => ({
                    ...prevState,
                    lamelaTerminala: {
                      ...prevState.lamelaTerminala,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="garnituraDeContactC1D180"
                sx={{ mt: 2 }}
                id="garnituraDeContactC1D180"
                label="Introduceți garnituraDeContact"
                variant="outlined"
                value={D180.garnituraDeContact.pret}
                onChange={(e) =>
                  setD180((prevState) => ({
                    ...prevState,
                    garnituraDeContact: {
                      ...prevState.garnituraDeContact,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="axOctogonal60C1D180"
                sx={{ mt: 2 }}
                id="axOctogonal60C1D180"
                label="Introduceți axOctogonal60"
                variant="outlined"
                value={D180.axOctogonal60.pret}
                onChange={(e) =>
                  setD180((prevState) => ({
                    ...prevState,
                    axOctogonal60: {
                      ...prevState.axOctogonal60,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="ghidajAluC1D180"
                sx={{ mt: 2 }}
                id="ghidajAluC1D180"
                label="Introduceți ghidajAlu"
                variant="outlined"
                value={D180.ghidajAlu.pret}
                onChange={(e) =>
                  setD180((prevState) => ({
                    ...prevState,
                    ghidajAlu: {
                      ...prevState.ghidajAlu,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="perieGhidajC1D180"
                sx={{ mt: 2 }}
                id="perieGhidajC1D180"
                label="Introduceți perieGhidaj"
                variant="outlined"
                value={D180.perieGhidaj.pret}
                onChange={(e) =>
                  setD180((prevState) => ({
                    ...prevState,
                    perieGhidaj: {
                      ...prevState.perieGhidaj,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="agatatorCovor170C1D180"
                sx={{ mt: 2 }}
                id="agatatorCovor170C1D180"
                label="Introduceți agatatorCovor170"
                variant="outlined"
                value={D180.agatatorCovor170.pret}
                onChange={(e) =>
                  setD180((prevState) => ({
                    ...prevState,
                    agatatorCovor170: {
                      ...prevState.agatatorCovor170,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="inel60C1D180"
                sx={{ mt: 2 }}
                id="inel60C1D180"
                label="Introduceți inel60"
                variant="outlined"
                value={D180.inel60.pret}
                onChange={(e) =>
                  setD180((prevState) => ({
                    ...prevState,
                    inel60: {
                      ...prevState.inel60,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="capacLateralC1D180"
                sx={{ mt: 2 }}
                id="capacLateralC1D180"
                label="Introduceți capacLateral"
                variant="outlined"
                value={D180.capacLateral.pret}
                onChange={(e) =>
                  setD180((prevState) => ({
                    ...prevState,
                    capacLateral: {
                      ...prevState.capacLateral,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="fulie180C1D180"
                sx={{ mt: 2 }}
                id="fulie180C1D180"
                label="Introduceți fulie180"
                variant="outlined"
                value={D180.fulie180.pret}
                onChange={(e) =>
                  setD180((prevState) => ({
                    ...prevState,
                    fulie180: {
                      ...prevState.fulie180,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="dop60C1D180"
                sx={{ mt: 2 }}
                id="dop60C1D180"
                label="Introduceți dop60"
                variant="outlined"
                value={D180.dop60.pret}
                onChange={(e) =>
                  setD180((prevState) => ({
                    ...prevState,
                    dop60: {
                      ...prevState.dop60,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="rulmentC1D180"
                sx={{ mt: 2 }}
                id="rulmentC1D180"
                label="Introduceți rulment"
                variant="outlined"
                value={D180.rulment.pret}
                onChange={(e) =>
                  setD180((prevState) => ({
                    ...prevState,
                    rulment: {
                      ...prevState.rulment,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="snurC1D180"
                sx={{ mt: 2 }}
                id="snurC1D180"
                label="Introduceți snur"
                variant="outlined"
                value={D180.snur.pret}
                onChange={(e) =>
                  setD180((prevState) => ({
                    ...prevState,
                    snur: {
                      ...prevState.snur,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="automatC1D180"
                sx={{ mt: 2 }}
                id="automatC1D180"
                label="Introduceți automat"
                variant="outlined"
                value={D180.automat.pret}
                onChange={(e) =>
                  setD180((prevState) => ({
                    ...prevState,
                    automat: {
                      ...prevState.automat,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="opritorAscunsC1D180"
                sx={{ mt: 2 }}
                id="opritorAscunsC1D180"
                label="Introduceți opritorAscuns"
                variant="outlined"
                value={D180.opritorAscuns.pret}
                onChange={(e) =>
                  setD180((prevState) => ({
                    ...prevState,
                    opritorAscuns: {
                      ...prevState.opritorAscuns,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="palnieGhidajC1D180"
                sx={{ mt: 2 }}
                id="palnieGhidajC1D180"
                label="Introduceți palnieGhidaj"
                variant="outlined"
                value={D180.palnieGhidaj.pret}
                onChange={(e) =>
                  setD180((prevState) => ({
                    ...prevState,
                    palnieGhidaj: {
                      ...prevState.palnieGhidaj,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="ornamentPlasticC1D180"
                sx={{ mt: 2 }}
                id="ornamentPlasticC1D180"
                label="Introduceți ornamentPlastic"
                variant="outlined"
                value={D180.ornamentPlastic.pret}
                onChange={(e) =>
                  setD180((prevState) => ({
                    ...prevState,
                    ornamentPlastic: {
                      ...prevState.ornamentPlastic,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="rolaPlasticCuCilindruC1D180"
                sx={{ mt: 2 }}
                id="rolaPlasticCuCilindruC1D180"
                label="Introduceți rolaPlasticCuCilindru"
                variant="outlined"
                value={D180.rolaPlasticCuCilindru.pret}
                onChange={(e) =>
                  setD180((prevState) => ({
                    ...prevState,
                    rolaPlasticCuCilindru: {
                      ...prevState.rolaPlasticCuCilindru,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="oarcCilindruC1D180"
                sx={{ mt: 2 }}
                id="arcCilindruC1D180"
                label="Introduceți arcCilindru"
                variant="outlined"
                value={D180.arcCilindru.pret}
                onChange={(e) =>
                  setD180((prevState) => ({
                    ...prevState,
                    arcCilindru: {
                      ...prevState.arcCilindru,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="arriterC1D180"
                sx={{ mt: 2 }}
                id="arriterC1D180"
                label="Introduceți arriter"
                variant="outlined"
                value={D180.arriter.pret}
                onChange={(e) =>
                  setD180((prevState) => ({
                    ...prevState,
                    arriter: {
                      ...prevState.arriter,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="reductieC1D180"
                sx={{ mt: 2 }}
                id="reductieC1D180"
                label="Introduceți reductie"
                variant="outlined"
                value={D180.reductie.pret}
                onChange={(e) =>
                  setD180((prevState) => ({
                    ...prevState,
                    reductie: {
                      ...prevState.reductie,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
          </Grid>
          <Grid item xs={isSmallScreen ? 12 : 3}>
            {' '}
            <Typography> D205</Typography>
            <FormGroup>
              <TextField
                controlid="aluFataC1D205"
                sx={{ mt: 2 }}
                id="aluFataC1D205"
                label="Introduceți aluFata"
                variant="outlined"
                value={D205.aluFata.pret}
                onChange={(e) =>
                  setD205((prevState) => ({
                    ...prevState,
                    aluFata: {
                      ...prevState.aluFata,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="aluSpateC1D205"
                sx={{ mt: 2 }}
                id="aluSpateC1D205"
                label="Introduceți aluSpate"
                variant="outlined"
                value={D205.aluSpate.pret}
                onChange={(e) =>
                  setD205((prevState) => ({
                    ...prevState,
                    aluSpate: {
                      ...prevState.aluSpate,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="lamelaAluC1D205"
                sx={{ mt: 2 }}
                id="lamelaAluC1D205"
                label="Introduceți lamelaAlu"
                variant="outlined"
                value={D205.lamelaAlu.pret}
                onChange={(e) =>
                  setD205((prevState) => ({
                    ...prevState,
                    lamelaAlu: {
                      ...prevState.lamelaAlu,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="lamelaTerminalaC1D205"
                sx={{ mt: 2 }}
                id="lamelaTerminalaC1D205"
                label="Introduceți lamelaTerminala"
                variant="outlined"
                value={D205.lamelaTerminala.pret}
                onChange={(e) =>
                  setD205((prevState) => ({
                    ...prevState,
                    lamelaTerminala: {
                      ...prevState.lamelaTerminala,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="garnituraDeContactC1D205"
                sx={{ mt: 2 }}
                id="garnituraDeContactC1D205"
                label="Introduceți garnituraDeContact"
                variant="outlined"
                value={D205.garnituraDeContact.pret}
                onChange={(e) =>
                  setD205((prevState) => ({
                    ...prevState,
                    garnituraDeContact: {
                      ...prevState.garnituraDeContact,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="axOctogonal60C1D205"
                sx={{ mt: 2 }}
                id="axOctogonal60C1D205"
                label="Introduceți axOctogonal60"
                variant="outlined"
                value={D205.axOctogonal60.pret}
                onChange={(e) =>
                  setD205((prevState) => ({
                    ...prevState,
                    axOctogonal60: {
                      ...prevState.axOctogonal60,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="ghidajAluC1D205"
                sx={{ mt: 2 }}
                id="ghidajAluC1D205"
                label="Introduceți ghidajAlu"
                variant="outlined"
                value={D205.ghidajAlu.pret}
                onChange={(e) =>
                  setD205((prevState) => ({
                    ...prevState,
                    ghidajAlu: {
                      ...prevState.ghidajAlu,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="perieGhidajC1D205"
                sx={{ mt: 2 }}
                id="perieGhidajC1D205"
                label="Introduceți perieGhidaj"
                variant="outlined"
                value={D205.perieGhidaj.pret}
                onChange={(e) =>
                  setD205((prevState) => ({
                    ...prevState,
                    perieGhidaj: {
                      ...prevState.perieGhidaj,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="agatatorCovor170C1D205"
                sx={{ mt: 2 }}
                id="agatatorCovor170C1D205"
                label="Introduceți agatatorCovor170"
                variant="outlined"
                value={D205.agatatorCovor170.pret}
                onChange={(e) =>
                  setD205((prevState) => ({
                    ...prevState,
                    agatatorCovor170: {
                      ...prevState.agatatorCovor170,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="inel60C1D205"
                sx={{ mt: 2 }}
                id="inel60C1D205"
                label="Introduceți inel60"
                variant="outlined"
                value={D205.inel60.pret}
                onChange={(e) =>
                  setD205((prevState) => ({
                    ...prevState,
                    inel60: {
                      ...prevState.inel60,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="capacLateralC1D205"
                sx={{ mt: 2 }}
                id="capacLateralC1D205"
                label="Introduceți capacLateral"
                variant="outlined"
                value={D205.capacLateral.pret}
                onChange={(e) =>
                  setD205((prevState) => ({
                    ...prevState,
                    capacLateral: {
                      ...prevState.capacLateral,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="fulie180C1D205"
                sx={{ mt: 2 }}
                id="fulie180C1D205"
                label="Introduceți fulie180"
                variant="outlined"
                value={D205.fulie180.pret}
                onChange={(e) =>
                  setD205((prevState) => ({
                    ...prevState,
                    fulie180: {
                      ...prevState.fulie180,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="dop60C1D205"
                sx={{ mt: 2 }}
                id="dop60C1D205"
                label="Introduceți dop60"
                variant="outlined"
                value={D205.dop60.pret}
                onChange={(e) =>
                  setD205((prevState) => ({
                    ...prevState,
                    dop60: {
                      ...prevState.dop60,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="rulmentC1D205"
                sx={{ mt: 2 }}
                id="rulmentC1D205"
                label="Introduceți rulment"
                variant="outlined"
                value={D205.rulment.pret}
                onChange={(e) =>
                  setD205((prevState) => ({
                    ...prevState,
                    rulment: {
                      ...prevState.rulment,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="snurC1D205"
                sx={{ mt: 2 }}
                id="snurC1D205"
                label="Introduceți snur"
                variant="outlined"
                value={D205.snur.pret}
                onChange={(e) =>
                  setD205((prevState) => ({
                    ...prevState,
                    snur: {
                      ...prevState.snur,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="automatC1D205"
                sx={{ mt: 2 }}
                id="automatC1D205"
                label="Introduceți automat"
                variant="outlined"
                value={D205.automat.pret}
                onChange={(e) =>
                  setD205((prevState) => ({
                    ...prevState,
                    automat: {
                      ...prevState.automat,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="opritorAscunsC1D205"
                sx={{ mt: 2 }}
                id="opritorAscunsC1D205"
                label="Introduceți opritorAscuns"
                variant="outlined"
                value={D205.opritorAscuns.pret}
                onChange={(e) =>
                  setD205((prevState) => ({
                    ...prevState,
                    opritorAscuns: {
                      ...prevState.opritorAscuns,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="palnieGhidajC1D205"
                sx={{ mt: 2 }}
                id="palnieGhidajC1D205"
                label="Introduceți palnieGhidaj"
                variant="outlined"
                value={D205.palnieGhidaj.pret}
                onChange={(e) =>
                  setD205((prevState) => ({
                    ...prevState,
                    palnieGhidaj: {
                      ...prevState.palnieGhidaj,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="ornamentPlasticC1D205"
                sx={{ mt: 2 }}
                id="ornamentPlasticC1D205"
                label="Introduceți ornamentPlastic"
                variant="outlined"
                value={D205.ornamentPlastic.pret}
                onChange={(e) =>
                  setD205((prevState) => ({
                    ...prevState,
                    ornamentPlastic: {
                      ...prevState.ornamentPlastic,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="rolaPlasticCuCilindruC1D205"
                sx={{ mt: 2 }}
                id="rolaPlasticCuCilindruC1D205"
                label="Introduceți rolaPlasticCuCilindru"
                variant="outlined"
                value={D205.rolaPlasticCuCilindru.pret}
                onChange={(e) =>
                  setD205((prevState) => ({
                    ...prevState,
                    rolaPlasticCuCilindru: {
                      ...prevState.rolaPlasticCuCilindru,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="oarcCilindruC1D205"
                sx={{ mt: 2 }}
                id="arcCilindruC1D205"
                label="Introduceți arcCilindru"
                variant="outlined"
                value={D205.arcCilindru.pret}
                onChange={(e) =>
                  setD205((prevState) => ({
                    ...prevState,
                    arcCilindru: {
                      ...prevState.arcCilindru,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="arriterC1D205"
                sx={{ mt: 2 }}
                id="arriterC1D205"
                label="Introduceți arriter"
                variant="outlined"
                value={D205.arriter.pret}
                onChange={(e) =>
                  setD205((prevState) => ({
                    ...prevState,
                    arriter: {
                      ...prevState.arriter,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
            <FormGroup>
              <TextField
                controlid="reductieC1D205"
                sx={{ mt: 2 }}
                id="reductieC1D205"
                label="Introduceți reductie"
                variant="outlined"
                value={D205.reductie.pret}
                onChange={(e) =>
                  setD205((prevState) => ({
                    ...prevState,
                    reductie: {
                      ...prevState.reductie,
                      pret: e.target.value,
                    },
                  }))
                }
              />
              <FormControl type="text" />
            </FormGroup>
          </Grid>
          <FormGroup>
            <Button
              variant="contained"
              //   maxWidth="xxl"
              type="submit"
              sx={{
                m: 'auto',
                mt: 4,
                mb: 2,
                backgroundColor: '#327c3d',
                width: '20%',
                height: '50px',
                borderRadius: '30px',
                '&:hover': {
                  backgroundColor: '#329c3d',
                  '@media (max-width: 800px)': {
                    m: 'auto',
                    mt: 4,
                    mb: 2,
                    backgroundColor: '#327c3d',
                    width: '70%',
                    height: '50px',
                    borderRadius: '30px',
                    '&:hover': {
                      backgroundColor: '#329c3d',
                    },
                  },
                },
              }}
            >
              Salvează
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
        </Grid>
      </form>
    </Container>
  );
}
