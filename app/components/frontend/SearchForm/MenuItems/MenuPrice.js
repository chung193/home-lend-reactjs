import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Slider from '../FormItems/Slider';

export default function MenuPrice() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Typography variant="h6" component="h6">
                Mức giá
      </Typography>
      <TextField
        label="Size"
        id="filled-size-small"
        defaultValue="Small"
        size="small"
        onClick={handleClick}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem sx={{ minWidth: 200 }}>
          <Typography variant="caption" display="block" gutterBottom>
                        Khu vực
          </Typography>
        </MenuItem>
        <MenuItem>
          <FormControl fullWidth>
            <Slider/>
          </FormControl>
        </MenuItem>
        <MenuItem>
          <Stack spacing={2} direction="row">
            <Button variant="text">Đặt lại</Button>
            <Button variant="contained">Áp dụng</Button>
          </Stack>
        </MenuItem>
      </Menu>
    </>
  );
}
