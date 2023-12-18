import * as React from 'react';
import Tree from './Tree';
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';

const marks = [
    {
        value: 0,
        label: '',
    },
    {
        value: 1,
        label: '',
    },
    {
        value: 2,
        label: '',
    },
    {
        value: 3,
        label: '',
    },
    {
        value: 4,
        label: '',
    },
];


export default function TreeNode({ node }) {
    const { children, label } = node;
    const [value, setValue] = React.useState([0, 4]);
    const [showChildren, setShowChildren] = React.useState(false);

    const handleClick = () => {
        setShowChildren(!showChildren);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function valuetext(value) {
        return `${value}`;
    }
    return (
        <>
            <Grid item xs={4} onClick={handleClick}>
                <span>{label}</span>
            </Grid>
            <Grid item xs={1} ></Grid>
            <Grid item xs={6} >
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    min={0}
                    max={4}
                    step={1}
                />
            </Grid>
            <Grid item xs={1} ></Grid>
        </>
    );
}