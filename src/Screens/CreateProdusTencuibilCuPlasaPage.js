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

function CreateProdusTencuibilCuPlasa() {
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
  const [Nume, setNume] = useState('Rulou tencuibil cu plasa');
  const [NumeCuloare, setNumeCuloare] = useState('');
  const [D165, setD165] = useState({
    TocTenc165pe20: {
      pret: '',
    },
    SinaDeTencuire20: {
      pret: '',
    },
    LamelaAluminiu: {
      pret: '',
    },
    LamelaTerminala: {
      pret: '',
    },
    PanelServIz165pe20: {
      pret: '',
    },
    AxOctogonal40: {
      pret: '',
    },
    GhidajAluKombi: {
      pret: '',
    },
    GarnituraDeContact: {
      pret: '',
    },
    ProfilMobilPlasa: {
      pret: '',
    },
    ProfilFixPlasa: {
      pret: '',
    },
    PerieGhidajPlasa: {
      pret: '',
    },
    PlasaPeAx: {
      pret: '',
    },
    PerieGhidaj: {
      pret: '',
    },
    AgatatorCovor130: {
      pret: '',
    },
    Inel40: {
      pret: '',
    },
    CapacLateral: {
      pret: '',
    },
    Fulie: {
      pret: '',
    },
    Dop: {
      pret: '',
    },
    KitPlasa: {
      pret: '',
    },
    Rulment: {
      pret: '',
    },
    Snur: {
      pret: '',
    },
    Automat: {
      pret: '',
    },
    OpritorAscuns: {
      pret: '',
    },
    PalnieGhidaj: {
      pret: '',
    },
    OrnamentPlastic: {
      pret: '',
    },
    RolaPlasticCuCilindru: {
      pret: '',
    },
    ArcCilindric: {
      pret: '',
    },
    Arriter: {
      pret: '',
    },
  });
  const [D180, setD180] = useState({
    TocTenc180pe20: {
      pret: '',
    },
    SinaDeTencuire20: {
      pret: '',
    },
    LamelaAluminiu: {
      pret: '',
    },
    LamelaTerminala: {
      pret: '',
    },
    PanelServIz180pe20: {
      pret: '',
    },
    AxOctogonal40: {
      pret: '',
    },
    GhidajAluKombi: {
      pret: '',
    },
    GarnituraDeContact: {
      pret: '',
    },
    ProfilMobilPlasa: {
      pret: '',
    },
    ProfilFixPlasa: {
      pret: '',
    },
    PerieGhidajPlasa: {
      pret: '',
    },
    PlasaPeAx: {
      pret: '',
    },
    PerieGhidaj: {
      pret: '',
    },
    AgatatorCovor130: {
      pret: '',
    },
    Inel40: {
      pret: '',
    },
    CapacLateral: {
      pret: '',
    },
    Fulie: {
      pret: '',
    },
    Dop: {
      pret: '',
    },
    KitPlasa: {
      pret: '',
    },
    Rulment: {
      pret: '',
    },
    Snur: {
      pret: '',
    },
    Automat: {
      pret: '',
    },
    OpritorAscuns: {
      pret: '',
    },
    PalnieGhidaj: {
      pret: '',
    },
    OrnamentPlastic: {
      pret: '',
    },
    RolaPlasticCuCilindru: {
      pret: '',
    },
    ArcCilindric: {
      pret: '',
    },
    Arriter: {
      pret: '',
    },
  });
  const [D205, setD205] = useState({
    TocTenc205pe20: {
      pret: '',
    },
    SinaDeTencuire20: {
      pret: '',
    },
    LamelaAluminiu: {
      pret: '',
    },
    LamelaTerminala: {
      pret: '',
    },
    PanelServIz205pe20: {
      pret: '',
    },
    AxOctogonal40: {
      pret: '',
    },
    GhidajAluKombi: {
      pret: '',
    },
    GarnituraDeContact: {
      pret: '',
    },
    ProfilMobilPlasa: {
      pret: '',
    },
    ProfilFixPlasa: {
      pret: '',
    },
    PerieGhidajPlasa: {
      pret: '',
    },
    PlasaPeAx: {
      pret: '',
    },
    PerieGhidaj: {
      pret: '',
    },
    AgatatorCovor130: {
      pret: '',
    },
    Inel40: {
      pret: '',
    },
    CapacLateral: {
      pret: '',
    },
    Fulie: {
      pret: '',
    },
    Dop: {
      pret: '',
    },
    KitPlasa: {
      pret: '',
    },
    Rulment: {
      pret: '',
    },
    Snur: {
      pret: '',
    },
    Automat: {
      pret: '',
    },
    OpritorAscuns: {
      pret: '',
    },
    PalnieGhidaj: {
      pret: '',
    },
    OrnamentPlastic: {
      pret: '',
    },
    RolaPlasticCuCilindru: {
      pret: '',
    },
    ArcCilindric: {
      pret: '',
    },
    Arriter: {
      pret: '',
    },
  });
  //Functie creaza produs
  const createHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: 'CREATE_REQUEST' });
      const { data } = await axios.post(
        `${API_LINK}/api/produsetencuibilcuplasa`,
        {
          Nume,
          NumeCuloare,
          D165: {
            TocTenc165pe20: {
              pret: D165.TocTenc165pe20.pret,
            },
            SinaDeTencuire20: {
              pret: D165.SinaDeTencuire20.pret,
            },
            LamelaAluminiu: {
              pret: D165.LamelaAluminiu.pret,
            },
            LamelaTerminala: {
              pret: D165.LamelaTerminala.pret,
            },
            PanelServIz165pe20: {
              pret: D165.PanelServIz165pe20.pret,
            },
            AxOctogonal40: {
              pret: D165.AxOctogonal40.pret,
            },
            GhidajAluKombi: {
              pret: D165.GhidajAluKombi.pret,
            },
            ProfilMobilPlasa: {
              pret: D165.ProfilMobilPlasa.pret,
            },
            ProfilFixPlasa: {
              pret: D165.ProfilFixPlasa.pret,
            },
            PerieGhidajPlasa: {
              pret: D165.PerieGhidajPlasa.pret,
            },
            PlasaPeAx: {
              pret: D165.PlasaPeAx.pret,
            },
            PerieGhidaj: {
              pret: D165.PerieGhidaj.pret,
            },
            AgatatorCovor130: {
              pret: D165.AgatatorCovor130.pret,
            },
            Inel40: {
              pret: D165.Inel40.pret,
            },
            CapacLateral: {
              pret: D165.CapacLateral.pret,
            },
            Fulie: {
              pret: D165.Fulie.pret,
            },
            Dop: {
              pret: D165.Dop.pret,
            },
            KitPlasa: {
              pret: D165.KitPlasa.pret,
            },
            Rulment: {
              pret: D165.Rulment.pret,
            },
            Snur: {
              pret: D165.Snur.pret,
            },
            Automat: {
              pret: D165.Automat.pret,
            },
            OpritorAscuns: {
              pret: D165.OpritorAscuns.pret,
            },
            PalnieGhidaj: {
              pret: D165.PalnieGhidaj.pret,
            },
            OrnamentPlastic: {
              pret: D165.OrnamentPlastic.pret,
            },
            RolaPlasticCuCilindru: {
              pret: D165.RolaPlasticCuCilindru.pret,
            },
            ArcCilindric: {
              pret: D165.ArcCilindric.pret,
            },
            Arriter: {
              pret: D165.Arriter.pret,
            },
          },
          D180: {
            TocTenc180pe20: {
              pret: D180.TocTenc180pe20.pret,
            },
            SinaDeTencuire20: {
              pret: D180.SinaDeTencuire20.pret,
            },
            LamelaAluminiu: {
              pret: D180.LamelaAluminiu.pret,
            },
            LamelaTerminala: {
              pret: D180.LamelaTerminala.pret,
            },
            PanelServIz180pe20: {
              pret: D180.PanelServIz180pe20.pret,
            },
            AxOctogonal40: {
              pret: D180.AxOctogonal40.pret,
            },
            GhidajAluKombi: {
              pret: D180.GhidajAluKombi.pret,
            },
            ProfilMobilPlasa: {
              pret: D180.ProfilMobilPlasa.pret,
            },
            ProfilFixPlasa: {
              pret: D180.ProfilFixPlasa.pret,
            },
            PerieGhidajPlasa: {
              pret: D180.PerieGhidajPlasa.pret,
            },
            PlasaPeAx: {
              pret: D180.PlasaPeAx.pret,
            },
            PerieGhidaj: {
              pret: D180.PerieGhidaj.pret,
            },
            AgatatorCovor130: {
              pret: D180.AgatatorCovor130.pret,
            },
            Inel40: {
              pret: D180.Inel40.pret,
            },
            CapacLateral: {
              pret: D180.CapacLateral.pret,
            },
            Fulie: {
              pret: D180.Fulie.pret,
            },
            Dop: {
              pret: D180.Dop.pret,
            },
            KitPlasa: {
              pret: D180.KitPlasa.pret,
            },
            Rulment: {
              pret: D180.Rulment.pret,
            },
            Snur: {
              pret: D180.Snur.pret,
            },
            Automat: {
              pret: D180.Automat.pret,
            },
            OpritorAscuns: {
              pret: D180.OpritorAscuns.pret,
            },
            PalnieGhidaj: {
              pret: D180.PalnieGhidaj.pret,
            },
            OrnamentPlastic: {
              pret: D180.OrnamentPlastic.pret,
            },
            RolaPlasticCuCilindru: {
              pret: D180.RolaPlasticCuCilindru.pret,
            },
            ArcCilindric: {
              pret: D180.ArcCilindric.pret,
            },
            Arriter: {
              pret: D180.Arriter.pret,
            },
          },
          D205: {
            TocTenc205pe20: {
              pret: D205.TocTenc205pe20.pret,
            },
            SinaDeTencuire20: {
              pret: D205.SinaDeTencuire20.pret,
            },
            LamelaAluminiu: {
              pret: D205.LamelaAluminiu.pret,
            },
            LamelaTerminala: {
              pret: D205.LamelaTerminala.pret,
            },
            PanelServIz205pe20: {
              pret: D205.PanelServIz205pe20.pret,
            },
            AxOctogonal40: {
              pret: D205.AxOctogonal40.pret,
            },
            GhidajAluKombi: {
              pret: D205.GhidajAluKombi.pret,
            },
            ProfilMobilPlasa: {
              pret: D205.ProfilMobilPlasa.pret,
            },
            ProfilFixPlasa: {
              pret: D205.ProfilFixPlasa.pret,
            },
            PerieGhidajPlasa: {
              pret: D205.PerieGhidajPlasa.pret,
            },
            PlasaPeAx: {
              pret: D205.PlasaPeAx.pret,
            },
            PerieGhidaj: {
              pret: D205.PerieGhidaj.pret,
            },
            AgatatorCovor130: {
              pret: D205.AgatatorCovor130.pret,
            },
            Inel40: {
              pret: D205.Inel40.pret,
            },
            CapacLateral: {
              pret: D205.CapacLateral.pret,
            },
            Fulie: {
              pret: D205.Fulie.pret,
            },
            Dop: {
              pret: D205.Dop.pret,
            },
            KitPlasa: {
              pret: D205.KitPlasa.pret,
            },
            Rulment: {
              pret: D205.Rulment.pret,
            },
            Snur: {
              pret: D205.Snur.pret,
            },
            Automat: {
              pret: D205.Automat.pret,
            },
            OpritorAscuns: {
              pret: D205.OpritorAscuns.pret,
            },
            PalnieGhidaj: {
              pret: D205.PalnieGhidaj.pret,
            },
            OrnamentPlastic: {
              pret: D205.OrnamentPlastic.pret,
            },
            RolaPlasticCuCilindru: {
              pret: D205.RolaPlasticCuCilindru.pret,
            },
            ArcCilindric: {
              pret: D205.ArcCilindric.pret,
            },
            Arriter: {
              pret: D205.Arriter.pret,
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
                  value="Rulou tencuibil cu plasa"
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
                  controlid="TocTenc165pe20C1D165"
                  sx={{ mt: 2 }}
                  id="TocTenc165pe20D165"
                  label="Introduceți Toc Tencuibil 165pe20"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
                      ...prevState,
                      TocTenc165pe20: {
                        ...prevState.TocTenc165pe20,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="SinaDeTencuire20C1D165"
                  sx={{ mt: 2 }}
                  id="SinaDeTencuire20C1D165"
                  label="Introduceți Sina De Tencuire 20"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
                      ...prevState,
                      SinaDeTencuire20: {
                        ...prevState.SinaDeTencuire20,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="LamelaAluminiuC1D165"
                  sx={{ mt: 2 }}
                  id="LamelaAluminiuC1D165"
                  label="Introduceți Lamela Aluminiu"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
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
                  controlid="LamelaTerminalaC1D165"
                  sx={{ mt: 2 }}
                  id="LamelaTerminalaC1D165"
                  label="Introduceți Lamela Terminala"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
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
                  controlid="PanelServIz165pe20C1D165"
                  sx={{ mt: 2 }}
                  id="PanelServIz165pe20C1D165"
                  label="Introduceți PanelServIz165pe20"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
                      ...prevState,
                      PanelServIz165pe20: {
                        ...prevState.PanelServIz165pe20,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="AxOctogonal40C1D165"
                  sx={{ mt: 2 }}
                  id="AxOctogonal40C1D165"
                  label="Introduceți AxOctogonal40"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
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
                  controlid="GhidajAluKombiC1D165"
                  sx={{ mt: 2 }}
                  id="GhidajAluKombiC1D165"
                  label="Introduceți GhidajAluKombi"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
                      ...prevState,
                      GhidajAluKombi: {
                        ...prevState.GhidajAluKombi,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="ProfilMobilPlasaC1D165"
                  sx={{ mt: 2 }}
                  id="ProfilMobilPlasaC1D165"
                  label="Introduceți ProfilMobilPlasa"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
                      ...prevState,
                      ProfilMobilPlasa: {
                        ...prevState.ProfilMobilPlasa,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="ProfilFixPlasaC1D165"
                  sx={{ mt: 2 }}
                  id="ProfilFixPlasaC1D165"
                  label="Introduceți ProfilFixPlasa"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
                      ...prevState,
                      ProfilFixPlasa: {
                        ...prevState.ProfilFixPlasa,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="PerieGhidajPlasaC1D165"
                  sx={{ mt: 2 }}
                  id="PerieGhidajPlasaC1D165"
                  label="Introduceți PerieGhidajPlasa"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
                      ...prevState,
                      PerieGhidajPlasa: {
                        ...prevState.PerieGhidajPlasa,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="PlasaPeAxC1D165"
                  sx={{ mt: 2 }}
                  id="PlasaPeAxC1D165"
                  label="Introduceți PlasaPeAx"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
                      ...prevState,
                      PlasaPeAx: {
                        ...prevState.PlasaPeAx,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="PerieGhidajC1D165"
                  sx={{ mt: 2 }}
                  id="PerieGhidajC1D165"
                  label="Introduceți PerieGhidaj"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
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
                  controlid="AgatatorCovor130C1D165"
                  sx={{ mt: 2 }}
                  id="AgatatorCovor130C1D165"
                  label="Introduceți AgatatorCovor130"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
                      ...prevState,
                      AgatatorCovor130: {
                        ...prevState.AgatatorCovor130,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="Inel40C1D165"
                  sx={{ mt: 2 }}
                  id="Inel40C1D165"
                  label="Introduceți Inel40"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
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
                  controlid="CapacLateralC1D165"
                  sx={{ mt: 2 }}
                  id="CapacLateralC1D165"
                  label="Introduceți CapacLateral"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
                      ...prevState,
                      CapacLateral: {
                        ...prevState.CapacLateral,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="FulieC1D165"
                  sx={{ mt: 2 }}
                  id="FulieC1D165"
                  label="Introduceți Fulie"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
                      ...prevState,
                      Fulie: {
                        ...prevState.Fulie,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="DopC1D165"
                  sx={{ mt: 2 }}
                  id="DopC1D165"
                  label="Introduceți Dop"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
                      ...prevState,
                      Dop: {
                        ...prevState.Dop,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="KitPlasaC1D165"
                  sx={{ mt: 2 }}
                  id="KitPlasaC1D165"
                  label="Introduceți KitPlasa"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
                      ...prevState,
                      KitPlasa: {
                        ...prevState.KitPlasa,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="RulmentC1D165"
                  sx={{ mt: 2 }}
                  id="RulmentC1D165"
                  label="Introduceți Rulment"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
                      ...prevState,
                      Rulment: {
                        ...prevState.Rulment,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="SnurC1D165"
                  sx={{ mt: 2 }}
                  id="SnurC1D165"
                  label="Introduceți Snur"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
                      ...prevState,
                      Snur: {
                        ...prevState.Snur,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="AutomatC1D165"
                  sx={{ mt: 2 }}
                  id="AutomatC1D165"
                  label="Introduceți Automat"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
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
                  controlid="OpritorAscunsC1D165"
                  sx={{ mt: 2 }}
                  id="OpritorAscunsC1D165"
                  label="Introduceți OpritorAscuns"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
                      ...prevState,
                      OpritorAscuns: {
                        ...prevState.OpritorAscuns,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="PalnieGhidajC1D165"
                  sx={{ mt: 2 }}
                  id="PalnieGhidajC1D165"
                  label="Introduceți PalnieGhidaj"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
                      ...prevState,
                      PalnieGhidaj: {
                        ...prevState.PalnieGhidaj,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="OrnamentPlasticC1D165"
                  sx={{ mt: 2 }}
                  id="OrnamentPlasticC1D165"
                  label="Introduceți OrnamentPlastic"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
                      ...prevState,
                      OrnamentPlastic: {
                        ...prevState.OrnamentPlastic,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="RolaPlasticCuCilindruC1D165"
                  sx={{ mt: 2 }}
                  id="RolaPlasticCuCilindruC1D165"
                  label="Introduceți RolaPlasticCuCilindru"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
                      ...prevState,
                      RolaPlasticCuCilindru: {
                        ...prevState.RolaPlasticCuCilindru,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="ArcCilindricC1D165"
                  sx={{ mt: 2 }}
                  id="ArcCilindricC1D165"
                  label="Introduceți ArcCilindric"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
                      ...prevState,
                      ArcCilindric: {
                        ...prevState.ArcCilindric,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="ArriterC1D165"
                  sx={{ mt: 2 }}
                  id="ArriterC1D165"
                  label="Introduceți Arriter"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
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
            </Grid>
            <Grid item xs={isSmallScreen ? 12 : 4}>
              <Typography> D180</Typography>
              <FormGroup>
                <TextField
                  controlid="TocTenc180pe20C1D180"
                  sx={{ mt: 2 }}
                  id="TocTenc180pe20D180"
                  label="Introduceți Toc Tencuibil 180pe20"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
                      ...prevState,
                      TocTenc180pe20: {
                        ...prevState.TocTenc180pe20,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="SinaDeTencuire20C1D180"
                  sx={{ mt: 2 }}
                  id="SinaDeTencuire20C1D180"
                  label="Introduceți Sina De Tencuire 20"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
                      ...prevState,
                      SinaDeTencuire20: {
                        ...prevState.SinaDeTencuire20,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="LamelaAluminiuC1D180"
                  sx={{ mt: 2 }}
                  id="LamelaAluminiuC1D180"
                  label="Introduceți Lamela Aluminiu"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
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
                  controlid="LamelaTerminalaC1D180"
                  sx={{ mt: 2 }}
                  id="LamelaTerminalaC1D180"
                  label="Introduceți Lamela Terminala"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
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
                  controlid="PanelServIz180pe20C1D180"
                  sx={{ mt: 2 }}
                  id="PanelServIz180pe20C1D180"
                  label="Introduceți PanelServIz180pe20"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
                      ...prevState,
                      PanelServIz180pe20: {
                        ...prevState.PanelServIz180pe20,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="AxOctogonal40C1D180"
                  sx={{ mt: 2 }}
                  id="AxOctogonal40C1D180"
                  label="Introduceți AxOctogonal40"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
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
                  controlid="GhidajAluKombiC1D180"
                  sx={{ mt: 2 }}
                  id="GhidajAluKombiC1D180"
                  label="Introduceți GhidajAluKombi"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
                      ...prevState,
                      GhidajAluKombi: {
                        ...prevState.GhidajAluKombi,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="ProfilMobilPlasaC1D180"
                  sx={{ mt: 2 }}
                  id="ProfilMobilPlasaC1D180"
                  label="Introduceți ProfilMobilPlasa"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
                      ...prevState,
                      ProfilMobilPlasa: {
                        ...prevState.ProfilMobilPlasa,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="ProfilFixPlasaC1D180"
                  sx={{ mt: 2 }}
                  id="ProfilFixPlasaC1D180"
                  label="Introduceți ProfilFixPlasa"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
                      ...prevState,
                      ProfilFixPlasa: {
                        ...prevState.ProfilFixPlasa,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="PerieGhidajPlasaC1D180"
                  sx={{ mt: 2 }}
                  id="PerieGhidajPlasaC1D180"
                  label="Introduceți PerieGhidajPlasa"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
                      ...prevState,
                      PerieGhidajPlasa: {
                        ...prevState.PerieGhidajPlasa,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="PlasaPeAxC1D180"
                  sx={{ mt: 2 }}
                  id="PlasaPeAxC1D180"
                  label="Introduceți PlasaPeAx"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
                      ...prevState,
                      PlasaPeAx: {
                        ...prevState.PlasaPeAx,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="PerieGhidajC1D180"
                  sx={{ mt: 2 }}
                  id="PerieGhidajC1D180"
                  label="Introduceți PerieGhidaj"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
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
                  controlid="AgatatorCovor130C1D180"
                  sx={{ mt: 2 }}
                  id="AgatatorCovor130C1D180"
                  label="Introduceți AgatatorCovor130"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
                      ...prevState,
                      AgatatorCovor130: {
                        ...prevState.AgatatorCovor130,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="Inel40C1D180"
                  sx={{ mt: 2 }}
                  id="Inel40C1D180"
                  label="Introduceți Inel40"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
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
                  controlid="CapacLateralC1D180"
                  sx={{ mt: 2 }}
                  id="CapacLateralC1D180"
                  label="Introduceți CapacLateral"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
                      ...prevState,
                      CapacLateral: {
                        ...prevState.CapacLateral,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="FulieC1D180"
                  sx={{ mt: 2 }}
                  id="FulieC1D180"
                  label="Introduceți Fulie"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
                      ...prevState,
                      Fulie: {
                        ...prevState.Fulie,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="DopC1D180"
                  sx={{ mt: 2 }}
                  id="DopC1D180"
                  label="Introduceți Dop"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
                      ...prevState,
                      Dop: {
                        ...prevState.Dop,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="KitPlasaC1D180"
                  sx={{ mt: 2 }}
                  id="KitPlasaC1D180"
                  label="Introduceți KitPlasa"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
                      ...prevState,
                      KitPlasa: {
                        ...prevState.KitPlasa,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="RulmentC1D180"
                  sx={{ mt: 2 }}
                  id="RulmentC1D180"
                  label="Introduceți Rulment"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
                      ...prevState,
                      Rulment: {
                        ...prevState.Rulment,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="SnurC1D180"
                  sx={{ mt: 2 }}
                  id="SnurC1D180"
                  label="Introduceți Snur"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
                      ...prevState,
                      Snur: {
                        ...prevState.Snur,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="AutomatC1D180"
                  sx={{ mt: 2 }}
                  id="AutomatC1D180"
                  label="Introduceți Automat"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
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
                  controlid="OpritorAscunsC1D180"
                  sx={{ mt: 2 }}
                  id="OpritorAscunsC1D180"
                  label="Introduceți OpritorAscuns"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
                      ...prevState,
                      OpritorAscuns: {
                        ...prevState.OpritorAscuns,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="PalnieGhidajC1D180"
                  sx={{ mt: 2 }}
                  id="PalnieGhidajC1D180"
                  label="Introduceți PalnieGhidaj"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
                      ...prevState,
                      PalnieGhidaj: {
                        ...prevState.PalnieGhidaj,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="OrnamentPlasticC1D180"
                  sx={{ mt: 2 }}
                  id="OrnamentPlasticC1D180"
                  label="Introduceți OrnamentPlastic"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
                      ...prevState,
                      OrnamentPlastic: {
                        ...prevState.OrnamentPlastic,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="RolaPlasticCuCilindruC1D180"
                  sx={{ mt: 2 }}
                  id="RolaPlasticCuCilindruC1D180"
                  label="Introduceți RolaPlasticCuCilindru"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
                      ...prevState,
                      RolaPlasticCuCilindru: {
                        ...prevState.RolaPlasticCuCilindru,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="ArcCilindricC1D180"
                  sx={{ mt: 2 }}
                  id="ArcCilindricC1D180"
                  label="Introduceți ArcCilindric"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
                      ...prevState,
                      ArcCilindric: {
                        ...prevState.ArcCilindric,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="ArriterC1D180"
                  sx={{ mt: 2 }}
                  id="ArriterC1D180"
                  label="Introduceți Arriter"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
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
            </Grid>
            <Grid item xs={isSmallScreen ? 12 : 4}>
              <Typography> D205</Typography>
              <FormGroup>
                <TextField
                  controlid="TocTenc205pe20C1D205"
                  sx={{ mt: 2 }}
                  id="TocTenc205pe20D205"
                  label="Introduceți Toc Tencuibil 205pe20"
                  variant="outlined"
                  onChange={(e) =>
                    setD205((prevState) => ({
                      ...prevState,
                      TocTenc205pe20: {
                        ...prevState.TocTenc205pe20,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="SinaDeTencuire20C1D205"
                  sx={{ mt: 2 }}
                  id="SinaDeTencuire20C1D205"
                  label="Introduceți Sina De Tencuire 20"
                  variant="outlined"
                  onChange={(e) =>
                    setD205((prevState) => ({
                      ...prevState,
                      SinaDeTencuire20: {
                        ...prevState.SinaDeTencuire20,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="LamelaAluminiuC1D205"
                  sx={{ mt: 2 }}
                  id="LamelaAluminiuC1D205"
                  label="Introduceți Lamela Aluminiu"
                  variant="outlined"
                  onChange={(e) =>
                    setD205((prevState) => ({
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
                  controlid="LamelaTerminalaC1D205"
                  sx={{ mt: 2 }}
                  id="LamelaTerminalaC1D205"
                  label="Introduceți Lamela Terminala"
                  variant="outlined"
                  onChange={(e) =>
                    setD205((prevState) => ({
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
                  controlid="PanelServIz205pe20C1D205"
                  sx={{ mt: 2 }}
                  id="PanelServIz205pe20C1D205"
                  label="Introduceți PanelServIz205pe20"
                  variant="outlined"
                  onChange={(e) =>
                    setD205((prevState) => ({
                      ...prevState,
                      PanelServIz205pe20: {
                        ...prevState.PanelServIz205pe20,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="AxOctogonal40C1D205"
                  sx={{ mt: 2 }}
                  id="AxOctogonal40C1D205"
                  label="Introduceți AxOctogonal40"
                  variant="outlined"
                  onChange={(e) =>
                    setD205((prevState) => ({
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
                  controlid="GhidajAluKombiC1D205"
                  sx={{ mt: 2 }}
                  id="GhidajAluKombiC1D205"
                  label="Introduceți GhidajAluKombi"
                  variant="outlined"
                  onChange={(e) =>
                    setD205((prevState) => ({
                      ...prevState,
                      GhidajAluKombi: {
                        ...prevState.GhidajAluKombi,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="ProfilMobilPlasaC1D205"
                  sx={{ mt: 2 }}
                  id="ProfilMobilPlasaC1D205"
                  label="Introduceți ProfilMobilPlasa"
                  variant="outlined"
                  onChange={(e) =>
                    setD205((prevState) => ({
                      ...prevState,
                      ProfilMobilPlasa: {
                        ...prevState.ProfilMobilPlasa,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="ProfilFixPlasaC1D205"
                  sx={{ mt: 2 }}
                  id="ProfilFixPlasaC1D205"
                  label="Introduceți ProfilFixPlasa"
                  variant="outlined"
                  onChange={(e) =>
                    setD205((prevState) => ({
                      ...prevState,
                      ProfilFixPlasa: {
                        ...prevState.ProfilFixPlasa,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="PerieGhidajPlasaC1D205"
                  sx={{ mt: 2 }}
                  id="PerieGhidajPlasaC1D205"
                  label="Introduceți PerieGhidajPlasa"
                  variant="outlined"
                  onChange={(e) =>
                    setD205((prevState) => ({
                      ...prevState,
                      PerieGhidajPlasa: {
                        ...prevState.PerieGhidajPlasa,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="PlasaPeAxC1D205"
                  sx={{ mt: 2 }}
                  id="PlasaPeAxC1D205"
                  label="Introduceți PlasaPeAx"
                  variant="outlined"
                  onChange={(e) =>
                    setD205((prevState) => ({
                      ...prevState,
                      PlasaPeAx: {
                        ...prevState.PlasaPeAx,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="PerieGhidajC1D205"
                  sx={{ mt: 2 }}
                  id="PerieGhidajC1D205"
                  label="Introduceți PerieGhidaj"
                  variant="outlined"
                  onChange={(e) =>
                    setD205((prevState) => ({
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
                  controlid="AgatatorCovor130C1D205"
                  sx={{ mt: 2 }}
                  id="AgatatorCovor130C1D205"
                  label="Introduceți AgatatorCovor130"
                  variant="outlined"
                  onChange={(e) =>
                    setD205((prevState) => ({
                      ...prevState,
                      AgatatorCovor130: {
                        ...prevState.AgatatorCovor130,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="Inel40C1D205"
                  sx={{ mt: 2 }}
                  id="Inel40C1D205"
                  label="Introduceți Inel40"
                  variant="outlined"
                  onChange={(e) =>
                    setD205((prevState) => ({
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
                  controlid="CapacLateralC1D205"
                  sx={{ mt: 2 }}
                  id="CapacLateralC1D205"
                  label="Introduceți CapacLateral"
                  variant="outlined"
                  onChange={(e) =>
                    setD205((prevState) => ({
                      ...prevState,
                      CapacLateral: {
                        ...prevState.CapacLateral,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="FulieC1D205"
                  sx={{ mt: 2 }}
                  id="FulieC1D205"
                  label="Introduceți Fulie"
                  variant="outlined"
                  onChange={(e) =>
                    setD205((prevState) => ({
                      ...prevState,
                      Fulie: {
                        ...prevState.Fulie,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="DopC1D205"
                  sx={{ mt: 2 }}
                  id="DopC1D205"
                  label="Introduceți Dop"
                  variant="outlined"
                  onChange={(e) =>
                    setD205((prevState) => ({
                      ...prevState,
                      Dop: {
                        ...prevState.Dop,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="KitPlasaC1D205"
                  sx={{ mt: 2 }}
                  id="KitPlasaC1D205"
                  label="Introduceți KitPlasa"
                  variant="outlined"
                  onChange={(e) =>
                    setD205((prevState) => ({
                      ...prevState,
                      KitPlasa: {
                        ...prevState.KitPlasa,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="RulmentC1D205"
                  sx={{ mt: 2 }}
                  id="RulmentC1D205"
                  label="Introduceți Rulment"
                  variant="outlined"
                  onChange={(e) =>
                    setD205((prevState) => ({
                      ...prevState,
                      Rulment: {
                        ...prevState.Rulment,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="SnurC1D205"
                  sx={{ mt: 2 }}
                  id="SnurC1D205"
                  label="Introduceți Snur"
                  variant="outlined"
                  onChange={(e) =>
                    setD205((prevState) => ({
                      ...prevState,
                      Snur: {
                        ...prevState.Snur,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="AutomatC1D205"
                  sx={{ mt: 2 }}
                  id="AutomatC1D205"
                  label="Introduceți Automat"
                  variant="outlined"
                  onChange={(e) =>
                    setD205((prevState) => ({
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
                  controlid="OpritorAscunsC1D205"
                  sx={{ mt: 2 }}
                  id="OpritorAscunsC1D205"
                  label="Introduceți OpritorAscuns"
                  variant="outlined"
                  onChange={(e) =>
                    setD205((prevState) => ({
                      ...prevState,
                      OpritorAscuns: {
                        ...prevState.OpritorAscuns,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="PalnieGhidajC1D205"
                  sx={{ mt: 2 }}
                  id="PalnieGhidajC1D205"
                  label="Introduceți PalnieGhidaj"
                  variant="outlined"
                  onChange={(e) =>
                    setD205((prevState) => ({
                      ...prevState,
                      PalnieGhidaj: {
                        ...prevState.PalnieGhidaj,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="OrnamentPlasticC1D205"
                  sx={{ mt: 2 }}
                  id="OrnamentPlasticC1D205"
                  label="Introduceți OrnamentPlastic"
                  variant="outlined"
                  onChange={(e) =>
                    setD205((prevState) => ({
                      ...prevState,
                      OrnamentPlastic: {
                        ...prevState.OrnamentPlastic,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="RolaPlasticCuCilindruC1D205"
                  sx={{ mt: 2 }}
                  id="RolaPlasticCuCilindruC1D205"
                  label="Introduceți RolaPlasticCuCilindru"
                  variant="outlined"
                  onChange={(e) =>
                    setD205((prevState) => ({
                      ...prevState,
                      RolaPlasticCuCilindru: {
                        ...prevState.RolaPlasticCuCilindru,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="ArcCilindricC1D205"
                  sx={{ mt: 2 }}
                  id="ArcCilindricC1D205"
                  label="Introduceți ArcCilindric"
                  variant="outlined"
                  onChange={(e) =>
                    setD205((prevState) => ({
                      ...prevState,
                      ArcCilindric: {
                        ...prevState.ArcCilindric,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="ArriterC1D205"
                  sx={{ mt: 2 }}
                  id="ArriterC1D205"
                  label="Introduceți Arriter"
                  variant="outlined"
                  onChange={(e) =>
                    setD205((prevState) => ({
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
export default CreateProdusTencuibilCuPlasa;
