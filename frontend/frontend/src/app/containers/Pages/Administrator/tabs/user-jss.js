import { makeStyles } from 'tss-react/mui';
import { alpha, lighten } from '@mui/material/styles';

const useStyles = makeStyles()((theme, _params, classes) => ({
  header:{
    backgroundColor: '#3981A5',
    color: 'white',
    '& svg':{
        color: 'white',
    }
  },
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;