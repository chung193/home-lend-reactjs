import React from 'react';
import './style.scss';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCouch, faWifi, faBlenderPhone, faCommentDots
} from '@fortawesome/free-solid-svg-icons';

const dummyData = [
  {
    name: 'wifi',
    desc: 'Đảm bảo wifi cho bạn làm việc'
  },
  {
    name: 'wifi',
    desc: 'Đảm bảo wifi cho bạn làm việc'
  },
  {
    name: 'wifi',
    desc: 'Đảm bảo wifi cho bạn làm việc'
  },
  {
    name: 'wifi',
    desc: 'Đảm bảo wifi cho bạn làm việc'
  }
];

export default function Services(props) {
  return (
    <Box sx={{ flexGrow: 1, minWidth: '100vw' }}>
      <Typography variant="h4" display="block" gutterBottom>
                Chúng tôi cung cấp các dịch vụ
      </Typography>

      <Typography variant="caption" display="block" gutterBottom>
            Chúng tôi đảm bảo cung cấp các dịch vụ
      </Typography>
      <Grid container spacing={2} >
        {
          dummyData.map((data) => <Grid item xs={3} >
            <FontAwesomeIcon icon={faWifi} />
            <Typography variant="h6" display="block" gutterBottom>
              {data.name}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              {data.desc}
            </Typography>
          </Grid>)
        }
      </Grid>
    </Box>
  );
}
