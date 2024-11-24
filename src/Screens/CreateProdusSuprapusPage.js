import React, { useContext, useState, useReducer } from 'react';
import { getError } from '../utils.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Store } from '../Store.js';
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

function CreateProdusSuprapus() {
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
  const [Nume, setNume] = useState('Rulou suprapus');
  const [NumeCuloare, setNumeCuloare] = useState('');
  const [D200, setD200] = useState({
    SetCasetaSuprapus195: {
      pret: '',
    },
    Izolatie195: {
      pret: '',
    },
    ProfilAdaptor: {
      pret: '',
    },
    AxOctogonal40: {
      pret: '',
    },
    LamelaAluminiu: {
      pret: '',
    },
    LamelaTerminala: {
      pret: '',
    },
    GarnituraDeContact: {
      pret: '',
    },
    GhidajPVC: {
      pret: '',
    },
    PerieGhidaj: {
      pret: '',
    },
    Inel40: {
      pret: '',
    },
    SetAccesorii195: {
      pret: '',
    },
    Banda: {
      pret: '',
    },
    Automat: {
      pret: '',
    },
    OpritorPVC: {
      pret: '',
    },
    Arriter: {
      pret: '',
    },
    SuplimentareAccesorii: {
      pret: '',
    },
  });
  //Functie creaza produs
  const createHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: 'CREATE_REQUEST' });
      const { data } = await axios.post(
        `${API_LINK}/api/produsesuprapus`,
        {
          Nume,
          NumeCuloare,
          D200: {
            SetCasetaSuprapus195: {
              pret: D200.SetCasetaSuprapus195.pret,
            },
            Izolatie195: {
              pret: D200.Izolatie195.pret,
            },
            ProfilAdaptor: {
              pret: D200.ProfilAdaptor.pret,
            },
            AxOctogonal40: {
              pret: D200.AxOctogonal40.pret,
            },
            LamelaAluminiu: {
              pret: D200.LamelaAluminiu.pret,
            },
            LamelaTerminala: {
              pret: D200.LamelaTerminala.pret,
            },
            GarnituraDeContact: {
              pret: D200.GarnituraDeContact.pret,
            },
            GhidajPVC: {
              pret: D200.GhidajPVC.pret,
            },
            PerieGhidaj: {
              pret: D200.PerieGhidaj.pret,
            },
            Inel40: {
              pret: D200.Inel40.pret,
            },
            SetAccesorii195: {
              pret: D200.SetAccesorii195.pret,
            },
            Banda: {
              pret: D200.Banda.pret,
            },
            Automat: {
              pret: D200.Automat.pret,
            },
            OpritorPVC: {
              pret: D200.OpritorPVC.pret,
            },
            Arriter: {
              pret: D200.Arriter.pret,
            },
            SuplimentareAccesorii: {
              pret: D200.SuplimentareAccesorii.pret,
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
      console.log(err);
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
                  value="Rulou suprapus"
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
            <Grid item xs={isSmallScreen ? 12 : 12}>
              <Typography> D200</Typography>
              <FormGroup>
                <TextField
                  controlid="SetCasetaSuprapus195C1D195"
                  sx={{ mt: 2 }}
                  id="SetCasetaSuprapus195D195"
                  label="Introduceți SetCasetaSuprapus195"
                  variant="outlined"
                  onChange={(e) =>
                    setD200((prevState) => ({
                      ...prevState,
                      SetCasetaSuprapus195: {
                        ...prevState.SetCasetaSuprapus195,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="Izolatie195C1D195"
                  sx={{ mt: 2 }}
                  id="Izolatie195C1D195"
                  label="Introduceți Izolatie195"
                  variant="outlined"
                  onChange={(e) =>
                    setD200((prevState) => ({
                      ...prevState,
                      Izolatie195: {
                        ...prevState.Izolatie195,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="ProfilAdaptorC1D195"
                  sx={{ mt: 2 }}
                  id="ProfilAdaptorC1D195"
                  label="Introduceți ProfilAdaptor"
                  variant="outlined"
                  onChange={(e) =>
                    setD200((prevState) => ({
                      ...prevState,
                      ProfilAdaptor: {
                        ...prevState.ProfilAdaptor,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="AxOctogonal40C1D195"
                  sx={{ mt: 2 }}
                  id="AxOctogonal40C1D195"
                  label="Introduceți AxOctogonal40"
                  variant="outlined"
                  onChange={(e) =>
                    setD200((prevState) => ({
                      ...prevState,
                      AxOctogonal40: {
                        ...prevState.AxOctogonal40,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="LamelaAluminiuC1D195"
                  sx={{ mt: 2 }}
                  id="LamelaAluminiuC1D195"
                  label="Introduceți LamelaAluminiu"
                  variant="outlined"
                  onChange={(e) =>
                    setD200((prevState) => ({
                      ...prevState,
                      LamelaAluminiu: {
                        ...prevState.LamelaAluminiu,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="LamelaTerminalaC1D195"
                  sx={{ mt: 2 }}
                  id="LamelaTerminalaC1D195"
                  label="Introduceți LamelaTerminala"
                  variant="outlined"
                  onChange={(e) =>
                    setD200((prevState) => ({
                      ...prevState,
                      LamelaTerminala: {
                        ...prevState.LamelaTerminala,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="GarnituraDeContactC1D195"
                  sx={{ mt: 2 }}
                  id="GarnituraDeContactC1D195"
                  label="Introduceți GarnituraDeContact"
                  variant="outlined"
                  onChange={(e) =>
                    setD200((prevState) => ({
                      ...prevState,
                      GarnituraDeContact: {
                        ...prevState.GarnituraDeContact,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="GhidajPVCC1D195"
                  sx={{ mt: 2 }}
                  id="GhidajPVCC1D195"
                  label="Introduceți GhidajPVC"
                  variant="outlined"
                  onChange={(e) =>
                    setD200((prevState) => ({
                      ...prevState,
                      GhidajPVC: {
                        ...prevState.GhidajPVC,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="PerieGhidajC1D195"
                  sx={{ mt: 2 }}
                  id="PerieGhidajC1D195"
                  label="Introduceți PerieGhidaj"
                  variant="outlined"
                  onChange={(e) =>
                    setD200((prevState) => ({
                      ...prevState,
                      PerieGhidaj: {
                        ...prevState.PerieGhidaj,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="Inel40C1D195"
                  sx={{ mt: 2 }}
                  id="Inel40C1D195"
                  label="Introduceți Inel40"
                  variant="outlined"
                  onChange={(e) =>
                    setD200((prevState) => ({
                      ...prevState,
                      Inel40: {
                        ...prevState.Inel40,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="SetAccesorii195C1D195"
                  sx={{ mt: 2 }}
                  id="SetAccesorii195C1D195"
                  label="Introduceți SetAccesorii195"
                  variant="outlined"
                  onChange={(e) =>
                    setD200((prevState) => ({
                      ...prevState,
                      SetAccesorii195: {
                        ...prevState.SetAccesorii195,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="BandaC1D195"
                  sx={{ mt: 2 }}
                  id="BandaC1D195"
                  label="Introduceți Banda"
                  variant="outlined"
                  onChange={(e) =>
                    setD200((prevState) => ({
                      ...prevState,
                      Banda: {
                        ...prevState.Banda,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="AutomatC1D195"
                  sx={{ mt: 2 }}
                  id="AutomatC1D195"
                  label="Introduceți Automat"
                  variant="outlined"
                  onChange={(e) =>
                    setD200((prevState) => ({
                      ...prevState,
                      Automat: {
                        ...prevState.Automat,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="OpritorPVCC1D195"
                  sx={{ mt: 2 }}
                  id="OpritorPVCC1D195"
                  label="Introduceți OpritorPVC"
                  variant="outlined"
                  onChange={(e) =>
                    setD200((prevState) => ({
                      ...prevState,
                      OpritorPVC: {
                        ...prevState.OpritorPVC,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="ArriterC1D195"
                  sx={{ mt: 2 }}
                  id="ArriterC1D195"
                  label="Introduceți Arriter"
                  variant="outlined"
                  onChange={(e) =>
                    setD200((prevState) => ({
                      ...prevState,
                      Arriter: {
                        ...prevState.Arriter,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="SuplimentareAccesoriiC1D195"
                  sx={{ mt: 2 }}
                  id="SuplimentareAccesoriiC1D195"
                  label="Introduceți SuplimentareAccesorii"
                  variant="outlined"
                  onChange={(e) =>
                    setD200((prevState) => ({
                      ...prevState,
                      SuplimentareAccesorii: {
                        ...prevState.SuplimentareAccesorii,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
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
export default CreateProdusSuprapus;
