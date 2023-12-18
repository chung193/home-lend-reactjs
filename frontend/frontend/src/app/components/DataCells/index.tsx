import React from 'react';
import './DataCells.scss';

const DataCell: React.FC<Readonly<{
  x: number;
  y: number;
  value: boolean;
}>
>= ({ x, y, value }) => {
  if(value){
    return (
      <td onClick={() => Trigger(x,y,value)} className="cell-checked" itemID={`${x}_${y}`}>
      </td>
    );
  }
  else{
    return (
      <td onClick={() => Trigger(x,y,value)} className="cell-unchecked" itemID={`${x}_${y}`}>
      </td>
    );
  }
  
};

const Trigger = (x:number ,y: number,value: boolean) => {
  // call api
  console.log(`X is: ${x}, Y: ${y}, value: ${value}`);
}

export default DataCell;