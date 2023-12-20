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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCouch,faWifi ,faBlenderPhone,faCommentDots} from "@fortawesome/free-solid-svg-icons";

export default function Services(props: any) {

    return (
        <Box sx={{ flexGrow: 1, minWidth:'100vw' }}>
            <Typography variant="h4" display="block" gutterBottom>
                Chúng tôi cung cấp các dịch vụ
            </Typography>
           
            <Typography variant="caption" display="block" gutterBottom>
            Chúng tôi đảm bảo cung cấp các dịch vụ
            </Typography>
            <Grid container spacing={2} >
                {
                    dummyData.services.map((data: any) => {
                        return <Grid item xs={3} >
                            <FontAwesomeIcon icon={faWifi} />
                            <Typography variant="h6" display="block" gutterBottom>
                                {data.name}
                            </Typography>
                            <Typography variant="caption" display="block" gutterBottom>
                                {data.name}
                            </Typography>
                        </Grid>
                    })
                }
            </Grid>
        </Box>
    );
}
