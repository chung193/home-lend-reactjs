import React from 'react';
import './style.scss';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';

import Link from 'next/link';
import dummyData from '../../../../_api/dummy/dummyData';
import dummyLink from '../../../../_api/dummy/dummyLink';


export default function Suggest(props: any) {

    return (
        <Box sx={{ flexGrow: 1, minWidth:'100vw' }}>
            <Typography variant="h4" display="block" gutterBottom>
                Chọn nơi bạn muốn tới
            </Typography>
            <Grid container spacing={2} >
                {
                    dummyData.suggest.map((data: any) => {
                        return <Grid item xs={2} >
                            <Typography variant="caption" display="block" gutterBottom>
                                {data.name}
                            </Typography>
                            <Link href={data.link} rel="noopener noreferrer" target="_blank">
                                <Image
                                    src={require('../../../../../public/static/images/dummy/hanoi.jpg')}
                                    //src={img}
                                    width={100}
                                    height={100}
                                    alt=""
                                />
                            </Link>
                        </Grid>
                    })
                }
            </Grid>
        </Box>
    );
}
