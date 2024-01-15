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

function CreateProdusTencuibil() {
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
  const [Nume, setNume] = useState('Rulou tencuibil');
  const [NumeCuloare, setNumeCuloare] = useState('');
  const [D165, setD165] = useState({
    TocRulouTencuibil165pe20: {
      pret: '',
    },
    SinaTencuibilaPanelService: {
      pret: '',
    },
    PanelService165pe20: {
      pret: '',
    },
    PolistirenExtrudat: {
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
    GhidajAlu: {
      pret: '',
    },
    PerieGhidaj: {
      pret: '',
    },
    AgatatorCovor170: {
      pret: '',
    },
    Inel40: {
      pret: '',
    },
    CapacLateral165pe20: {
      pret: '',
    },
    Fulie165: {
      pret: '',
    },
    Dop40: {
      pret: '',
    },
    Rulment: {
      pret: '',
    },
    Snur: {
      pret: '',
    },
    PalnieGhidaj: {
      pret: '',
    },
    OrnamentPlastic: {
      pret: '',
    },
    RolaPlastic: {
      pret: '',
    },
    ArcCilindric: {
      pret: '',
    },
    Automat: {
      pret: '',
    },
    OpritorAscuns: {
      pret: '',
    },
    Arriter: {
      pret: '',
    },
  });
  const [D180, setD180] = useState({
    TocRulouTencuibil165pe20: {
      pret: '',
    },
    SinaTencuibilaPanelService: {
      pret: '',
    },
    PanelService165pe20: {
      pret: '',
    },
    PolistirenExtrudat: {
      pret: '',
    },
    AxOctogonal60: {
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
    GhidajAlu: {
      pret: '',
    },
    PerieGhidaj: {
      pret: '',
    },
    AgatatorCovor170: {
      pret: '',
    },
    Inel60: {
      pret: '',
    },
    CapacLateral165pe20: {
      pret: '',
    },
    Fulie165: {
      pret: '',
    },
    Dop60: {
      pret: '',
    },
    Rulment: {
      pret: '',
    },
    Snur: {
      pret: '',
    },
    PalnieGhidaj: {
      pret: '',
    },
    OrnamentPlastic: {
      pret: '',
    },
    RolaPlastic: {
      pret: '',
    },
    ArcCilindric: {
      pret: '',
    },
    Automat: {
      pret: '',
    },
    OpritorAscuns: {
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
        `${API_LINK}/api/produsetencuibil`,
        {
          Nume,
          NumeCuloare,
          D165: {
            TocRulouTencuibil165pe20: {
              pret: D165.TocRulouTencuibil165pe20.pret,
            },
            SinaTencuibilaPanelService: {
              pret: D165.SinaTencuibilaPanelService.pret,
            },
            PanelService165pe20: {
              pret: D165.PanelService165pe20.pret,
            },
            PolistirenExtrudat: {
              pret: D165.PolistirenExtrudat.pret,
            },
            AxOctogonal40: {
              pret: D165.AxOctogonal40.pret,
            },
            LamelaAluminiu: {
              pret: D165.LamelaAluminiu.pret,
            },
            LamelaTerminala: {
              pret: D165.LamelaTerminala.pret,
            },
            GarnituraDeContact: {
              pret: D165.GarnituraDeContact.pret,
            },
            GhidajAlu: {
              pret: D165.GhidajAlu.pret,
            },
            PerieGhidaj: {
              pret: D165.PerieGhidaj.pret,
            },
            AgatatorCovor170: {
              pret: D165.AgatatorCovor170.pret,
            },
            Inel40: {
              pret: D165.Inel40.pret,
            },
            CapacLateral165pe20: {
              pret: D165.CapacLateral165pe20.pret,
            },
            Fulie165: {
              pret: D165.Fulie165.pret,
            },
            Dop40: {
              pret: D165.Dop40.pret,
            },
            Rulment: {
              pret: D165.Rulment.pret,
            },
            Snur: {
              pret: D165.Snur.pret,
            },
            PalnieGhidaj: {
              pret: D165.PalnieGhidaj.pret,
            },
            OrnamentPlastic: {
              pret: D165.OrnamentPlastic.pret,
            },
            RolaPlastic: {
              pret: D165.RolaPlastic.pret,
            },
            ArcCilindric: {
              pret: D165.ArcCilindric.pret,
            },
            Automat: {
              pret: D165.Automat.pret,
            },
            OpritorAscuns: {
              pret: D165.OpritorAscuns.pret,
            },
            Arriter: {
              pret: D165.Arriter.pret,
            },
          },
          D180: {
            TocRulouTencuibil165pe20: {
              pret: D180.TocRulouTencuibil165pe20.pret,
            },
            SinaTencuibilaPanelService: {
              pret: D180.SinaTencuibilaPanelService.pret,
            },
            PanelService165pe20: {
              pret: D180.PanelService165pe20.pret,
            },
            PolistirenExtrudat: {
              pret: D180.PolistirenExtrudat.pret,
            },
            AxOctogonal60: {
              pret: D180.AxOctogonal60.pret,
            },
            LamelaAluminiu: {
              pret: D180.LamelaAluminiu.pret,
            },
            LamelaTerminala: {
              pret: D180.LamelaTerminala.pret,
            },
            GarnituraDeContact: {
              pret: D180.GarnituraDeContact.pret,
            },
            GhidajAlu: {
              pret: D180.GhidajAlu.pret,
            },
            PerieGhidaj: {
              pret: D180.PerieGhidaj.pret,
            },
            AgatatorCovor170: {
              pret: D180.AgatatorCovor170.pret,
            },
            Inel60: {
              pret: D180.Inel60.pret,
            },
            CapacLateral165pe20: {
              pret: D180.CapacLateral165pe20.pret,
            },
            Fulie165: {
              pret: D180.Fulie165.pret,
            },
            Dop60: {
              pret: D180.Dop60.pret,
            },
            Rulment: {
              pret: D180.Rulment.pret,
            },
            Snur: {
              pret: D180.Snur.pret,
            },
            PalnieGhidaj: {
              pret: D180.PalnieGhidaj.pret,
            },
            OrnamentPlastic: {
              pret: D180.OrnamentPlastic.pret,
            },
            RolaPlastic: {
              pret: D180.RolaPlastic.pret,
            },
            ArcCilindric: {
              pret: D180.ArcCilindric.pret,
            },
            Automat: {
              pret: D180.Automat.pret,
            },
            OpritorAscuns: {
              pret: D180.OpritorAscuns.pret,
            },
            Arriter: {
              pret: D180.Arriter.pret,
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
                  value="Rulou tencuibil"
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
                  controlid="TocRulouTencuibil165pe20C1D165"
                  sx={{ mt: 2 }}
                  id="TocRulouTencuibil165pe20D165"
                  label="Introduceți Toc Rulou Tencuibil 165pe20"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
                      ...prevState,
                      TocRulouTencuibil165pe20: {
                        ...prevState.TocRulouTencuibil165pe20,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="SinaTencuibilaPanelServiceC1D165"
                  sx={{ mt: 2 }}
                  id="SinaTencuibilaPanelServiceC1D165"
                  label="Introduceți Sina Tencuibila pt Panel Service"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
                      ...prevState,
                      SinaTencuibilaPanelService: {
                        ...prevState.SinaTencuibilaPanelService,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="PanelService165pe20C1D165"
                  sx={{ mt: 2 }}
                  id="PanelService165pe20C1D165"
                  label="Introduceți Panel Service 165pe20"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
                      ...prevState,
                      PanelService165pe20: {
                        ...prevState.PanelService165pe20,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="PolistirenExtrudatC1D165"
                  sx={{ mt: 2 }}
                  id="PolistirenExtrudatC1D165"
                  label="Introduceți Polistiren Extrudat"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
                      ...prevState,
                      PolistirenExtrudat: {
                        ...prevState.PolistirenExtrudat,
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
                  controlid="LamelaAluminiuC1D165"
                  sx={{ mt: 2 }}
                  id="LamelaAluminiuC1D165"
                  label="Introduceți LamelaAluminiu"
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
                  label="Introduceți LamelaTerminala"
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
                  controlid="GarnituraDeContactC1D165"
                  sx={{ mt: 2 }}
                  id="GarnituraDeContactC1D165"
                  label="Introduceți GarnituraDeContact"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
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
                  controlid="GhidajAluC1D165"
                  sx={{ mt: 2 }}
                  id="GhidajAluC1D165"
                  label="Introduceți GhidajAlu"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
                      ...prevState,
                      GhidajAlu: {
                        ...prevState.GhidajAlu,
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
                  controlid="AgatatorCovor170C1D165"
                  sx={{ mt: 2 }}
                  id="AgatatorCovor170C1D165"
                  label="Introduceți AgatatorCovor170"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
                      ...prevState,
                      AgatatorCovor170: {
                        ...prevState.AgatatorCovor170,
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
                  controlid="CapacLateral165pe20C1D165"
                  sx={{ mt: 2 }}
                  id="aCapacLateral165pe20C1D165"
                  label="Introduceți CapacLateral165pe20"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
                      ...prevState,
                      CapacLateral165pe20: {
                        ...prevState.CapacLateral165pe20,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="Fulie165C1D165"
                  sx={{ mt: 2 }}
                  id="Fulie165C1D165"
                  label="Introduceți Fulie165"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
                      ...prevState,
                      Fulie165: {
                        ...prevState.Fulie165,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="Dop40C1D165"
                  sx={{ mt: 2 }}
                  id="Dop40C1D165"
                  label="Introduceți Dop40"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
                      ...prevState,
                      Dop40: {
                        ...prevState.Dop40,
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
                  controlid="RolaPlasticC1D165"
                  sx={{ mt: 2 }}
                  id="RolaPlasticC1D165"
                  label="Introduceți RolaPlastic"
                  variant="outlined"
                  onChange={(e) =>
                    setD165((prevState) => ({
                      ...prevState,
                      RolaPlastic: {
                        ...prevState.RolaPlastic,
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
                  controlid="TocRulouTencuibil165pe20C1D180"
                  sx={{ mt: 2 }}
                  id="TocRulouTencuibil165pe20C1D180"
                  label="Introduceți TocRulouTencuibil165pe20"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
                      ...prevState,
                      TocRulouTencuibil165pe20: {
                        ...prevState.TocRulouTencuibil165pe20,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="SinaTencuibilaPanelServiceC1D180"
                  sx={{ mt: 2 }}
                  id="SinaTencuibilaPanelServiceC1D180"
                  label="Introduceți Sina Tencuibila pt Panel Service"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
                      ...prevState,
                      SinaTencuibilaPanelService: {
                        ...prevState.SinaTencuibilaPanelService,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="PanelService165pe20C1D180"
                  sx={{ mt: 2 }}
                  id="PanelService165pe20C1D180"
                  label="Introduceți Panel Service 165pe20"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
                      ...prevState,
                      PanelService165pe20: {
                        ...prevState.PanelService165pe20,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="PolistirenExtrudatC1D180"
                  sx={{ mt: 2 }}
                  id="PolistirenExtrudatC1D180"
                  label="Introduceți PolistirenExtrudat"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
                      ...prevState,
                      PolistirenExtrudat: {
                        ...prevState.PolistirenExtrudat,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="AxOctogonal60C1D180"
                  sx={{ mt: 2 }}
                  id="AxOctogonal60C1D180"
                  label="Introduceți AxOctogonal60"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
                      ...prevState,
                      AxOctogonal60: {
                        ...prevState.AxOctogonal60,
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
                  label="Introduceți LamelaAluminiu"
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
                  label="Introduceți LamelaTerminala"
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
                  controlid="GarnituraDeContactC1D180"
                  sx={{ mt: 2 }}
                  id="GarnituraDeContactC1D180"
                  label="Introduceți GarnituraDeContact"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
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
                  controlid="GhidajAluC1D180"
                  sx={{ mt: 2 }}
                  id="GhidajAluC1D180"
                  label="Introduceți GhidajAlu"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
                      ...prevState,
                      GhidajAlu: {
                        ...prevState.GhidajAlu,
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
                  controlid="AgatatorCovor170C1D180"
                  sx={{ mt: 2 }}
                  id="AgatatorCovor170C1D180"
                  label="Introduceți AgatatorCovor170"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
                      ...prevState,
                      AgatatorCovor170: {
                        ...prevState.AgatatorCovor170,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="Inel60C1D180"
                  sx={{ mt: 2 }}
                  id="Inel60C1D180"
                  label="Introduceți Inel60"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
                      ...prevState,
                      Inel60: {
                        ...prevState.Inel60,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="CapacLateral165pe20C1D180"
                  sx={{ mt: 2 }}
                  id="CapacLateral165pe20C1D180"
                  label="Introduceți CapacLateral165pe20"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
                      ...prevState,
                      CapacLateral165pe20: {
                        ...prevState.CapacLateral165pe20,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="Fulie165C1D180"
                  sx={{ mt: 2 }}
                  id="Fulie165C1D180"
                  label="Introduceți Fulie165"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
                      ...prevState,
                      Fulie165: {
                        ...prevState.Fulie165,
                        pret: e.target.value,
                      },
                    }))
                  }
                />
                <FormControl type="text" />
              </FormGroup>
              <FormGroup>
                <TextField
                  controlid="Dop60C1D180"
                  sx={{ mt: 2 }}
                  id="Dop60C1D180"
                  label="Introduceți Dop60"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
                      ...prevState,
                      Dop60: {
                        ...prevState.Dop60,
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
                  controlid="RolaPlasticC1D180"
                  sx={{ mt: 2 }}
                  id="RolaPlasticC1D180"
                  label="Introduceți RolaPlastic"
                  variant="outlined"
                  onChange={(e) =>
                    setD180((prevState) => ({
                      ...prevState,
                      RolaPlastic: {
                        ...prevState.RolaPlastic,
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
            {/* <Grid item xs={isSmallScreen ? 12 : 4}>
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
            </Grid> */}
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
export default CreateProdusTencuibil;
