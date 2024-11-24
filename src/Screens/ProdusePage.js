import {
  Box,
  Button,
  Container,
  Grid,
  Menu,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import ProduseTable from '../components/Tables/ProduseTable';
import { useNavigate } from 'react-router-dom';
import ProduseCuPlasaTable from '../components/Tables/ProduseCuPlasaTable';
import ProduseTencuibilTable from '../components/Tables/ProduseTencuibilTable';
import ProduseTencuibilCuPlasaTable from '../components/Tables/ProduseTencuibilCuPlasaTable';
import ProduseSuprapusTable from '../components/Tables/ProduseSuprapusTable';
import ProduseSuprapusCuPlasaTable from '../components/Tables/ProduseSuprapusCuPlasaTable';
import ProdusePVCTable from '../components/Tables/ProdusePVCTable';
import ProdusePlasaCuBalamale17x25Table from '../components/Tables/ProdusePlasaCuBalamale17x25Table';
import ProdusePlasaCuClema9x32Table from '../components/Tables/ProdusePlasaCuClema9x32Table';
import ProdusePlasaInGol31x11Table from '../components/Tables/ProdusePlasaInGol31x11Table';
import ProdusePlasaTipRulouTable from '../components/Tables/ProdusePlasaTipRulouTable';
import ProduseUsaCuPerieTable from '../components/Tables/ProduseUsaCuPerieTable';
import ProduseUsaMagneticaTable from '../components/Tables/ProduseUsaMagneticaTable';

export default function ProdusePage() {
  const navigate = useNavigate();
  const [selectedTable, setSelectedTable] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container
      maxWidth="xxl"
      sx={{
        backgroundColor: '#f9f9fb',
        height: '100vh',
      }}
    >
      <Grid container spacing={2} mt={1}>
        <Grid item xs={8} sx={{ mt: 1, textAlign: 'left' }}>
          <Select
            sx={{ minWidth: '100%' }}
            value={selectedTable}
            displayEmpty
            onChange={(e) => setSelectedTable(e.target.value)}
          >
            <MenuItem value="">Alegeți un tabel</MenuItem>
            <MenuItem value="Rulou aluminiu">Rulou aluminiu</MenuItem>
            <MenuItem value="Rulou aluminiu cu plasă">
              Rulou aluminiu cu plasă
            </MenuItem>
            <MenuItem value="Rulou tencuibil">Rulou tencuibil</MenuItem>
            <MenuItem value="Rulou tencuibil cu plasă">
              Rulou tencuibil cu plasă
            </MenuItem>
            <MenuItem value="Rulou suprapus">Rulou suprapus</MenuItem>
            <MenuItem value="Rulou suprapus cu plasă">
              Rulou suprapus cu plasă
            </MenuItem>
            <MenuItem value="Lamelă">Lamelă</MenuItem>
            <MenuItem value="Plasă cu balamale 17x25">
              Plasă cu balamale 17x25
            </MenuItem>
            <MenuItem value="Plasă cu clemă 9x32">Plasă cu clemă 9x32</MenuItem>
            <MenuItem value="Plasă în gol 31x11">Plasă în gol 31x11 </MenuItem>
            <MenuItem value="Plasă tip rulou">Plasă tip rulou</MenuItem>
            <MenuItem value="Ușă cu perie">Usă cu perie</MenuItem>
            <MenuItem value="Ușă magnetică">Usă magnetică</MenuItem>
          </Select>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            mt: 1,
            textAlign: 'right',
            alignContent: 'center',
          }}
        >
          <Button
            onClick={handleClick}
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
          >
            ADAUGĂ PRODUS
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => navigate(`/produsnouruloualuminiusimplu`)}>
              Rulou Aluminiu
            </MenuItem>
            <MenuItem
              onClick={() => navigate(`/produsnouruloualuminiucuplasa`)}
            >
              Rulou Aluminiu cu Plasă
            </MenuItem>
            <MenuItem onClick={() => navigate(`/produsnouruloutencuibil`)}>
              Rulou Tencuibil
            </MenuItem>
            <MenuItem
              onClick={() => navigate(`/produsnouruloutencuibilcuplasa`)}
            >
              Rulou Tencuibil cu Plasă
            </MenuItem>
            <MenuItem onClick={() => navigate(`/produsnourulousuprapus`)}>
              Rulou Suprapus
            </MenuItem>
            <MenuItem
              onClick={() => navigate(`/produsnourulousuprapuscuplasa`)}
            >
              Rulou Suprapus cu Plasă
            </MenuItem>
            <MenuItem onClick={() => navigate(`/produsnoulamela`)}>
              Lamelă
            </MenuItem>
            <MenuItem
              onClick={() => navigate(`/produsnouPlasaCuBalamale17x25`)}
            >
              Plasa Cu Balamale 17x25
            </MenuItem>
            <MenuItem onClick={() => navigate(`/produsnouPlasaCuClema9x32`)}>
              Plasa Cu Clemă 9x32
            </MenuItem>
            <MenuItem onClick={() => navigate(`/produsnouPlasaInGol31x11`)}>
              Plasa Cu Plasa In Gol 31x11
            </MenuItem>
            <MenuItem onClick={() => navigate(`/produsnouPlasaTipRulou`)}>
              Plasa Tip Rulou
            </MenuItem>
            <MenuItem onClick={() => navigate(`/produsnouUsaCuPerie`)}>
              Ușa Cu Perie
            </MenuItem>
            <MenuItem onClick={() => navigate(`/produsnouUsaMagnetica`)}>
              Ușa Magnetică
            </MenuItem>
          </Menu>
        </Grid>
        <Grid item xs={12}>
          {selectedTable === 'Rulou aluminiu' && (
            <Box>
              <Typography variant="subtitle1" style={{ color: '#06386a' }}>
                Rulou aluminiu
              </Typography>
              <ProduseTable />
            </Box>
          )}

          {selectedTable === 'Rulou aluminiu cu plasă' && (
            <Box>
              <Typography variant="subtitle1" style={{ color: '#06386a' }}>
                Rulou aluminiu cu plasa
              </Typography>
              <ProduseCuPlasaTable />
            </Box>
          )}
          {selectedTable === 'Rulou tencuibil' && (
            <Box>
              <Typography variant="subtitle1" style={{ color: '#06386a' }}>
                Rulou tencuibil
              </Typography>
              <ProduseTencuibilTable />
            </Box>
          )}
          {selectedTable === 'Rulou tencuibil cu plasă' && (
            <Box>
              <Typography variant="subtitle1" style={{ color: '#06386a' }}>
                Rulou tencuibil cu plasă
              </Typography>
              <ProduseTencuibilCuPlasaTable />
            </Box>
          )}
          {selectedTable === 'Rulou suprapus' && (
            <Box>
              <Typography variant="subtitle1" style={{ color: '#06386a' }}>
                Rulou suprapus
              </Typography>
              <ProduseSuprapusTable />
            </Box>
          )}
          {selectedTable === 'Rulou suprapus cu plasă' && (
            <Box>
              <Typography variant="subtitle1" style={{ color: '#06386a' }}>
                Rulou suprapus cu plasă
              </Typography>
              <ProduseSuprapusCuPlasaTable />
            </Box>
          )}
          {selectedTable === 'Lamelă' && (
            <Box>
              <Typography variant="subtitle1" style={{ color: '#06386a' }}>
                Lamelă
              </Typography>
              <ProdusePVCTable />
            </Box>
          )}
          {selectedTable === 'Plasă cu balamale 17x25' && (
            <Box>
              <Typography variant="subtitle1" style={{ color: '#06386a' }}>
                Plasă cu balamale 17x25
              </Typography>
              <ProdusePlasaCuBalamale17x25Table />
            </Box>
          )}
          {selectedTable === 'Plasă cu clemă 9x32' && (
            <Box>
              <Typography variant="subtitle1" style={{ color: '#06386a' }}>
                Plasă cu clemă 9x32
              </Typography>
              <ProdusePlasaCuClema9x32Table />
            </Box>
          )}
          {selectedTable === 'Plasă în gol 31x11' && (
            <Box>
              <Typography variant="subtitle1" style={{ color: '#06386a' }}>
                Plasă în gol 31x11
              </Typography>
              <ProdusePlasaInGol31x11Table />
            </Box>
          )}
          {selectedTable === 'Plasă tip rulou' && (
            <Box>
              <Typography variant="subtitle1" style={{ color: '#06386a' }}>
                Plasă tip rulou
              </Typography>
              <ProdusePlasaTipRulouTable />
            </Box>
          )}
          {selectedTable === 'Ușă cu perie' && (
            <Box>
              <Typography variant="subtitle1" style={{ color: '#06386a' }}>
                Ușă cu perie{' '}
              </Typography>
              <ProduseUsaCuPerieTable />
            </Box>
          )}
          {selectedTable === 'Ușă magnetică' && (
            <Box>
              <Typography variant="subtitle1" style={{ color: '#06386a' }}>
                Ușă magnetică
              </Typography>
              <ProduseUsaMagneticaTable />
            </Box>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
