import React from 'react';
import './style.scss';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import dummyContents from 'enl-api/dummy/dummyContents';
import myStyle from './style.scss';
export default function Suggest(props) {
  return (
    <Box className={myStyle.contentContainer}>
      <Box sx={{ flexGrow: 1, minWidth: '100vw', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <Typography variant="h4" display="block" gutterBottom>
          Chọn nơi bạn muốn tới
        </Typography>

        <Grid container spacing={2} className={myStyle.gridContainer}>
          {
            dummyContents.suggest.map((data) => {
              return (
                <Grid item xs={2} >
                  <Typography variant="h6" display="block" gutterBottom>
                    {data.name}
                  </Typography>
                  <a href={data.link} rel="noopener noreferrer" target="_blank">
                    <img
                      src={data.img}
                      // src={img}
                      width={100}
                      height={100}
                      alt={data.name}
                      className={myStyle.contentImg}
                    />
                  </a>
                </Grid>)
            })
          }
        </Grid>
        <Button variant="contained">Xem tất cả địa điểm</Button>
      </Box>
      
    </Box>
  );
}
