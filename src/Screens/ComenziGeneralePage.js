import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import OferteTableGeneral from '../components/Tables/OfertaGeneralTable';

export default function ComenziGeneralePage() {
  const navigate = useNavigate();

  return (
    <Container
      maxWidth="xxl"
      sx={{
        backgroundColor: '#f9f9fb',
        height: '100vh',
        mt: 10,
      }}
    >
      <Grid container spacing={2} mt={1}>
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ mb: 3, color: '#06386a' }}>
            Toate comenzile
          </Typography>
          <OferteTableGeneral />
        </Grid>
      </Grid>
    </Container>
  );
}
