import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import myStyle from './style.scss';

export default function Slideshow(props) {
  console.log(myStyle);
  const items = [
    {
      name: 'Random Name #1',
      description: 'Probably the most random thing you have ever seen!'
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!'
    }
  ];

  return (
    <Carousel
      className={myStyle.mainSlider}
      autoplay="true"
      loop
    >
      {
        items.map((item, i) => <Item key={i} item={item} />)
      }
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper >
      <div className={myStyle.itemSlider}>
        <h2>{props.item.name}</h2>
        <p>{props.item.description}</p>

        <Button className="CheckButton">
                    Check it out!
        </Button>
      </div>
    </Paper>
  );
}
