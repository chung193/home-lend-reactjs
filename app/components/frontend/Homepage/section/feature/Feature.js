import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import Grid from '@mui/material/Grid';

import ImageListItem from '@mui/material/ImageListItem';
import myStyle from './style.scss';
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  }
];

export default function Feature(props) {
  return (
    <Box className={myStyle.containerMain}>
      <Box className={myStyle.contentContainer}>
        <Grid container spacing={2} className={myStyle.featureContainer}>
          <Grid item xs={4}>
            <ImageList sx={{ width: 500, height: 450, overflowY: 'hidden !important' }} cols={2} rowHeight={200}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" display="block" gutterBottom>
              Hướng tới tương lai
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Chúng tôi tin vào một thế giới nơi việc tìm nhà chỉ là một cú nhấp chuột.Cho dù bạn đang bán nhà, đi công tác hay chuyển đếnmột thành phố mới. Chỉ cần mang theo hành lý của bạn, và chúng tôi sẽ xử lý phần còn lại.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
