import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Typography from '@mui/material/Typography';
import dummyContent from 'enl-api/dummy/dummyContents';
import CarouselItemPost from './CarouselItemPost';
import Box from '@mui/material/Box';
import myStyle from './style.scss';

const Responsive = {
  0: {
    items: 1.5,
    margin: 5
  },
  768: {
    items: 2.5,
    margin: 10
  },
  1024: {
    items: 3.5,
    margin: 20
  },
  1920: {
    items: 6.5,
    margin: 20
  }
};

export default function CarouselList(props) {

  function Item(type, data) {
    switch (type) {
      case "post":
        return <CarouselItemPost data={data} />
        break;
      default:
        return <CarouselItemPost data={data} />;
        break;
    }
  }
  return (
    <Box className={myStyle.mainContainer}>
      <Typography variant="h6" display="block" gutterBottom>
        {props.title}
      </Typography>
      <OwlCarousel
        responsive={Responsive}
        center
        loop
        autoplay={true}
      >
        {
          dummyContent.post.map((item) => {
            return (
              Item(props.type, item)
            )
          })
        }
      </OwlCarousel>
    </Box>
  );
}
