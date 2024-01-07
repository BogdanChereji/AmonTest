import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import ProduseTable from '../components/Tables/ProduseTable';
import { useNavigate } from 'react-router-dom';
import OferteTable from '../components/Tables/OfertaSingleTable';

export default function ComenziSinglePage() {
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
            Comenzile tale
          </Typography>
          <OferteTable />
        </Grid>
      </Grid>
    </Container>
  );
}
