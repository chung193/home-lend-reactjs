import React from 'react';
import './style.scss';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dummyContents from 'enl-api/dummy/dummyContents';
import {
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

export default function Latest(props) {
  return (
    <Box sx={{ flexGrow: 1, minWidth: '100vw' }}>
      <Typography variant="h4" display="block" gutterBottom>
                Tin đăng mới nhất
      </Typography>
      <Grid container spacing={2} >
        <Grid item xs={4}>
          {
            dummyContents.post.map((data) => (
              <div key={data.key}>
                <Typography variant="caption" display="block" gutterBottom>
                  <a href="javascript:void(0)" >{data.subtitle} <FontAwesomeIcon icon={faArrowRight} /></a>
                </Typography>
              </div>
            )
            )
          }
        </Grid>
        <Grid item xs={4}>
          {
            dummyContents.post.map((data) => (
              <div key={data.key}>
                <Typography variant="caption" display="block" gutterBottom>
                  <a href="javascript:void(0)" >{data.subtitle} <FontAwesomeIcon icon={faArrowRight} /></a>
                </Typography>
              </div>
            )
            )
          }
        </Grid>
        <Grid item xs={4}>
          {
            dummyContents.post.map((data) => (
              <div key={data.key}>
                <Typography variant="caption" display="block" gutterBottom>
                  <a href="javascript:void(0)" >{data.subtitle} <FontAwesomeIcon icon={faArrowRight} /></a>
                </Typography>
              </div>
            )
            )
          }
        </Grid>
      </Grid>
    </Box>
  );
}
