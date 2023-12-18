import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';

const useStyles = makeStyles()((theme) => ({
    "thead tr": { display: "block", cssFloat: "left", fontSize: "12px" },
    "thead th,td": {
        textAlign: "left",
        border: "1px solid #ccc",
        height: "100px"
    },
    header: { textAlign: "left", border: "1px solid #ccc" },
    "thead th": { verticalAlign: "bottom" },
    ".header-txt-label": {
        lineHeight: 0.8,
        position: "relative",
        WebkitTransform: "rotate(180deg)",
        transform: "rotate(180deg)",
        whiteSpace: "nowrap",
        WebkitWritingMode: "vertical-rl",
        writingMode: "vertical-rl"
    },
    breakline: {
      wordWrap: "break-word",
      overflowWrap: "break-word",
      textAlign: "center",
      width: "70%"
    },
    statustrue:{
        color: 'blue',
    }
  }));
  
  // TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
  export default useStyles;
