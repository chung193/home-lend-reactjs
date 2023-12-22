import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuLocation from './MenuItems/MenuLocation';
import MenuPrice from './MenuItems/MenuPrice';
import MenuAcreage from './MenuItems/MenuAcreage';
import MenuExtend from './MenuItems/MenuExtend';

export default function SearchForm() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1, minWidth: '100vw', minHeight: 200 }}>
      <Grid container spacing={2}>
        <Grid item sx={3}>
          <MenuLocation />
        </Grid>
        <Grid item sx={2}>
          <MenuPrice />
        </Grid>
        <Grid item sx={2}>
          <MenuAcreage />
        </Grid>
        <Grid item sx={2}>
          <MenuExtend />
        </Grid>
        <Grid item sx={3}>
          <Button variant="contained">Tìm kiếm</Button>
        </Grid>
      </Grid>
    </Box>
  );
}
