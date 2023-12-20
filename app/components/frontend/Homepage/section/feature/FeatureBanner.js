import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import myStyles from './style.scss';

export default function FeatureBanner(props) {
  return (
    <Box className={myStyles.featureBg} sx={{ flexGrow: 1, minWidth: '100vw' }}>
      <Box className={myStyles.imgBg} sx={{ flexGrow: 1, minWidth: '100vw' }}></Box>
      <Box className={myStyles.overlayBg} sx={{ flexGrow: 1, minWidth: '100vw' }}></Box>
      <Grid className={myStyles.contentBg} container spacing={2} >
        <Grid item xs={6}>
          <Typography variant="h4" display="block" gutterBottom>
                        Không gian riêng biệt
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
                        Chúng tôi cung cấp những không gian chuyên biệt phù hợp với nhu cầu của bạn: các chuyến công tác ngắn ngày, work from home
          </Typography>
          <Button variant="contained">Đặt ngay bây giờ</Button>
        </Grid>
      </Grid>
    </Box>
  );
}
