import React from 'react';
import myStyles from './style.scss';
import CanvasModel from './canvas';
import MyModel from './model';

export default function index(props) {
  return (
    <div className={myStyles.container}>
      <CanvasModel>
        <MyModel/>
      </CanvasModel>
    </div>
  );
}
