import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import ProduseTable from '../components/Tables/ProduseTable';
import { useNavigate } from 'react-router-dom';
import ProduseCuPlasaTable from '../components/Tables/ProduseCuPlasaTable';
import ProduseTencuibilTable from '../components/Tables/ProduseTencuibilTable';
import ProduseTencuibilCuPlasaTable from '../components/Tables/ProduseTencuibilCuPlasaTable';
import ProduseSuprapusTable from '../components/Tables/ProduseSuprapusTable';
import ProduseSuprapusCuPlasaTable from '../components/Tables/ProduseSuprapusCuPlasaTable';

export default function ProdusePage() {
  const navigate = useNavigate();

  return (
    <Container
      maxWidth="xxl"
      sx={{
        backgroundColor: '#f9f9fb',
        height: '100%',
      }}
    >
      <Grid container spacing={2} mt={1}>
        <Grid item xs={12} sx={{ mt: 1, textAlign: 'center' }}>
          <Button
            sx={{
              backgroundColor: '#06386a',
              mr: 1,
              '&:hover': {
                backgroundColor: '#003c7f',
              },
              '@media (max-width: 800px)': {
                backgroundColor: '#06386a',
                minWidth: '100%',
                marginBottom: 1,
                mr: 0,
                '&:hover': {
                  backgroundColor: '#003c7f',
                },
              },
            }}
            variant="contained"
            color="primary"
            onClick={() => navigate(`/produsnouruloualuminiusimplu`)}
          >
            + RULOU ALUMINIU
          </Button>
          <Button
            sx={{
              backgroundColor: '#06386a',
              ml: 1,
              '&:hover': {
                backgroundColor: '#003c7f',
              },
              '@media (max-width: 800px)': {
                backgroundColor: '#06386a',
                marginBottom: 1,
                minWidth: '100%',
                ml: 0,
                '&:hover': {
                  backgroundColor: '#003c7f',
                },
              },
            }}
            variant="contained"
            color="primary"
            onClick={() => navigate(`/produsnouruloualuminiucuplasa`)}
          >
            + RULOU ALU. cu plasă
          </Button>
          <Button
            sx={{
              backgroundColor: '#06386a',
              ml: 1,
              '&:hover': {
                backgroundColor: '#003c7f',
              },

              '@media (max-width: 800px)': {
                backgroundColor: '#06386a',
                marginBottom: 1,
                minWidth: '100%',
                ml: 0,
                '&:hover': {
                  backgroundColor: '#003c7f',
                },
              },
            }}
            variant="contained"
            color="primary"
            onClick={() => navigate(`/produsnouruloutencuibil`)}
          >
            + RULOU TENCUIBIL
          </Button>
          <Button
            sx={{
              backgroundColor: '#06386a',
              ml: 1,
              '&:hover': {
                backgroundColor: '#003c7f',
              },

              '@media (max-width: 800px)': {
                backgroundColor: '#06386a',
                marginBottom: 1,
                minWidth: '100%',
                ml: 0,
                '&:hover': {
                  backgroundColor: '#003c7f',
                },
              },
            }}
            variant="contained"
            color="primary"
            onClick={() => navigate(`/produsnouruloutencuibilcuplasa`)}
          >
            + RULOU TENC. cu plasă
          </Button>
          <Button
            sx={{
              backgroundColor: '#06386a',
              ml: 1,
              '&:hover': {
                backgroundColor: '#003c7f',
              },

              '@media (max-width: 800px)': {
                backgroundColor: '#06386a',
                marginBottom: 1,
                minWidth: '100%',
                ml: 0,
                '&:hover': {
                  backgroundColor: '#003c7f',
                },
              },
            }}
            variant="contained"
            color="primary"
            onClick={() => navigate(`/produsnourulousuprapus`)}
          >
            + RULOU SUPRAPUS
          </Button>
          <Button
            sx={{
              backgroundColor: '#06386a',
              ml: 1,
              '&:hover': {
                backgroundColor: '#003c7f',
              },

              '@media (max-width: 800px)': {
                backgroundColor: '#06386a',
                marginBottom: 1,
                minWidth: '100%',
                ml: 0,
                '&:hover': {
                  backgroundColor: '#003c7f',
                },
              },
            }}
            variant="contained"
            color="primary"
            onClick={() => navigate(`/produsnourulousuprapuscuplasa`)}
          >
            + RULOU SUPR. CU PLASĂ
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Typography variant="subtitle1" style={{ color: '#06386a' }}>
              Rulou aluminiu
            </Typography>
            <ProduseTable />
          </Box>{' '}
          <Box sx={{ mt: 3 }}>
            <Typography variant="subtitle1" style={{ color: '#06386a' }}>
              Rulou aluminiu cu plasa
            </Typography>
            <ProduseCuPlasaTable />
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography variant="subtitle1" style={{ color: '#06386a' }}>
              Rulou Tencuibil
            </Typography>
            <ProduseTencuibilTable />
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography variant="subtitle1" style={{ color: '#06386a' }}>
              Rulou Tencuibil cu plasa
            </Typography>
            <ProduseTencuibilCuPlasaTable />
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography variant="subtitle1" style={{ color: '#06386a' }}>
              Rulou suprapus
            </Typography>
            <ProduseSuprapusTable />
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography variant="subtitle1" style={{ color: '#06386a' }}>
              Rulou suprapus cu plasa
            </Typography>
            <ProduseSuprapusCuPlasaTable />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
