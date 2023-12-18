import React from 'react';
import DataCell from './DataCells';
import { Header } from '../../../api/dummy/interlockDataHeader'
import { Body } from '../../../api/dummy/interlockDataBody'
import _ from 'lodash';

const calculator = (body: Body): number => {
  let len = 0;
   len = _.reduce(body.operation, (len, arr) => { 
     len += arr.mode.length;
     return len;
   }, 0);
  return len;
};

function renderCells(intRows: number, totalColumn: number, item2: number[]) {
  var cells = [];
  for (var intColumns = 0; intColumns < totalColumn; intColumns++) {
    cells.push(DataCell({x:intColumns + 1, y:intRows, value: true}));
  }
  return cells;
}

const InterlockBody: React.FC<
    Readonly<{
        dataBody: Body[];
        dataHeader: Header[];
    }>
    > = ({ dataBody, dataHeader }) => {
  return (
    <tbody>
        { 
        dataBody.map((item, i) => (
          item.operation.map((item1,j) => (
            item1.mode.map((item2,k) => (
            <tr key={`${item2.index}`}>
              {j === 0 && k === 0 && <td rowSpan={calculator(item)}><div className="">{item.unit}</div></td>}
              {k === 0 && <td rowSpan={item1.mode.length}><div className="body-txt-label">{item1.operationName}</div></td>}
              {<td><div className="body-txt-label">{item2.modeName}</div></td>}
              {<td><div className="body-txt-label">{item2.note}</div></td> }
              {<td className=''><div className="body-txt-label">{item2.index}</div></td> }
                    {renderCells(item2.index, getSumHeaderStatus(dataHeader), item2.values)}
            </tr>
          ))
          ))
        ))}
    </tbody>
  );
};

const getSumHeaderStatus = (dataHeader: Header[]): number => {
    let len = 0;
    len = _.reduce(dataHeader, (len, arr) => {
        len += arr.status.length;
        return len;
    }, 0);
    return len;
}

export default InterlockBody;
