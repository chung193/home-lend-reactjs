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


export default function FeatureBanner(props: any) {

    return (
        <Box className={'featureBg'} sx={{ flexGrow: 1, minWidth: '100vw' }}>
            <Box className={'imgBg'} sx={{ flexGrow: 1, minWidth: '100vw' }}></Box>
            <Box className={'overlayBg'} sx={{ flexGrow: 1, minWidth: '100vw' }}></Box>
            <Grid  className={'contentBg'} container spacing={2} >
                <Grid item xs={6}>
                    <Typography variant="h4" display="block" gutterBottom>
                        Không gian riêng biệt
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        Chúng tôi cung cấp những không gian chuyên biệt phù hợp với nhu cầu của bạn: các chuyến công tác ngắn ngày, work from home
                    </Typography>
                    <Button variant="contained">Đặt ngay bây giờ</Button>
                </Grid>
            </Grid>
        </Box>
    );
}
