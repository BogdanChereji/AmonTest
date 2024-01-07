import { makeStyles } from '@material-ui/core';

export const DrawerStyle = makeStyles((theme) => ({
  active: {
    backgroundColor: '#0c74dc',
    borderBottom: '1px solid #2f8f90',
    color: '#fff',
  },

  buttonHeader: {
    backgroundColor: '#286da9 !important',
    color: 'white !important',
    fontWeight: 'medium !important',
  },
  buttonText: {
    color: 'white !important',
    fontWeight: 'medium !important',
  },
}));
