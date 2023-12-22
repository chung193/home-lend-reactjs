import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import myStyle from './style.scss';
import dummyContents from '../../../api/dummy/dummyContents';

export default function Slideshow(props) {
  return (
    <Carousel
      className={myStyle.mainSlider}
      autoplay="true"
      loop
    >
      {
        dummyContents.slideshow.map((item, i) => <Item key={i} item={item} />)
      }
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper sx={{ position: 'relative' }}>

      <div className={myStyle.itemSlider} >
        <h2>{props.item.title}</h2>
        <p>{props.item.desc}</p>

        <Button className="CheckButton">
          <a href={props.item.url}>Detail</a>
        </Button>
      </div>

      <img src={props.item.img} className={myStyle.imgSlider} />
    </Paper>
  );
}
