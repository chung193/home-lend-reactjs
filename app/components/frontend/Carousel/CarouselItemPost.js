import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Typography from '@mui/material/Typography';
import dummyContent from 'enl-api/dummy/dummyContents';
import Box from '@mui/material/Box';
import myStyle from './style.scss';
export default function CarouselItemPost(props) {
  const data = props.data;
  return (
    <Box className={myStyle.itemContainer}>
      <img src={data.img} className={myStyle.imgContainer} />
      <Box className={myStyle.textContent}>
        <Typography variant="h6" display="block" gutterBottom>
          {data.title}
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          {data.subtitle}
        </Typography>
      </Box>
    </Box >
  );
}
