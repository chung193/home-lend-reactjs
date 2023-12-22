import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { FormLabel } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SelectTextField from '../FormItems/SelectTextField';

export default function MenuLocation() {
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
                Khu vực
      </Typography>
      <TextField
        label="Size"
        id="filled-size-small"
        defaultValue="Small"
        size="small"
        onClick={handleClick}
      />
      <Menu
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
            <SelectTextField />
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
