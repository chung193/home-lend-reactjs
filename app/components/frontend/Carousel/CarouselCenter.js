import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Typography from '@mui/material/Typography';
import myStyles from './style.scss';

const Responsive = {
  0: {
    items: 2,
    margin: 5
  },
  768: {
    items: 1.5,
    margin: 10
  },
  1024: {
    items: 1.5,
    margin: 20
  }
};

export default function CarouselCenter(props) {
  return (
    <>
      <Typography variant="h6" display="block" gutterBottom>
        Đối tác nói về chúng tôi
      </Typography>
      <OwlCarousel
        center={true}
        loop
        nav
        responsive={Responsive}
      >
        <div className={myStyles.item}>
          <h4>1</h4>
        </div>
        <div className={myStyles.item}>
          <h4>2</h4>
        </div>
        <div className={myStyles.item}>
          <h4>3</h4>
        </div>
        <div className={myStyles.item}>
          <h4>4</h4>
        </div>
        <div className={myStyles.item}>
          <h4>5</h4>
        </div>
        <div className={myStyles.item}>
          <h4>6</h4>
        </div>
        <div className={myStyles.item}>
          <h4>7</h4>
        </div>
        <div className={myStyles.item}>
          <h4>8</h4>
        </div>
        <div className={myStyles.item}>
          <h4>9</h4>
        </div>
        <div className={myStyles.item}>
          <h4>10</h4>
        </div>
        <div className={myStyles.item}>
          <h4>11</h4>
        </div>
        <div className={myStyles.item}>
          <h4>12</h4>
        </div>
      </OwlCarousel>
    </>
  );
}
