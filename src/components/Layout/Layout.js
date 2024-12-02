import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import BlindsIcon from '@mui/icons-material/Blinds';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import {
  Button,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Store } from '../../Store';
import { useContext } from 'react';
import { DrawerStyle } from './DrawerStyle';
import logo from './logo.svg'; // Înlocuiește cu calea către imaginea ta SVG
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DescriptionIcon from '@mui/icons-material/Description';
import TvIcon from '@mui/icons-material/Tv';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: '#fff',
  borderBottom: '1px solid #ccc',
  boxShadow: 'none',
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    marginTop: 45,
    backgroundColor: '#f9f9fb',
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Layout({ children }) {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const location = useLocation();
  const classes = DrawerStyle();
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const singoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    setMeniuUtilizator(null);
  };

  const createAccountHandler = () => {
    navigate('/signup');
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [meniuUtilizator, setMeniuUtilizator] = React.useState(null);

  const handleMeniuUtilizatorOpen = (event) => {
    setMeniuUtilizator(event.currentTarget);
  };

  const handleMeniuUtilizatorClose = () => {
    setMeniuUtilizator(null);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {userInfo ? (
        <AppBar position="fixed" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ ...(open && { display: 'none' }), color: '#06386a' }}
              >
                <MenuIcon />
              </IconButton>
              {!open ? (
                <Typography
                  sx={{ color: '#06386a' }}
                  variant="h6"
                  noWrap
                  component="div"
                >
                  AmonRollotechnik
                </Typography>
              ) : (
                ''
              )}
            </Box>
            <Box>
              {userInfo ? (
                <React.Fragment>
                  <Button
                    sx={{ color: '#06386a' }}
                    onClick={handleMeniuUtilizatorOpen}
                  >
                    {userInfo.name}
                  </Button>
                  <Menu
                    anchorEl={meniuUtilizator}
                    open={Boolean(meniuUtilizator)}
                    onClose={handleMeniuUtilizatorClose}
                  >
                    {userInfo.isAdmin ? (
                      <MenuItem onClick={createAccountHandler}>
                        Crează cont
                      </MenuItem>
                    ) : (
                      ''
                    )}
                    <MenuItem onClick={singoutHandler}>
                      Deconectează-te
                    </MenuItem>
                  </Menu>
                </React.Fragment>
              ) : (
                <Button
                  sx={{ color: '#06386a' }}
                  component={Link}
                  to="/signin"
                  color="primary"
                >
                  Conecteaza-te
                </Button>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      ) : (
        ' '
      )}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            color: '#fff',
            backgroundColor: '#06386a',
            boxSizing: 'border-box',
          },
          '& .MuiListItem-root:hover': {
            backgroundColor: '#003c7f',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Box sx={{ mt: 1, width: '160px', mr: 'auto', mb: 2 }}>
            <img
              src={logo}
              alt=""
              sx={{
                height: 30, // Păstrează proporțiile originale pentru înălțime
              }}
            />
          </Box>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon sx={{ color: '#fff' }} />
            ) : (
              <ChevronLeftIcon sx={{ color: '#fff' }} />
            )}
          </IconButton>
        </DrawerHeader>
        <Typography ml={2} sx={{ color: '#808eab' }}>
          Calculator rulouri
        </Typography>
        <List c>
          <ListItem
            onClick={() => navigate('/rulourialuminiu')}
            className={
              location.pathname === '/rulourialuminiu'
                ? classes.active
                : classes.notactive
            }
          >
            <ListItemIcon>
              <BlindsIcon
                sx={{ color: '#fff' }}
                className={
                  location.pathname === '/rulourialuminiu'
                    ? classes.active
                    : classes.notactive
                }
              />
            </ListItemIcon>
            <ListItemText
              primary="Aluminiu"
              onClick={() => navigate('/rulourialuminiu')}
            />
          </ListItem>
          <ListItem
            onClick={() => navigate('/rulourialuminiucuplasa')}
            className={
              location.pathname === '/rulourialuminiucuplasa'
                ? classes.active
                : classes.notactive
            }
          >
            <ListItemIcon>
              <BlindsIcon
                sx={{ color: '#fff' }}
                className={
                  location.pathname === '/rulourialuminiucuplasa'
                    ? classes.active
                    : classes.notactive
                }
              />
            </ListItemIcon>
            <ListItemText
              primary="Aluminiu cu plasă"
              onClick={() => navigate('/rulourialuminiucuplasa')}
            />
          </ListItem>
          <ListItem
            onClick={() => navigate('/rulouritencuibile')}
            className={
              location.pathname === '/rulouritencuibile'
                ? classes.active
                : classes.notactive
            }
          >
            <ListItemIcon>
              <BlindsIcon
                sx={{ color: '#fff' }}
                className={
                  location.pathname === '/#'
                    ? classes.active
                    : classes.notactive
                }
              />
            </ListItemIcon>
            <ListItemText
              primary="Tencuibile"
              onClick={() => navigate('/rulouritencuibile')}
            />
          </ListItem>
          <ListItem
            onClick={() => navigate('/ruloutencuibilcuplasa')}
            className={
              location.pathname === '/ruloutencuibilcuplasa'
                ? classes.active
                : classes.notactive
            }
          >
            <ListItemIcon>
              <BlindsIcon
                sx={{ color: '#fff' }}
                className={
                  location.pathname === '/ruloutencuibilcuplasa'
                    ? classes.active
                    : classes.notactive
                }
              />
            </ListItemIcon>
            <ListItemText
              primary="Tencuibile cu plasă"
              onClick={() => navigate('/ruloutencuibilcuplasa')}
            />
          </ListItem>
          <ListItem
            onClick={() => navigate('/rulourisuprapus')}
            className={
              location.pathname === '/rulourisuprapus'
                ? classes.active
                : classes.notactive
            }
          >
            <ListItemIcon>
              <BlindsIcon
                sx={{ color: '#fff' }}
                className={
                  location.pathname === '/rulourisuprapus'
                    ? classes.active
                    : classes.notactive
                }
              />
            </ListItemIcon>
            <ListItemText
              primary="Suprapuse"
              onClick={() => navigate('/rulourisuprapus')}
            />
          </ListItem>
          <ListItem
            onClick={() => navigate('/rulourisuprapuscuplasa')}
            className={
              location.pathname === '/rulourisuprapuscuplasa'
                ? classes.active
                : classes.notactive
            }
          >
            <ListItemIcon>
              <BlindsIcon
                sx={{ color: '#fff' }}
                className={
                  location.pathname === '/rulourisuprapuscuplasa'
                    ? classes.active
                    : classes.notactive
                }
              />
            </ListItemIcon>
            <ListItemText
              primary="Suprapuse cu plasă"
              onClick={() => navigate('/rulourisuprapuscuplasa')}
            />
          </ListItem>
          <ListItem
            onClick={() => navigate('/ruloupvc')}
            className={
              location.pathname === '/ruloupvc'
                ? classes.active
                : classes.notactive
            }
          >
            <ListItemIcon>
              <BlindsIcon
                sx={{ color: '#fff' }}
                className={
                  location.pathname === '/ruloupvc'
                    ? classes.active
                    : classes.notactive
                }
              />
            </ListItemIcon>
            <ListItemText
              primary="Rulou PVC"
              onClick={() => navigate('/ruloupvc')}
            />
          </ListItem>
        </List>
        <Typography ml={2} sx={{ color: '#808eab' }}>
          Calculator Accesorii
        </Typography>
        <List dense>
          {userInfo && userInfo.isAdmin ? (
            <ListItem
              onClick={() => navigate('/lamela')}
              className={
                location.pathname === '/lamela'
                  ? classes.active
                  : classes.notactive
              }
            >
              <ListItemIcon>
                <TvIcon
                  sx={{ color: '#fff' }}
                  className={
                    location.pathname === '/lamela'
                      ? classes.active
                      : classes.notactive
                  }
                />
              </ListItemIcon>
              <ListItemText
                primary="Lamele"
                onClick={() => navigate('/lamela')}
              />
            </ListItem>
          ) : (
            ''
          )}

          {userInfo && userInfo.isAdmin ? (
            <ListItem
              onClick={() => navigate('/plasacubalama17x25')}
              className={
                location.pathname === '/plasacubalama17x25'
                  ? classes.active
                  : classes.notactive
              }
            >
              <ListItemIcon>
                <TvIcon
                  sx={{ color: '#fff' }}
                  className={
                    location.pathname === '/plasacubalama17x25'
                      ? classes.active
                      : classes.notactive
                  }
                />
              </ListItemIcon>
              <ListItemText
                primary="Plasa cu balamale 17x25"
                onClick={() => navigate('/plasacubalama17x25')}
              />
            </ListItem>
          ) : (
            ''
          )}

          {userInfo && userInfo.isAdmin ? (
            <ListItem
              onClick={() => navigate('/plasacuclema9x32')}
              className={
                location.pathname === '/plasacuclema9x32'
                  ? classes.active
                  : classes.notactive
              }
            >
              <ListItemIcon>
                <TvIcon
                  sx={{ color: '#fff' }}
                  className={
                    location.pathname === '/plasacuclema9x32'
                      ? classes.active
                      : classes.notactive
                  }
                />
              </ListItemIcon>
              <ListItemText
                primary="Plasa cu clemă 9x32"
                onClick={() => navigate('/plasacuclema9x32')}
              />
            </ListItem>
          ) : (
            ''
          )}

          {userInfo && userInfo.isAdmin ? (
            <ListItem
              onClick={() => navigate('/plasaingol')}
              className={
                location.pathname === '/plasaingol'
                  ? classes.active
                  : classes.notactive
              }
            >
              <ListItemIcon>
                <TvIcon
                  sx={{ color: '#fff' }}
                  className={
                    location.pathname === '/plasaingol'
                      ? classes.active
                      : classes.notactive
                  }
                />
              </ListItemIcon>
              <ListItemText
                primary="Plasa în gol"
                onClick={() => navigate('/plasaingol')}
              />
            </ListItem>
          ) : (
            ''
          )}

          {userInfo && userInfo.isAdmin ? (
            <ListItem
              onClick={() => navigate('/plasatiprulou')}
              className={
                location.pathname === '/plasatiprulou'
                  ? classes.active
                  : classes.notactive
              }
            >
              <ListItemIcon>
                <TvIcon
                  sx={{ color: '#fff' }}
                  className={
                    location.pathname === '/plasatiprulou'
                      ? classes.active
                      : classes.notactive
                  }
                />
              </ListItemIcon>
              <ListItemText
                primary="Plasa tip rulou"
                onClick={() => navigate('/plasatiprulou')}
              />
            </ListItem>
          ) : (
            ''
          )}
          {userInfo && userInfo.isAdmin ? (
            <ListItem
              onClick={() => navigate('/usacuperie')}
              className={
                location.pathname === '/usacuperie'
                  ? classes.active
                  : classes.notactive
              }
            >
              <ListItemIcon>
                <TvIcon
                  sx={{ color: '#fff' }}
                  className={
                    location.pathname === '/usacuperie'
                      ? classes.active
                      : classes.notactive
                  }
                />
              </ListItemIcon>
              <ListItemText
                primary="Ușă cu perie"
                onClick={() => navigate('/usacuperie')}
              />
            </ListItem>
          ) : (
            ''
          )}
          {userInfo && userInfo.isAdmin ? (
            <ListItem
              onClick={() => navigate('/usamagnetica')}
              className={
                location.pathname === '/usamagnetica'
                  ? classes.active
                  : classes.notactive
              }
            >
              <ListItemIcon>
                <TvIcon
                  sx={{ color: '#fff' }}
                  className={
                    location.pathname === '/usamagnetica'
                      ? classes.active
                      : classes.notactive
                  }
                />
              </ListItemIcon>
              <ListItemText
                primary="Ușă magnetică"
                onClick={() => navigate('/usamagnetica')}
              />
            </ListItem>
          ) : (
            ''
          )}
        </List>
        <Divider />
        <Typography ml={2} sx={{ color: '#808eab' }}>
          Comenzi
        </Typography>
        <List dense>
          <ListItem
            onClick={() => navigate('/comenzi')}
            className={
              location.pathname === '/comenzi'
                ? classes.active
                : classes.notactive
            }
          >
            <ListItemIcon>
              <ShoppingCartIcon
                sx={{ color: '#fff' }}
                className={
                  location.pathname === '/comenzi'
                    ? classes.active
                    : classes.notactive
                }
              />
            </ListItemIcon>
            <ListItemText
              primary="Comenzile tale"
              onClick={() => navigate('/comenzi')}
            />
          </ListItem>
          {userInfo && userInfo.isAdmin ? (
            <ListItem
              onClick={() => navigate('/comenzigenerale')}
              className={
                location.pathname === '/comenzigenerale'
                  ? classes.active
                  : classes.notactive
              }
            >
              <ListItemIcon>
                <TvIcon
                  sx={{ color: '#fff' }}
                  className={
                    location.pathname === '/comenzigenerale'
                      ? classes.active
                      : classes.notactive
                  }
                />
              </ListItemIcon>
              <ListItemText
                primary="Comenzile generale"
                onClick={() => navigate('/comenzigenerale')}
              />
            </ListItem>
          ) : (
            ''
          )}
        </List>

        <Divider />
        {userInfo && userInfo.isAdmin ? (
          <>
            <Typography mt={2} sx={{ color: '#808eab' }} ml={2}>
              Nomenclatoare
            </Typography>
            <List dense>
              <ListItem
                onClick={() => navigate('/produse')}
                className={
                  location.pathname === '/produse'
                    ? classes.active
                    : classes.notactive
                }
              >
                <ListItemIcon>
                  <DescriptionIcon
                    sx={{ color: '#fff' }}
                    className={
                      location.pathname === '/produse'
                        ? classes.active
                        : classes.notactive
                    }
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Produse"
                  onClick={() => navigate('/produse')}
                />
              </ListItem>
            </List>{' '}
          </>
        ) : (
          ''
        )}

        <List sx={{ marginTop: 'auto' }} dense>
          <ListItem
            className={
              location.pathname === '/update'
                ? classes.active
                : classes.notactive
            }
          >
            <ListItemIcon>
              <PriorityHighIcon
                sx={{ color: '#fff' }}
                className={
                  location.pathname === '/update'
                    ? classes.active
                    : classes.notactive
                }
              />
            </ListItemIcon>
            <ListItemText
              primary="Noutati"
              onClick={() => navigate('/update')}
            />
          </ListItem>
        </List>
      </Drawer>

      <Main open={open}>{children} </Main>
    </Box>
  );
}
