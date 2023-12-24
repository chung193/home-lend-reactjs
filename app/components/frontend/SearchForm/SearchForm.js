import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuLocation from './MenuItems/MenuLocation';
import MenuPrice from './MenuItems/MenuPrice';
import MenuAcreage from './MenuItems/MenuAcreage';
import MenuExtend from './MenuItems/MenuExtend';
import myStyles from './style.scss';

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
    <Box sx={{ }}>
      <Box className={myStyles.searchBox}>
        <Grid container spacing={2} className={myStyles.searchGrid}>
          <Grid item xs={3} className={myStyles.searchItem}>
            <MenuLocation />
          </Grid>
          <Grid item xs={2} className={myStyles.searchItem}>
            <MenuPrice />
          </Grid>
          <Grid item xs={2} className={myStyles.searchItem}>
            <MenuAcreage />
          </Grid>
          <Grid item xs={3} sx={{ paddingTop: '5px !important' }}>
            <MenuExtend />
          </Grid>
          <Grid item xs={2} sx={{ padding: '5px !important' }}>
            <Button variant="contained" className={myStyles.searchButton}>Tìm kiếm</Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
