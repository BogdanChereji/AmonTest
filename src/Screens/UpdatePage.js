import { Box, Container, Typography } from '@mui/material';
import React from 'react';

export default function UpdatePage() {
  return (
    <div>
      <Container sx={{ mt: 5 }}>
        <Box>
          <Box>
            <Typography variant="h6"> v0.1</Typography>
            <Box sx={{ display: 'flex' }}>
              <Box sx={{ mr: 5 }}>
                <Typography>BUG-uri:</Typography>
                <Typography>
                  Problema la editarea unui produs, citeste corect doar nume si
                  culoare nu si preturile
                </Typography>
                <Typography>
                  Dupa adaugarea la comanda a unui produs, cand se reseteaza
                  formularul, checkbox-urile nu isi reseteaza starea.
                </Typography>
                <Typography>
                  De implementat buton printeaza oferta finala din comenzile
                  tale/ comenzi generale
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
