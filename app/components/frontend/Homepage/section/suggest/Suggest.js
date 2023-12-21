import React from 'react';
import './style.scss';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const dummyData = [
  {
    name: 'Hà Nội',
    desc: 'Đảm bảo wifi cho bạn làm việc',
    link: 'abc'
  },
  {
    name: 'Đà Nẵng',
    desc: 'Đảm bảo wifi cho bạn làm việc',
    link: 'abc'
  },
  {
    name: 'Hồ Chí Minh',
    desc: 'Đảm bảo wifi cho bạn làm việc',
    link: 'abc'
  },
  {
    name: 'Hải Phòng',
    desc: 'Đảm bảo wifi cho bạn làm việc',
    link: 'abc'
  }
];

export default function Suggest(props) {
  return (
    <Box sx={{ flexGrow: 1, minWidth: '100vw' }}>
      <Typography variant="h4" display="block" gutterBottom>
                Chọn nơi bạn muốn tới
      </Typography>
      <Grid container spacing={2} >
        {
          dummyData.map((data) => <Grid item xs={2} >
            <Typography variant="caption" display="block" gutterBottom>
              {data.name}
            </Typography>
            <a href={data.link} rel="noopener noreferrer" target="_blank">
              <img
                src={'https://jackytravel.com/wp-content/uploads/2018/09/hanoi-old-quarter-1.jpg-1-1140x530.jpg'}
                // src={img}
                width={100}
                height={100}
                alt=""
              />
            </a>
          </Grid>)
        }

      </Grid>
      <Button variant="contained">Xem tất cả địa điểm</Button>
    </Box>
  );
}
