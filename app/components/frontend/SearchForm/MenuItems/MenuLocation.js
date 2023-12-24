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
import InputAdornment from '@mui/material/InputAdornment';

import {
  faAngleDown
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SelectTextField from '../FormItems/SelectTextField';
import myStyles from '../style.scss';

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
      <TextField
        sx={{
          '& fieldset': { border: 'none' },
        }}
        fullWidth
        className={myStyles.input}
        label=""
        defaultValue="Trên toàn quốc"
        size="small"
        variant="outlined"
        id="standard-basic"
        onClick={handleClick}
        InputProps={{
          disableUnderline: true,
          endAdornment: (
            <InputAdornment position="start" sx={{ paddingBottom: 1 }}>
              <FontAwesomeIcon icon={faAngleDown} />
            </InputAdornment>
          ),
        }}
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
