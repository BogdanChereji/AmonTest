import React, { useContext, useState, useReducer } from 'react';
import { getError } from '../utils';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Store } from '../Store';
import { Container } from '@material-ui/core';
import {
  Box,
  Button,
  FormControl,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { toast } from 'react-toastify';
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
    default:
      return state;
  }
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function CreateProdusCuPlasa() {
  const [{ error, loading }, dispatch] = useReducer(reducer, {
    loading: '',
    error: '',
  });
  const { state } = useContext(Store);
  const { userInfo } = state;
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // sau alt breakpoint în loc de 'sm' după necesitate

  //Campuri
  const [Nume, setNume] = useState('Rulou aluminiu cu plasa');
  const [NumeCuloare, setNumeCuloare] = useState('');
  const [D165, setD165] = useState({
    aluFata: {
      pret: '',
    },
    aluSpate: {
      pret: '',
    },
    lamelaAluminiu: {
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
    ghidajAluKombi: {
      pret: '',
    },
    profilMobilPlasa: {
      pret: '',
    },
    profilFixPlasa: {
      pret: '',
    },
    perieGhidajPlasa: {
      pret: '',
    },
    plasaPeAx: {
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
    fulie: {
      pret: '',
    },
    dop: {
      pret: '',
    },
    kitPlasa: {
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
    arcCilindric: {
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
    lamelaAluminiu: {
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
    ghidajAluKombi: {
      pret: '',
    },
    profilMobilPlasa: {
      pret: '',
    },
    profilFixPlasa: {
      pret: '',
    },
    perieGhidajPlasa: {
      pret: '',
    },
    plasaPeAx: {
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
    fulie: {
      pret: '',
    },
    dop: {
      pret: '',
    },
    kitPlasa: {
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
    arcCilindric: {
      pret: '',
    },
    arriter: {
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
    lamelaAluminiu: {
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
    ghidajAluKombi: {
      pret: '',
    },
    profilMobilPlasa: {
      pret: '',
    },
    profilFixPlasa: {
      pret: '',
    },
    perieGhidajPlasa: {
      pret: '',
    },
    plasaPeAx: {
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
    fulie: {
      pret: '',
    },
    dop: {
      pret: '',
    },
    kitPlasa: {
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
    arcCilindric: {
      pret: '',
    },
    arriter: {
      pret: '',
    },
  });

  //Functie creaza produs
  const createHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: 'CREATE_REQUEST' });
      const { data } = await axios.post(
        `${API_LINK}/api/produsecuplasa`,
        {
          Nume,
          NumeCuloare,
          D165: {
            aluFata: {
              pret: D165.aluFata.pret,
            },
            aluSpate: {
              pret: D165.aluSpate.pret,
            },
            lamelaAluminiu: {
              pret: D165.lamelaAluminiu.pret,
            },
            lamelaTerminala: {
              pret: D165.lamelaTerminala.pret,
            },
            garnituraDeContact: {
              pret: D165.garnituraDeContact.pret,
            },
            axOctogonal40: {
              pret: D165.axOctogonal40.pret,
            },
            ghidajAluKombi: {
              pret: D165.ghidajAluKombi.pret,
            },
            profilMobilPlasa: {
              pret: D165.profilMobilPlasa.pret,
            },
            profilFixPlasa: {
              pret: D165.profilFixPlasa.pret,
            },
            perieGhidajPlasa: {
              pret: D165.perieGhidajPlasa.pret,
            },
            plasaPeAx: {
              pret: D165.plasaPeAx.pret,
            },
            perieGhidaj: {
              pret: D165.perieGhidaj.pret,
            },
            agatatorCovor130: {
              pret: D165.agatatorCovor130.pret,
            },
            inel40: {
              pret: D165.inel40.pret,
            },
            capacLateral: {
              pret: D165.capacLateral.pret,
            },
            fulie: {
              pret: D165.fulie.pret,
            },
            dop: {
              pret: D165.dop.pret,
            },
            kitPlasa: {
              pret: D165.kitPlasa.pret,
            },
            rulment: {
              pret: D165.rulment.pret,
            },
            snur: {
              pret: D165.snur.pret,
            },
            automat: {
              pret: D165.automat.pret,
            },
            opritorAscuns: {
              pret: D165.opritorAscuns.pret,
            },
            palnieGhidaj: {
              pret: D165.palnieGhidaj.pret,
            },
            ornamentPlastic: {
              pret: D165.ornamentPlastic.pret,
            },
            rolaPlasticCuCilindru: {
              pret: D165.rolaPlasticCuCilindru.pret,
            },
            arcCilindric: {
              pret: D165.arcCilindric.pret,
            },
            arriter: {
              pret: D165.arriter.pret,
            },
          },
          D180: {
            aluFata: {
              pret: D180.aluFata.pret,
            },
            aluSpate: {
              pret: D180.aluSpate.pret,
            },
            lamelaAluminiu: {
              pret: D180.lamelaAluminiu.pret,
            },
            lamelaTerminala: {
              pret: D180.lamelaTerminala.pret,
            },
            garnituraDeContact: {
              pret: D180.garnituraDeContact.pret,
            },
            axOctogonal40: {
              pret: D180.axOctogonal40.pret,
            },
            ghidajAluKombi: {
              pret: D180.ghidajAluKombi.pret,
            },
            profilMobilPlasa: {
              pret: D180.profilMobilPlasa.pret,
            },
            profilFixPlasa: {
              pret: D180.profilFixPlasa.pret,
            },
            perieGhidajPlasa: {
              pret: D180.perieGhidajPlasa.pret,
            },
            plasaPeAx: {
              pret: D180.plasaPeAx.pret,
            },
            perieGhidaj: {
              pret: D180.perieGhidaj.pret,
            },
            agatatorCovor130: {
              pret: D180.agatatorCovor130.pret,
            },
            inel40: {
              pret: D180.inel40.pret,
            },
            capacLateral: {
              pret: D180.capacLateral.pret,
            },
            fulie: {
              pret: D180.fulie.pret,
            },
            dop: {
              pret: D180.dop.pret,
            },
            kitPlasa: {
              pret: D180.kitPlasa.pret,
            },
            rulment: {
              pret: D180.rulment.pret,
            },
            snur: {
              pret: D180.snur.pret,
            },
            automat: {
              pret: D180.automat.pret,
            },
            opritorAscuns: {
              pret: D180.opritorAscuns.pret,
            },
            palnieGhidaj: {
              pret: D180.palnieGhidaj.pret,
            },
            ornamentPlastic: {
              pret: D180.ornamentPlastic.pret,
            },
            rolaPlasticCuCilindru: {
              pret: D180.rolaPlasticCuCilindru.pret,
            },
            arcCilindric: {
              pret: D180.arcCilindric.pret,
            },
            arriter: {
              pret: D180.arriter.pret,
            },
          },
          D205: {
            aluFata: {
              pret: D205.aluFata.pret,
            },
            aluSpate: {
              pret: D205.aluSpate.pret,
            },
            lamelaAluminiu: {
              pret: D205.lamelaAluminiu.pret,
            },
            lamelaTerminala: {
              pret: D205.lamelaTerminala.pret,
            },
            garnituraDeContact: {
              pret: D205.garnituraDeContact.pret,
            },
            axOctogonal40: {
              pret: D205.axOctogonal40.pret,
            },
            ghidajAluKombi: {
              pret: D205.ghidajAluKombi.pret,
            },
            profilMobilPlasa: {
              pret: D205.profilMobilPlasa.pret,
            },
            profilFixPlasa: {
              pret: D205.profilFixPlasa.pret,
            },
            perieGhidajPlasa: {
              pret: D205.perieGhidajPlasa.pret,
            },
            plasaPeAx: {
              pret: D205.plasaPeAx.pret,
            },
            perieGhidaj: {
              pret: D205.perieGhidaj.pret,
            },
            agatatorCovor130: {
              pret: D205.agatatorCovor130.pret,
            },
            inel40: {
              pret: D205.inel40.pret,
            },
            capacLateral: {
              pret: D205.capacLateral.pret,
            },
            fulie: {
              pret: D205.fulie.pret,
            },
            dop: {
              pret: D205.dop.pret,
            },
            kitPlasa: {
              pret: D205.kitPlasa.pret,
            },
            rulment: {
              pret: D205.rulment.pret,
            },
            snur: {
              pret: D205.snur.pret,
            },
            automat: {
              pret: D205.automat.pret,
            },
            opritorAscuns: {
              pret: D205.opritorAscuns.pret,
            },
            palnieGhidaj: {
              pret: D205.palnieGhidaj.pret,
            },
            ornamentPlastic: {
              pret: D205.ornamentPlastic.pret,
            },
            rolaPlasticCuCilindru: {
              pret: D205.rolaPlasticCuCilindru.pret,
            },
            arcCilindric: {
              pret: D205.arcCilindric.pret,
            },
            arriter: {
              pret: D205.arriter.pret,
            },
          },
        },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      toast.success('Produs adăugat');
      dispatch({ type: 'CREATE_SUCCESS' });
      navigate(`/produse`);
    } catch (err) {
      dispatch({
        type: 'CREATE_FAIL',
        payload: getError(err),
      });
      toast.error('Ai întâmpinat o problemă');
    }
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        backgroundColor: '#f9f9fb',
        height: '100vh',
      }}
    >
      <form onSubmit={createHandler}>
        <Box
          sx={{
            margin: 'auto',
            marginTop: 5,
            mb: 5,
            width: '100%', // Lățimea originală pentru desktop
            backgroundColor: '#fff',
            // border: '1px solid #ccc',
            borderRadius: 1,
            padding: '30px',
          }}
        >
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
                  aria-readonly
                  value="Rulou aluminiu cu plasa"
                  required
                  label="Introduceți numele produsului"
                  variant="outlined"
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
                  onChange={(e) => setNumeCuloare(e.target.value)}
                />
                <FormControl type="text" />
              </FormGroup>
            </Grid>
            <Grid item xs={isSmallScreen ? 12 : 4}>
              <Typography> D165</Typography>
              <FormGroup>
                <TextField
                  controlid="aluFataC1D165"
                  sx={{ mt: 2 }}
                  id="aluFataC1D165"
                  label="Introduceți aluFata"
                  variant="outlined"
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
                  controlid="lamelaAluminiuC1D165"
                  sx={{ mt: 2 }}
                  id="lamelaAluminiuC1D165"
                  label="Introduceți lamelaAluminiu"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
                      ...prevState,
                      lamelaAluminiu: {
                        ...prevState.lamelaAluminiu,
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
                  controlid="ghidajAluKombi40C1D165"
                  sx={{ mt: 2 }}
                  id="ghidajAluKombi40C1D165"
                  label="Introduceți ghidajAluKombi"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
                      ...prevState,
                      ghidajAluKombi: {
                        ...prevState.ghidajAluKombi,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="profilMobilPlasa40C1D165"
                  sx={{ mt: 2 }}
                  id="profilMobilPlasa40C1D165"
                  label="Introduceți profilMobilPlasa"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
                      ...prevState,
                      profilMobilPlasa: {
                        ...prevState.profilMobilPlasa,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="profilFixPlasa40C1D165"
                  sx={{ mt: 2 }}
                  id="profilFixPlasa40C1D165"
                  label="Introduceți profilFixPlasa"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
                      ...prevState,
                      profilFixPlasa: {
                        ...prevState.profilFixPlasa,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="perieGhidajPlasa40C1D165"
                  sx={{ mt: 2 }}
                  id="perieGhidajPlasa40C1D165"
                  label="Introduceți perieGhidajPlasa"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
                      ...prevState,
                      perieGhidajPlasa: {
                        ...prevState.perieGhidajPlasa,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="plasaPeAx40C1D165"
                  sx={{ mt: 2 }}
                  id="plasaPeAx40C1D165"
                  label="Introduceți plasaPeAx"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
                      ...prevState,
                      plasaPeAx: {
                        ...prevState.plasaPeAx,
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
                  id="agatatorCovor130C1D165"
                  label="Introduceți agatatorCovor130"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
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
                  controlid="inel40C1D165"
                  sx={{ mt: 2 }}
                  id="inel40C1D165"
                  label="Introduceți inel40"
                  variant="outlined"
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
                  controlid="fulieC1D165"
                  sx={{ mt: 2 }}
                  id="fulieC1D165"
                  label="Introduceți fulie"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
                      ...prevState,
                      fulie: {
                        ...prevState.fulie,
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
                  controlid="kitPlasaC1D165"
                  sx={{ mt: 2 }}
                  id="kitPlasaC1D165"
                  label="Introduceți kitPlasa"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
                      ...prevState,
                      kitPlasa: {
                        ...prevState.kitPlasa,
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
                  controlid="arcCilindricC1D165"
                  sx={{ mt: 2 }}
                  id="arcCilindricC1D165"
                  label="Introduceți arcCilindric"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
                      ...prevState,
                      arcCilindric: {
                        ...prevState.arcCilindric,
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
            <Grid item xs={isSmallScreen ? 12 : 4}>
              <Typography> D180</Typography>
              <FormGroup>
                <TextField
                  controlid="aluFataC1D180"
                  sx={{ mt: 2 }}
                  id="aluFataC1D180"
                  label="Introduceți aluFata"
                  variant="outlined"
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
                  controlid="lamelaAluminiuC1D180"
                  sx={{ mt: 2 }}
                  id="lamelaAluminiuC1D180"
                  label="Introduceți lamelaAluminiu"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
                      ...prevState,
                      lamelaAluminiu: {
                        ...prevState.lamelaAluminiu,
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
                  controlid="axOctogonal40C1D180"
                  sx={{ mt: 2 }}
                  id="axOctogonal40C1D180"
                  label="Introduceți axOctogonal40"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
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
                  controlid="ghidajAluKombi40C1D180"
                  sx={{ mt: 2 }}
                  id="ghidajAluKombi40C1D180"
                  label="Introduceți ghidajAluKombi"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
                      ...prevState,
                      ghidajAluKombi: {
                        ...prevState.ghidajAluKombi,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="profilMobilPlasa40C1D180"
                  sx={{ mt: 2 }}
                  id="profilMobilPlasa40C1D180"
                  label="Introduceți profilMobilPlasa"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
                      ...prevState,
                      profilMobilPlasa: {
                        ...prevState.profilMobilPlasa,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="profilFixPlasa40C1D180"
                  sx={{ mt: 2 }}
                  id="profilFixPlasa40C1D180"
                  label="Introduceți profilFixPlasa"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
                      ...prevState,
                      profilFixPlasa: {
                        ...prevState.profilFixPlasa,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="perieGhidajPlasa40C1D180"
                  sx={{ mt: 2 }}
                  id="perieGhidajPlasa40C1D180"
                  label="Introduceți perieGhidajPlasa"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
                      ...prevState,
                      perieGhidajPlasa: {
                        ...prevState.perieGhidajPlasa,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="plasaPeAx40C1D180"
                  sx={{ mt: 2 }}
                  id="plasaPeAx40C1D180"
                  label="Introduceți plasaPeAx"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
                      ...prevState,
                      plasaPeAx: {
                        ...prevState.plasaPeAx,
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
                  controlid="agatatorCovor130C1D180"
                  sx={{ mt: 2 }}
                  id="agatatorCovor130C1D180"
                  label="Introduceți agatatorCovor130"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
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
                  controlid="inel40C1D180"
                  sx={{ mt: 2 }}
                  id="inel40C1D180"
                  label="Introduceți inel40"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
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
                  controlid="capacLateralC1D180"
                  sx={{ mt: 2 }}
                  id="capacLateralC1D180"
                  label="Introduceți capacLateral"
                  variant="outlined"
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
                  controlid="fulieC1D180"
                  sx={{ mt: 2 }}
                  id="fulieC1D180"
                  label="Introduceți fulie"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
                      ...prevState,
                      fulie: {
                        ...prevState.fulie,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="dopC1D180"
                  sx={{ mt: 2 }}
                  id="dopC1D180"
                  label="Introduceți dop"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
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
                  controlid="kitPlasaC1D180"
                  sx={{ mt: 2 }}
                  id="kitPlasaC1D180"
                  label="Introduceți kitPlasa"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
                      ...prevState,
                      kitPlasa: {
                        ...prevState.kitPlasa,
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
                  controlid="arcCilindricC1D180"
                  sx={{ mt: 2 }}
                  id="arcCilindricC1D180"
                  label="Introduceți arcCilindric"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
                      ...prevState,
                      arcCilindric: {
                        ...prevState.arcCilindric,
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
            </Grid>
            <Grid item xs={isSmallScreen ? 12 : 4}>
              <Typography> D205</Typography>
              <FormGroup>
                <TextField
                  controlid="aluFataC1D205"
                  sx={{ mt: 2 }}
                  id="aluFataC1D205"
                  label="Introduceți aluFata"
                  variant="outlined"
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
                  controlid="lamelaAluminiuC1D205"
                  sx={{ mt: 2 }}
                  id="lamelaAluminiuC1D205"
                  label="Introduceți lamelaAluminiu"
                  variant="outlined"
                  onChange={(e) =>
                    setD205((prevState) => ({
                      ...prevState,
                      lamelaAluminiu: {
                        ...prevState.lamelaAluminiu,
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
                  controlid="axOctogonal40C1D205"
                  sx={{ mt: 2 }}
                  id="axOctogonal40C1D205"
                  label="Introduceți axOctogonal40"
                  variant="outlined"
                  onChange={(e) =>
                    setD205((prevState) => ({
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
                  controlid="ghidajAluKombi40C1D205"
                  sx={{ mt: 2 }}
                  id="ghidajAluKombi40C1D205"
                  label="Introduceți ghidajAluKombi"
                  variant="outlined"
                  onChange={(e) =>
                    setD205((prevState) => ({
                      ...prevState,
                      ghidajAluKombi: {
                        ...prevState.ghidajAluKombi,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="profilMobilPlasa40C1D205"
                  sx={{ mt: 2 }}
                  id="profilMobilPlasa40C1D205"
                  label="Introduceți profilMobilPlasa"
                  variant="outlined"
                  onChange={(e) =>
                    setD205((prevState) => ({
                      ...prevState,
                      profilMobilPlasa: {
                        ...prevState.profilMobilPlasa,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="profilFixPlasa40C1D205"
                  sx={{ mt: 2 }}
                  id="profilFixPlasa40C1D205"
                  label="Introduceți profilFixPlasa"
                  variant="outlined"
                  onChange={(e) =>
                    setD205((prevState) => ({
                      ...prevState,
                      profilFixPlasa: {
                        ...prevState.profilFixPlasa,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="perieGhidajPlasa40C1D205"
                  sx={{ mt: 2 }}
                  id="perieGhidajPlasa40C1D205"
                  label="Introduceți perieGhidajPlasa"
                  variant="outlined"
                  onChange={(e) =>
                    setD205((prevState) => ({
                      ...prevState,
                      perieGhidajPlasa: {
                        ...prevState.perieGhidajPlasa,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="plasaPeAx40C1D205"
                  sx={{ mt: 2 }}
                  id="plasaPeAx40C1D205"
                  label="Introduceți plasaPeAx"
                  variant="outlined"
                  onChange={(e) =>
                    setD205((prevState) => ({
                      ...prevState,
                      plasaPeAx: {
                        ...prevState.plasaPeAx,
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
                  controlid="agatatorCovor130C1D205"
                  sx={{ mt: 2 }}
                  id="agatatorCovor130C1D205"
                  label="Introduceți agatatorCovor130"
                  variant="outlined"
                  onChange={(e) =>
                    setD205((prevState) => ({
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
                  controlid="inel40C1D205"
                  sx={{ mt: 2 }}
                  id="inel40C1D205"
                  label="Introduceți inel40"
                  variant="outlined"
                  onChange={(e) =>
                    setD205((prevState) => ({
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
                  controlid="capacLateralC1D205"
                  sx={{ mt: 2 }}
                  id="capacLateralC1D205"
                  label="Introduceți capacLateral"
                  variant="outlined"
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
                  controlid="fulieC1D205"
                  sx={{ mt: 2 }}
                  id="fulieC1D205"
                  label="Introduceți fulie"
                  variant="outlined"
                  onChange={(e) =>
                    setD205((prevState) => ({
                      ...prevState,
                      fulie: {
                        ...prevState.fulie,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="dopC1D205"
                  sx={{ mt: 2 }}
                  id="dopC1D205"
                  label="Introduceți dop"
                  variant="outlined"
                  onChange={(e) =>
                    setD205((prevState) => ({
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
                  controlid="kitPlasaC1D205"
                  sx={{ mt: 2 }}
                  id="kitPlasaC1D205"
                  label="Introduceți kitPlasa"
                  variant="outlined"
                  onChange={(e) =>
                    setD205((prevState) => ({
                      ...prevState,
                      kitPlasa: {
                        ...prevState.kitPlasa,
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
                  controlid="arcCilindricC1D205"
                  sx={{ mt: 2 }}
                  id="arcCilindricC1D205"
                  label="Introduceți arcCilindric"
                  variant="outlined"
                  onChange={(e) =>
                    setD205((prevState) => ({
                      ...prevState,
                      arcCilindric: {
                        ...prevState.arcCilindric,
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
            </Grid>
          </Grid>
          <FormGroup>
            <Button
              variant="contained"
              type="submit"
              sx={{
                m: 'auto',
                mt: 4,
                mb: 4,
                backgroundColor: '#06386a',
                width: '20%',
                height: '50px',
                '&:hover': {
                  backgroundColor: '#003c7f',
                },
                '@media (max-width: 800px)': {
                  backgroundColor: '#06386a',
                  minWidth: '65%',
                  '&:hover': {
                    backgroundColor: '#003c7f',
                  },
                },
              }}
            >
              Salvează produsul
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
export default CreateProdusCuPlasa;
