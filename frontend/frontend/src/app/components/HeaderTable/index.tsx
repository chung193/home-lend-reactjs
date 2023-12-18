import React from 'react';
import { Header } from '../../api/dummy/interlockDataHeader'
import useStyles from './headertable-jss';

const HeaderTable: React.FC<
Readonly<{
        dataHeader: Header[];
    }>
> = ({ dataHeader }) => {
    const { classes } = useStyles();

    return (
        <thead>
            {
                Array.from(Array(5), (e, rowIndex) => {
                    return (<tr key={`header_${rowIndex}`}>
                        {rowIndex === 0 && <th colSpan={3} rowSpan={3}><div className={classes.breakline}>PROTEO INTERLOCK MATRIX MAINFRAME 1, 2＆3</div></th>}
                        {rowIndex === 0 && <th rowSpan={4}><div className={classes.breakline}>CURRENT STATUS</div></th>}
                        {rowIndex === 0 && <th><div className="">DESCRIPTION</div></th>}
                        {rowIndex === 0 && dataHeader.map((item, index) => (
                            <th colSpan={item.status.length}><div className="">{item.description}</div></th>
                        ))}
                        {rowIndex === 1 && <th><div className="">SOURCE</div></th>}
                        {rowIndex === 1 && dataHeader.map((item, index) => (
                            <th colSpan={item.status.length}><div className="">{item.source}</div></th>
                        ))}
                        {rowIndex === 2 && <th><div className="">UNIT</div></th>}
                        {rowIndex === 2 && dataHeader.map((item, index) => (
                            <th colSpan={item.status.length}><div className="">{item.unit}</div></th>
                        ))}
                        {rowIndex === 3 && <th colSpan={3}><div className={classes.breakline}>AVAILABLE OPERATIONS</div></th>}
                        {rowIndex === 3 && <th><div className="">STATUS</div></th>}
                        {rowIndex === 3 && dataHeader.map((item, index) => (
                            item.status.map((item1, j) => (
                                <th rowSpan={1} colSpan={1}><div className="">{item1.statusName}</div></th>
                            ))
                        ))}
                        {rowIndex === 4 && <th colSpan={1} rowSpan={1}><div className={classes.breakline}>UNIT</div></th>}
                        {rowIndex === 4 && <th colSpan={1} rowSpan={1}><div className={classes.breakline}>OPERATION</div></th>}
                        {rowIndex === 4 && <th colSpan={1} rowSpan={1}><div className={classes.breakline}>MODE</div></th>}
                        {rowIndex === 4 && <th colSpan={1} rowSpan={1}><div className={classes.breakline}>Note</div></th>}
                        {rowIndex === 4 && <th colSpan={1} rowSpan={1}><div className={classes.breakline}></div></th>}
                        {rowIndex === 4 && dataHeader.map((item, index) => (
                            item.status.map((item1, j) => (
                                <th rowSpan={1} colSpan={1}><div className="">{item1.index}</div></th>
                            ))
                        ))}
                    </tr>)
                })
            }
        </thead>
    );
};

export default HeaderTable;


